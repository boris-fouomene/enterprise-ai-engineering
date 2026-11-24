# Extension contract
The portable extension mechanism in v0.1 is an executable gate with explicit argument array, timeout and required flag. Any language may implement a gate. Exit code zero means the check passed; nonzero, missing executable or timeout means failure. The runner records metadata, not command output. Configure tool-specific reports separately.

Native agent adapters currently consist of generated instruction files. Additional adapters can be proposed with fixtures and documented loading behavior. Dynamic plugin loading and automatic agent orchestration are not implemented. Never load untrusted executable plugins.
