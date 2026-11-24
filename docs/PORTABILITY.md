# Language and agent portability

TypeScript is an implementation detail, not a target-project requirement. The core policy format is JSON and the gate interface is an executable plus arguments, timeout and required flag. No target language, framework, AI provider or model is mandatory.

## Integration contract
A profile supplies recommended checks and documentation. Projects explicitly select and review executable commands before running them. Missing required tools fail validation. Profiles must not silently install tools or run untrusted commands. A custom language or agent can use the same policy format without a native adapter.

## Distribution
Current source CLI requires Node.js 22.18+. Future standalone binaries or an alternative runtime implementation must preserve the versioned policy contract and pass shared conformance fixtures. Do not claim runtime independence until tested.

## Governance
Human developers and agents use the same canonical standards. Native adapters are conveniences, not enforcement mechanisms. Independent review and CI remain necessary.
