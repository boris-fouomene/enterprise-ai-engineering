# Security policy
Report vulnerabilities privately to the repository maintainer via GitHub private vulnerability reporting if enabled. Do not post secrets or exploit details in public issues.

The CLI executes commands from local configuration with the current user's permissions. Review configuration, dependencies and repository contents before execution. Never run untrusted projects with credentials or privileged access. Use isolated CI runners or containers for untrusted code. The timeout applies to the direct process; descendant processes may survive. This is not a sandbox. Generated instructions are advisory, not a security boundary.
