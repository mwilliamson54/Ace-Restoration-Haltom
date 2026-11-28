export async function onRequestPost(context) {
  try {
    const formData = await context.request.formData();

    const fullName = (formData.get('fullName') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const phone = (formData.get('phone') || '').toString().trim();
    const serviceType = (formData.get('serviceType') || '').toString().trim();
    const propertyAddress = (formData.get('propertyAddress') || '').toString().trim();
    const damageDetails = (formData.get('damageDetails') || '').toString().trim();

    if (!fullName || !email || !serviceType || !propertyAddress || !damageDetails) {
      return Response.json(
        { ok: false, error: 'Please complete all required fields.' },
        { status: 400 }
      );
    }

    if (!context.env.RESEND_API) {
      return Response.json(
        { ok: false, error: 'Email service is not configured. Please call (469) 481-1273.' },
        { status: 500 }
      );
    }

    const fromEmail = context.env.RESEND_FROM || 'Website Enquiry <onboarding@resend.dev>';
    const toEmail = context.env.RESEND_TO || 'homemoldwaterfiredamage@gmail.com';

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${context.env.RESEND_API}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `New ${serviceType} enquiry from ${fullName}`,
        text: [
          'New Restoration Enquiry',
          '-----------------------',
          `Name: ${fullName}`,
          `Email: ${email}`,
          `Phone: ${phone || 'Not provided'}`,
          `Service: ${serviceType}`,
          `Property Address: ${propertyAddress}`,
          '',
          'Damage Details:',
          damageDetails
        ].join('\n')
      })
    });

    if (!res.ok) {
      const errBody = await res.json().catch(() => ({}));
      console.error('Resend API error:', res.status, errBody);
      return Response.json(
        {
          ok: false,
          error: errBody.message || 'Unable to send your enquiry right now. Please call (469) 481-1273.'
        },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, error: 'Unexpected server error. Please call (469) 481-1273.' },
      { status: 500 }
    );
  }
}
