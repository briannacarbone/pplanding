# Hosted form accessibility findings

Observed November 9, 2026 in Chrome using accessibility-tree and read-only DOM inspection. No personal details entered, files uploaded, agreements accepted, or forms submitted. This report has not been sent to any vendor.

## MoeGo resort inquiry

URL: https://form.moego.pet/go/form?formId=f13f0fe8abe34acf9af59dc81b13e70e

Pet type and breed comboboxes have no accessible names. Pet name, first name, and last name expose implementation IDs rather than associated visible labels. Phone and email are unnamed. DOM inspection found no associated label, aria-label, or aria-labelledby for these fields. The marketing-consent checkbox has an empty associated label. Additional pet and Submit appear as text in the accessibility tree; keyboard operability requires further testing.

## MoeGo mobile grooming intake

URL: https://form.moego.pet/go/form?formId=fe79d3a9461655c8f5ba611fe50e6f29

Pet type/breed, gender, coat type, spay/neuter, behavior and referral-source comboboxes are unnamed. Contact fields, birthday and address lack meaningful accessible names. Pet fields expose internal IDs rather than visible-label associations. Vaccine upload and pet-image upload appear as unnamed buttons. Both required service-agreement and optional marketing-consent checkboxes have empty associated labels. The visible text does not provide a programmatic association in inspected DOM.

## MoeGo general new-customer inquiry

URL: https://form.moego.pet/go/form?formId=aca2ebfc74184cc580cdf04413461d7f

Linked from the Book and Welcome pages. Chrome exposes pet type, breed and referral-source comboboxes without names; pet name and first/last name expose implementation IDs; phone and email are unnamed. Read-only DOM inspection found no associated labels, aria-label or aria-labelledby on these controls. The marketing-consent input has an empty associated label.

The Additional pet action is a paragraph with tabIndex -1 and no role. Pressing Tab from Pet name moves directly to First name, skipping it. Submit is a div with tabIndex -1 and no role. These are confirmed missing control semantics and a demonstrated keyboard-order barrier; full keyboard submission and any alternative keyboard mechanisms were not tested. No customer information or consent was entered and no submission occurred.

## MoeGo existing-client booking entry

Entry URL: https://booking.moego.pet/ol/landing?name=PlanetPoochPetResort

Enter on the named Book now button successfully navigated to https://booking.moego.pet/ol/book?name=PlanetPoochPetResort. At that step, the visible instruction is Start with your phone number, but the input has no associated label, aria-label or aria-labelledby; its placeholder is only an example number. Chrome exposes an unnamed text field. The agreement checkbox is named "I agree to our and ." because its associated labels omit the separately linked terms of use and privacy policy. The terms links themselves are exposed independently. Next is initially disabled.

The landing page also exposes an unnamed button beneath Purchase Service Package Now. Its purchase flow was not opened. No phone number was entered, no agreement accepted, no authentication attempted and no reservation made. Authenticated steps, accessible authentication, payment and booking completion remain unverified.

## Correction requests for all forms

- Associate every visible field label with its control using native labels or appropriate aria-labelledby. Accessible names must include visible label text. Keep required state and instructions programmatically available.
- Name upload controls by their purpose and expose constraints/error messages to assistive technology.
- Associate the complete agreement/consent description with the correct checkbox while keeping agreement/policy links independently operable. Do not change consent defaults or agreement terms as an accessibility workaround.
- Implement Additional pet and Submit as keyboard-operable, named controls. Verify focus after adding/removing profiles, dropdown selection, date selection, upload errors, validation errors and success.
- Verify the complete workflow with keyboard and screen readers, including recovery and status announcements. Return evidence for the corrected hosted versions.

Relevant WCAG review areas: 1.3.1 Info and Relationships, 2.1.1 Keyboard, 2.4.6 Headings and Labels, 2.5.3 Label in Name, 3.3.2 Labels or Instructions, 4.1.2 Name/Role/Value, and 4.1.3 Status Messages. Not all listed criteria have a demonstrated failure; they define the required retest scope.

These controls are cross-origin vendor content; local parent-page CSS or JavaScript cannot repair their semantics. The on-site resort/in-house inquiry route is an available alternative, but its successful delivery is still unverified and it does not replace the full mobile-grooming intake process. Direct links to the same hosted form do not remediate its barriers.

## LeadConnector giveaway

URL: https://api.leadconnectorhq.com/widget/form/4tBmfwTpbac0oZPC77CQ

Current rendered state says the giveaway ended and entries closed September 30, 2026 at 10:00 AM ET. No entry controls are exposed in this state. Reopening or replacing the giveaway requires a fresh active-form audit; no active-workflow pass is claimed.
