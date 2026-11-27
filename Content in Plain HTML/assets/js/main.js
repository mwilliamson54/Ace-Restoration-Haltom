(function () {
  'use strict';

  // Mobile navigation drawer
  var toggleBtn = document.querySelector('[data-nav-toggle]');
  var drawer = document.getElementById('mobile-drawer');
  var closeBtn = document.querySelector('[data-nav-close]');

  function setDrawer(open) {
    if (!drawer || !toggleBtn) return;
    drawer.classList.toggle('is-open', open);
    drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
    toggleBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
    if (open && closeBtn) {
      closeBtn.focus();
    } else if (!open) {
      toggleBtn.focus();
    }
  }

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', function () {
      setDrawer(true);
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      setDrawer(false);
    });
  }

  if (drawer) {
    drawer.addEventListener('click', function (e) {
      if (e.target === drawer) {
        setDrawer(false);
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (drawer && drawer.classList.contains('is-open')) {
        setDrawer(false);
      }
      document.querySelectorAll('.nav-item.is-open').forEach(function (item) {
        item.classList.remove('is-open');
        var btn = item.querySelector('button[aria-expanded]');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Desktop dropdown toggle support for keyboard & click
  document.querySelectorAll('.nav-item > button[aria-expanded]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var parent = btn.parentElement;
      var isOpen = parent.classList.contains('is-open');
      document.querySelectorAll('.nav-item.is-open').forEach(function (other) {
        if (other !== parent) {
          other.classList.remove('is-open');
          var otherBtn = other.querySelector('button[aria-expanded]');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });
      parent.classList.toggle('is-open', !isOpen);
      btn.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
    });
  });

  // Scroll reveal (respects prefers-reduced-motion)
  var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.reveal');
  if (!prefersReduced && 'IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // Contact form client-side validation (no fake backend success)
  var contactForm = document.getElementById('restoration-enquiry-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;
      var statusBox = document.getElementById('form-status');

      var fields = [
        { id: 'full-name', label: 'Please enter your name.' },
        { id: 'email', label: 'Please enter a valid email address.', type: 'email' },
        { id: 'service-type', label: 'Please select the type of damage or service.' },
        { id: 'property-address', label: 'Please enter your property city, ZIP code, or street address.' },
        { id: 'damage-details', label: 'Please describe what happened and any safety concerns.' }
      ];

      fields.forEach(function (f) {
        var el = document.getElementById(f.id);
        var err = document.getElementById(f.id + '-error');
        if (!el || !err) return;
        var val = (el.value || '').trim();
        var ok = val.length > 0;
        if (ok && f.type === 'email') {
          ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
        }
        if (!ok) {
          valid = false;
          err.textContent = f.label;
          el.setAttribute('aria-invalid', 'true');
        } else {
          err.textContent = '';
          el.removeAttribute('aria-invalid');
        }
      });

      if (!statusBox) return;

      if (!valid) {
        statusBox.className = 'form-status form-status--error is-visible';
        statusBox.textContent = 'Please complete the highlighted required fields before submitting your enquiry.';
        return;
      }

      // Honest status: no backend form endpoint is configured in this static HTML repository yet
      var action = contactForm.getAttribute('action');
      if (!action || action === '#') {
        statusBox.className = 'form-status form-status--info is-visible';
        statusBox.textContent = 'Your enquiry details passed validation, but this static site does not yet have a live form endpoint connected. Configure your form handler action URL (e.g., Cloudflare Pages Functions or Formspree) before going live.';
        return;
      }

      contactForm.submit();
    });
  }
})();
