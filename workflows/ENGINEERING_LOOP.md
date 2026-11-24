# Engineering loop
1. Understand task, acceptance criteria, risks and applicable standards.
2. Inspect existing code and authoritative contracts. Identify dependencies and reuse opportunities.
3. Plan minimal changes, tests, migration and rollback where applicable.
4. Implement in a scoped change; do not silently expand scope.
5. Run configured checks and capture exit status and evidence.
6. Review diff against standards; fix findings, then re-run affected checks.
7. Repeat at most five times by default; escalate blocked or unresolved violations to a human. Never declare success merely because the budget is exhausted.
8. Submit for independent peer review, followed by authorized technical leadership review.
9. Release only with required approvals and passing mandatory gates. Monitor and roll back if needed.

## Evidence template
Task / acceptance criteria / affected standards / changed files / commands and results / skipped checks and reasons / unresolved risks / peer approval / leadership approval.

No agent may self-certify compliance or self-authorize a release. Solo-maintainer projects must explicitly document an alternative review policy rather than claim independent review occurred.
