# Standalone new client form

Route: `/new-client/`. Deliberately absent from existing buttons, navigation and sitemap; noindex metadata is set.

Configure server-only `MOEGO_API_KEY` (already base64 encoded, without Basic prefix), `MOEGO_COMPANY_ID`, and `MOEGO_BUSINESS_ID` (Pet Resort: `biz3pcO`). Never use NEXT_PUBLIC for these secrets.

Submissions create MoeGo **Leads**, not Intake Form submissions. Service interests, consent wording/time, submission ID and UTM/fbclid values are saved through the separate pet-notes endpoint on the first dog because no account custom-field codes have been verified. Existing matching leads are not overwritten by anonymous callers; they receive a call-us message. Same-submission retries are recognized through the saved note. Matching and creation are not atomic across concurrent requests; a production integration should use durable idempotency storage if stronger guarantees are required.

The existing Meta Pixel fires Lead after a successful API response, with the submission ID as eventID. No Lead event fires on a click, validation error, API error, or missing configuration. No Conversions API integration is included. Browser tracking may be blocked by privacy settings. Source parameters are captured from this page URL; carry UTMs through ad landing links to this route.

The Google Ads `New Client Form Submitted` action fires only after the same successful API response. It uses the existing Google tag (`AW-608173544`), its event label, and the submission ID as `transaction_id` to deduplicate retries. A form view or Submit click alone does not count. Browser privacy settings can block the event; Google Ads may initially show the action as awaiting conversions.

Live checks confirmed lead creation, dog name/breed, consent, and the separate pet-notes endpoint. After deployment, verify a submission and its notes readback. Meta Ads Manager attribution remains subject to Meta matching and browser privacy settings.

Validation: `node --experimental-strip-types --test scripts/new-client.test.mjs`, TypeScript, ESLint, production build. The route includes origin checking, validation, a honeypot and best-effort per-instance throttling; distributed abuse control is not provided by the in-memory limiter.

The Pet Resort form offers Boarding, Daycare, Training, and In-house grooming. These selections route to Planet Pooch Pet Resort (biz3pcO), assigned to Derek Wolpert (stf9EkE), including in-house grooming alone. Legacy Grooming-only submissions from older open tabs are still accepted and retain Planet Pooch (bizVdfk) / Stacey Conti (stfe3r9) routing. The Mobile Grooming radio option uses the separate MoeGo embed. Staff and business IDs were verified through MoeGo on 2026-09-18. MOEGO_BUSINESS_ID is no longer used by this route.
