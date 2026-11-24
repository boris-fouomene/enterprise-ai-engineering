# Roadmap
- [x] Establish canonical standards and shared instructions.
- [x] Define initial versioned machine-readable gate policy schema.
- [ ] Implement machine-enforced exception handling.
- [x] Implement initial CLI: init, generate, check, doctor.
- [ ] Add safe, idempotent generators for agent instruction formats; preserve user files.
- [x] Add initial command-based quality gates with timeouts and structured evidence.
- [ ] Harden process-tree termination and isolation.
- [x] Document language-neutral profile recipes and sample configurations.
- [ ] Validate profiles against real projects.
- [ ] Add CI, fixtures, integration tests and security tests.
- [ ] Publish reproducible benchmarks with controlled tasks, multiple runs and actual measurements.
- [ ] Publish versioned release and npm package after validation.

Acceptance: no silent overwrites, no false pass on unavailable mandatory checks, no secrets in reports, no unbounded agent loops, no claim of universal automated compliance.
