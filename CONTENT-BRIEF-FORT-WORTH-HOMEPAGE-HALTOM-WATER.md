# Fort Worth-first Homepage and Haltom City Water Page — Editorial Brief

Date: 2026-11-24

## Strategic ownership

- Homepage `/`: primary keyword **water damage restoration Fort Worth**. Broadly introduces water damage restoration, fire and smoke damage restoration, mold removal, and mold remediation for Fort Worth, Haltom City, and Bedford. Water restoration is the dominant service.
- Haltom City page `/service-areas/haltom-city/water-damage-restoration/`: primary keyword **water damage restoration Haltom City**. Dedicated local water-service page.
- Fort Worth city page `/service-areas/fort-worth/`: broad geographic overview for all three service categories; links to homepage for Fort Worth water intent.
- Bedford city and water-service pages retain Bedford-specific intent.
- Existing Fort Worth water page `/service-areas/fort-worth/water-damage-restoration/` is a duplicate-intent risk. A Cloudflare Pages `_redirects` rule has been committed at `Content in Plain HTML/_redirects` to send this path to `/` with status 301. The redirect is source-configured; live activation still depends on deploying that file at the published output root and checking the HTTP response.

## Homepage brief

- Page type: Homepage / primary commercial landing page
- H1: Water Damage Restoration in Fort Worth, TX
- Primary keyword: Water Damage Restoration Fort Worth
- Secondary cluster: emergency water removal Fort Worth, water extraction, structural drying, dehumidification, residential water damage cleanup, commercial water damage restoration, fire and smoke damage restoration, mold removal, mold remediation
- Search intent: commercial / emergency service discovery
- Local coverage: Fort Worth primary; Haltom City and Bedford secondary priority communities
- Unique angle: water restoration as the primary offer, with clear access to complementary fire and mold services
- Internal links: water, fire, mold hubs; Fort Worth city page and Fort Worth fire/mold local pages; Haltom City water page and city page; Bedford water page and city page; service-area hub; contact; about
- SEO title: Water Damage Restoration Fort Worth, TX | Ace Restoration
- Meta description: Need water damage restoration in Fort Worth? Ace Restoration provides water removal, structural drying, fire restoration, and mold services. 24/7 response.
- Visible word count: 2,354 (HTML tags excluded)

## Haltom City page brief

- Page type: City × service landing page
- Canonical URL: `/service-areas/haltom-city/water-damage-restoration/`
- H1: Water Damage Restoration in Haltom City, TX
- Primary keyword: Water Damage Restoration Haltom City
- Secondary cluster: emergency water removal Haltom City, water extraction, burst pipe cleanup, appliance leak cleanup, structural drying, dehumidification, stormwater intrusion
- Search intent: local commercial / emergency water restoration
- Local entities: ZIP 76117; Browning Heights, Diamond Oaks, Fossil Ridge, Haltom Acres, Meadow Oaks, Oak Knoll, Shady Dell, Springlake Park; Denton Highway, Broadway Avenue, Beach Street, Haltom Road, Northeast Loop 820; Big Fossil Creek, Little Fossil Creek, White's Branch
- Unique angle: property-specific water damage decisions and Haltom City drainage/property context without unsupported flood claims
- Internal links: homepage, Haltom City city page, water hub, Haltom City mold page, contact
- SEO title: Water Damage Restoration Haltom City, TX | Ace Restoration
- Meta description: Need water damage cleanup in Haltom City? Learn about water extraction, moisture checks, structural drying, and emergency restoration support.
- Visible word count: 2,169 (HTML tags excluded)

## QA notes

- Both files are semantic HTML fragments with one H1 each.
- No head, body, CSS, JavaScript, schema, or inline styles.
- Insurance coverage is not guaranteed; Texas mold assessment/remediation separation is described carefully.
- No street address, phone number, license number, fixed arrival time, or fabricated customer proof was added.
- Redirect source rule committed in `Content in Plain HTML/_redirects`; confirm that this folder is the deployed output root and test the live 301 after deployment. GitHub source verification does not prove a production redirect is active.
