# Engineering standards v0.1
Normative keywords MUST and SHOULD indicate obligations and recommendations. Apply rules proportionately to project risk. Exceptions require documented scope, rationale, owner, expiry and approval. Not all rules are mechanically decidable.

| ID | Requirement | Evidence |
|---|---|---|
| CORE-01 | MUST preserve a single authoritative source for each business rule and contract (SSOT); avoid duplicated knowledge (DRY). | Design review, duplication scan |
| CORE-02 | MUST prefer simple, necessary solutions (KISS, YAGNI); avoid speculative abstractions. | Review |
| CORE-03 | SHOULD apply SOLID, separation of concerns, high cohesion and loose coupling where useful. | Design review |
| ARCH-01 | MUST respect module boundaries, dependency direction and documented interfaces; record significant decisions in ADRs. | Dependency checks, ADR |
| CODE-01 | MUST use meaningful names, consistent formatting, explicit contracts and appropriate typing; avoid dead code and unexplained magic values. | Lint, compiler, review |
| CODE-02 | MUST manage resources and concurrency safely; propagate cancellation/timeouts when relevant. | Tests, review |
| API-01 | MUST validate inputs, authorize operations, document errors, and preserve compatibility or provide migration/versioning. | Contract tests |
| DATA-01 | MUST preserve integrity using appropriate constraints and transactions; review indexes, migration safety, backup and restoration. | Migration and restore tests |
| DATA-02 | MUST isolate tenant data where applicable and protect personal data throughout its lifecycle. | Isolation tests, privacy review |
| SEC-01 | MUST apply least privilege, server-side authorization, secure defaults and secrets management; never commit credentials. | Security tests, secret scans |
| SEC-02 | MUST assess injection, authentication, session, access-control and dependency risks; use established cryptography. | Threat model, SAST/SCA |
| SUP-01 | MUST control dependencies, verify provenance where feasible, track vulnerabilities and respect licenses. | Lockfile, SBOM, scans |
| PERF-01 | MUST measure critical paths against explicit budgets; avoid unnecessary I/O, unbounded work and N+1 queries. | Benchmarks, profiling |
| SCALE-01 | SHOULD design for expected workloads, bounded concurrency, backpressure and graceful degradation. | Load tests, capacity review |
| REL-01 | MUST handle errors explicitly and design retries with limits; use idempotency where duplicate effects are possible. | Failure tests |
| OBS-01 | MUST provide actionable diagnostics without leaking sensitive data; define service health and operational ownership. | Logs, metrics, runbooks |
| TEST-01 | MUST test changed behavior, edge cases and regressions; use unit, integration and end-to-end tests as appropriate. | Test reports |
| TEST-02 | MUST NOT disable or weaken checks merely to pass a build. | Diff review |
| UX-01 | MUST consider accessibility, localization and supported devices for user-facing changes. | Accessibility and UI checks |
| DOC-01 | MUST keep relevant instructions, contracts, migration notes and operational documentation current. | Review |
| OPS-01 | MUST use reproducible builds, controlled environments, rollback plans and authorized release procedures. | CI evidence, release checklist |
| GOV-01 | MUST obtain independent peer review and designated technical leadership review before production changes, including maintenance. | Approved reviews |
| AI-01 | MUST treat agent output as untrusted until validated; restrict tool access and avoid sending confidential information to unauthorized providers. | Review, access policy |
| AI-02 | MUST maintain bounded engineering loops and report tool/model, checks and limitations when relevant. | Task evidence |
| ETH-01 | MUST respect intellectual property, privacy, applicable law and approved use of data. | License/privacy review |

| REQ-01 | MUST define acceptance criteria, constraints and measurable quality attributes before implementation. | Requirements review |
| ARCH-02 | MUST document significant tradeoffs, failure modes and integration contracts. | ADR and design review |
| ARCH-03 | SHOULD isolate business logic from infrastructure where this improves testability and changeability. | Dependency review |
| CODE-03 | MUST preserve behavioral contracts during refactoring and remove obsolete implementations after migration. | Regression tests |
| API-02 | MUST define pagination, resource limits and compatibility expectations where applicable. | Contract and load tests |
| DATA-03 | MUST classify sensitive data and define retention, deletion and recovery requirements. | Data inventory and recovery exercise |
| DATA-04 | MUST review concurrent writes, transaction isolation and migration compatibility. | Concurrency and migration tests |
| SEC-03 | MUST establish threat models and track remediation of identified security risks. | Threat model and risk register |
| SEC-04 | MUST establish vulnerability reporting, triage and remediation processes. | Security policy and incident records |
| SUP-02 | MUST review third-party code provenance and restrict build credentials. | Build configuration review |
| REL-02 | MUST define recovery objectives and test recovery paths for critical services. | Recovery exercise |
| OBS-02 | SHOULD define service-level indicators and objectives appropriate to the product. | Monitoring review |
| PERF-02 | MUST test realistic workloads before claiming performance improvements. | Reproducible measurements |
| UX-02 | MUST test keyboard access and assistive technology compatibility where applicable. | Accessibility evidence |
| OPS-02 | MUST document ownership, deployment approvals and incident escalation. | Runbook and release records |
| AI-03 | MUST treat retrieved content and tool outputs as untrusted instructions; restrict agent capabilities to task scope. | Agent permission and context review |
| AI-04 | MUST verify generated dependencies, APIs and factual claims before accepting changes. | Dependency and contract review |
| GOV-02 | MUST distinguish automated evidence, human judgment and approved exceptions in release decisions. | Review record |

## Reference baseline
Use the applicable editions and project-specific requirements; these references do not imply certification:
- NIST SSDF: https://csrc.nist.gov/projects/ssdf
- OWASP ASVS: https://asvs.owasp.org/ (ASVS 5.0.0; web applications and services)
- SLSA: https://slsa.dev/
- OpenSSF Scorecard: https://scorecard.dev/
- WCAG: https://www.w3.org/WAI/standards-guidelines/wcag/
- Semantic Versioning: https://semver.org/
