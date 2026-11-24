# Programmatic integration
The policy engine accepts an injectable gate runner. The bounded engineering loop accepts validation and correction callbacks. Hosts may implement corrections with a human, a local tool or any authorized AI agent. No provider SDK is required.

The loop does not launch agents itself. A host must implement cancellation, timeouts, authorization, isolation and evidence persistence for its callbacks. Callback errors propagate to the host; they never become successful validations. Passing gates means ready for review, not approved for production.

The command-line runner remains available for projects written in any language. Cross-runtime integrations use the JSON policy and exit status contract.
