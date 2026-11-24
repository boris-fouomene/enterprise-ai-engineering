# Enterprise AI Engineering

A language-neutral engineering governance toolkit for human developers and AI agents.

**Status:** v0.1 development preview. No release or certification is claimed.

## Quick start
Requires Node.js 22.18 or newer for the CLI, regardless of target project language.

```sh
git clone https://github.com/boris-fouomene/enterprise-ai-engineering.git
cd enterprise-ai-engineering
npm install --ignore-scripts
npm run typecheck
npm test
npm run check
```

To integrate another project, run `node /absolute/path/to/enterprise-ai-engineering/src/cli.ts init` from its root, configure trusted gates in eae.config.json, then run the same CLI with `generate` and `check --trust-config`. Existing differing files are preserved and reported as conflicts; reconcile them manually. Generation is not transactional.

## Documentation
- [Canonical standards](standards/ENGINEERING.md)
- [Shared instructions](AGENTS.md)
- [Engineering loop](workflows/ENGINEERING_LOOP.md)
- [Policy schema](schema/policy.schema.json)
- [Technology profiles](profiles/README.md)
- [Portability](docs/PORTABILITY.md)
- [Extension contract](docs/EXTENSIONS.md)
- [Exceptions](docs/EXCEPTIONS.md)
- [Security](SECURITY.md)
- [Release checklist](docs/RELEASE_CHECKLIST.md)
- [Roadmap](ROADMAP.md)

The CLI executes trusted commands with user permissions; it is not a sandbox. Automated gates provide evidence, not universal compliance. Human approval remains required. Native adapters do not guarantee agent adherence. No proprietary employer material belongs in this repository.
