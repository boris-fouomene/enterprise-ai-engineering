# Shared engineering instructions
Applies to humans and every coding agent. Read standards/ENGINEERING.md and workflows/ENGINEERING_LOOP.md before changing code. Project-specific requirements supplement these rules; conflicts must be escalated, not silently ignored.
- Inspect existing implementations and repository instructions before proposing changes.
- Make minimal coherent changes; preserve public contracts unless an approved migration exists.
- Never expose secrets, bypass tests, weaken policy, fabricate evidence or deploy without authorization.
- Run applicable checks, report actual commands and results, and identify skipped checks.
- Request peer review and final authorized technical review before release. An agent cannot approve its own work.
- Stop and escalate if requirements conflict, permissions are absent, or repeated corrections fail.
