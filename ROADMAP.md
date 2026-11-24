# Roadmap
- [x] Establish canonical standards and shared instructions.
- [ ] Define versioned machine-readable policy schema and exception handling.
- [ ] Implement dependency-light TypeScript CLI: init, generate, check, doctor.
- [ ] Add safe, idempotent generators for agent instruction formats; preserve user files.
- [ ] Add configurable command-based quality gates with timeouts and structured evidence.
- [ ] Add profiles for TypeScript, Python, Java, PHP and .NET without coupling core to a language.
- [ ] Add CI, fixtures, integration tests and security tests.
- [ ] Publish reproducible benchmarks with controlled tasks, multiple runs and actual measurements.
- [ ] Publish versioned release and npm package after validation.

Acceptance: no silent overwrites, no false pass on unavailable mandatory checks, no secrets in reports, no unbounded agent loops, no claim of universal automated compliance.
