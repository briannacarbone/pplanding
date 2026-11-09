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

The first remediation release merged through https://github.com/dfeleppa/pplanding/pull/126 as 6c39d4bc8b86bd707956ce43000488028adaca3b and is live on the public domains. Vercel production deployment dpl_DnrKfoc1FYcja9JgmwJYkMPSwpqT is READY with those domain aliases. Follow-up work is on codex/public-site-accessibility-followup. ACCESSIBILITY-AUDIT.md records findings and narrowly scoped evidence; historical build notes do not prove current release behavior. ACCESSIBILITY-WCAG-MATRIX.md lists all 55 A/AA criteria, still unverified at whole-site scope.

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

## Regression and maintenance

CI runs lint, TypeScript, build, structure, measured form contrast and static axe semantics. Passing CI does not close manual or third-party gates. For new content, check meaningful alternatives, headings/links, accessible media/documents and contrast. For interaction changes, retest labels, keyboard order, focus visibility/restoration, errors/status messages and responsive behavior. Monitor accessibility reports and third-party changes as ongoing maintenance.

## Completion rule

Keep the goal active until all in-scope complete processes and applicable criteria have direct evidence, production contains the fixes, external barriers are resolved, and legal applicability is reviewed. A draft PR, help page or automated scan is insufficient.
