# Public website accessibility plan

Status: active. Full conformance and legal compliance are not established.

## Scope

Public customer website only: https://www.planet-pooch.com/. Source: dfeleppa/pplanding. The employee portal is excluded. Include all public pages, complete inquiry/booking processes, third-party forms, media, maps, and linked documents. The business publishes a Franklin Square, New York address.

Use WCAG 2.2 A/AA as the engineering target. Recorded legal research considers ADA Title III and New York public-accommodation requirements; it does not establish every applicable legal obligation. Government Title II deadlines must not be assumed to apply to this private business. Qualified jurisdiction-specific legal review remains a completion gate.

Primary references reviewed during this project:
- https://www.ada.gov/resources/web-guidance/
- https://www.ada.gov/topics/title-iii/
- https://www.nysenate.gov/legislation/laws/EXC/296
- https://dhr.ny.gov/obligations-business-owners-public-accommodations
- https://www.w3.org/TR/WCAG22/

## Evidence and deliverables

Production remediation releases through PR #130 are live. PR #130 merged as af72efd134aedaa7698901433feb0253242d2587 after CI run 42556658586 passed for source e650545822e70baf4d0b3dbf67bfa7c6cd88ae8f. Its five corrected descriptions were verified in the hosted preview accessibility tree. Production deployment dpl_6qmjyz1dQunCsp4nxv9g5HZ37HVY reached READY for that merge SHA with both public domains and no alias error; the boarding description was confirmed on the live site. ACCESSIBILITY-AUDIT.md records scoped evidence; historical notes do not prove later release behavior. ACCESSIBILITY-WCAG-MATRIX.md lists all 55 A/AA criteria, still unverified at whole-site scope.

Static structure and semantic checks cover 207 generated customer HTML pages. Measured contrast checks cover specific CSS pairs only. Browser checks cover selected dialogs, gallery keyboard operation, profile focus, skip navigation, native validation, and selected 320px layouts. None proves complete workflows or spoken screen-reader output.

## Remaining execution gates

1. Complete inventory of templates, pages, processes, documents, media, and integrations. Assess alternative-text quality and meaningful titles, not only attribute presence.
2. Verify every on-site service branch, up to ten dog profiles, validation, pending submission, server/network failure, retry and success. Use isolated test delivery for synthetic inquiries; separately verify actual integration without creating unintended customer records.
3. Resolve third-party barriers documented in ACCESSIBILITY-VENDOR-FINDINGS.md across all three MoeGo intake forms and existing-client booking entry. Include unnamed fields, checkbox names, missing button semantics and keyboard access. General intake skips Additional pet in the tested Tab sequence. Complete authenticated booking, submission, recovery and active LeadConnector testing remain open. An alternative link alone does not establish an equivalent accessible complete process.
4. Complete keyboard, desktop/mobile screen-reader, 200% zoom, 320px reflow, text spacing, forced colors, reduced motion, target size and rendered contrast checks across routes/states. Include error recovery pages and responsive comparison content.
5. Verify captions, transcripts, audio-description needs and linked documents. Do not invent media alternatives.
6. Attach direct evidence for each applicable criterion in the matrix, resolve failures, and rerun affected checks. Do not infer site-wide passes from a single route or static scan.
7. Verify hosted preview, merge/deploy reviewed changes, and retest production journeys. Confirm support-channel operation and responsibility for accessibility reports and vendor follow-up.
8. Complete legal applicability review and requirement-by-requirement completion audit before claiming full compliance.

## Acceptance work and dependencies

The release evidence above closes deployment of the implemented fixes, not the eight execution gates. No gate is fully closed. Continue remaining source/content review in parallel with the following work; this table does not reduce site or process scope.

| Work | Required input or owner | Evidence needed to close |
|---|---|---|
| MoeGo remediation | Business/vendor contact; vendor changes to the four documented entry flows | Corrected hosted version, field/control names and relationships, keyboard add/remove/upload/date/submit operation, errors and success; full retest against ACCESSIBILITY-VENDOR-FINDINGS.md |
| Complete delivery and booking | Identified disposable test customer and workflow, with expected delivery destination; account access through the normal sign-in flow | One controlled inquiry reaches the expected system exactly once; retry does not duplicate it; booking/authentication/recovery can be completed; retain test result and cleanup disposition. No synthetic production records until a test workflow is identified. |
| Tour media | Original video/audio or accurate source transcript, and a content owner | Review the entire 8:35 tour; identify speech, meaningful sounds and visual-only information; publish and verify accurate synchronized captions and any required descriptive alternative. Unavailable player captions alone do not establish the full media requirements. |
| Assistive technology | Desktop and mobile tester with actual screen-reader access | Record OS/browser/screen-reader versions and spoken output for navigation, menus/dialogs, gallery, pricing tables, calendars, every inquiry branch and complete external booking; include focus, errors/status and recovery. AX trees alone do not close this. |
| Visual modes and input | Browser/device testing access | 200% zoom, 320px reflow, text spacing, forced colors, reduced motion, keyboard and touch across every distinct template and expanded/failed/success state; record exceptions and evidence rather than extrapolating from initial pages. |
| Support operation | Named business owner for phone/email accessibility reports | Confirm both published channels work, establish routing and follow-up responsibility, and verify equivalent help for a blocked customer task. A displayed contact link is insufficient. |
| Legal applicability | Business confirmation of operating jurisdictions and qualified review | Written determination of applicable obligations and outstanding actions, reconciled with technical findings; no automatic conformance or legal-compliance claim from CI. |

For each manual result, record route, state, build/deployment, date, environment, exact steps, observed result, associated criterion and evidence location. Failed or missing results remain open. Vendor correspondence has not been sent; owner, media and legal-review requests remain unanswered. A separate request now asks for the controlled test workflow and screen-reader tester. Never include passwords in the audit.

## Regression and maintenance

CI runs lint, TypeScript, build, structure, measured form contrast and static axe semantics. Passing CI does not close manual or third-party gates. For new content, check meaningful alternatives, headings/links, accessible media/documents and contrast. For interaction changes, retest labels, keyboard order, focus visibility/restoration, errors/status messages and responsive behavior. Monitor accessibility reports and third-party changes as ongoing maintenance.

## Completion rule

Keep the goal active until all in-scope complete processes and applicable criteria have direct evidence, production contains the fixes, external barriers are resolved, and legal applicability is reviewed. A draft PR, help page or automated scan is insufficient.
