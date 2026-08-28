# NFT Website

A [Next.js](https://nextjs.org) starter for an NFT marketplace / minting site, wired up with the
linting, formatting, commit, CI, and secret-scanning tooling needed to keep a team's `main` branch
clean from day one.

## Stack

| Concern           | Choice                                        |
| ----------------- | --------------------------------------------- |
| Framework         | Next.js 16 (App Router, `src/` directory)     |
| Language          | TypeScript (strict)                           |
| Styling           | Tailwind CSS v4                               |
| Tests             | Vitest + React Testing Library                |
| Linting           | ESLint 9 (flat config) + `eslint-config-next` |
| Formatting        | Prettier (+ Tailwind class sorting)           |
| Git hooks         | Husky                                         |
| Commit convention | Commitlint (Conventional Commits)             |
| CI                | GitHub Actions                                |
| Secret scanning   | Gitleaks (pre-commit hook + CI)               |
| Review policy     | `CODEOWNERS`                                  |

## Getting started

### Prerequisites

- **Node.js 20+** (CI runs on 22)
- **npm 10+**
- **[Gitleaks](https://github.com/gitleaks/gitleaks)** — optional locally, required in CI:
  ```bash
  brew install gitleaks
  ```
  Without it the pre-commit hook prints a warning and skips the local scan; CI still scans.

### Install

```bash
npm install
```

`npm install` runs `husky` via the `prepare` script, which installs the Git hooks. If hooks are not
firing, run `npx husky` once by hand.

### Environment variables

```bash
cp .env.example .env.local
```

Fill in the values. Only variables prefixed `NEXT_PUBLIC_` are exposed to the browser — **never**
put a private key, RPC secret, or API token behind that prefix. `.env*` files are gitignored, and
Gitleaks blocks committed secrets as a second line of defence.

### Develop

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script                  | What it does                                 |
| ----------------------- | -------------------------------------------- |
| `npm run dev`           | Start the dev server                         |
| `npm run build`         | Production build                             |
| `npm run start`         | Serve the production build                   |
| `npm run lint`          | ESLint                                       |
| `npm run lint:fix`      | ESLint with autofix                          |
| `npm run format`        | Rewrite files with Prettier                  |
| `npm run format:check`  | Fail if anything is unformatted (used by CI) |
| `npm run typecheck`     | Generate route types, then `tsc --noEmit`    |
| `npm run test`          | Run the test suite once                      |
| `npm run test:watch`    | Watch mode                                   |
| `npm run test:coverage` | Tests with a coverage report                 |

## Project structure

```
.
├── .github/
│   ├── workflows/
│   │   ├── ci.yml           # lint, format, typecheck, test, build, commitlint
│   │   └── gitleaks.yml     # secret scanning
│   ├── CODEOWNERS           # required reviewers
│   └── pull_request_template.md
├── .husky/
│   ├── pre-commit           # lint-staged + gitleaks
│   ├── commit-msg           # commitlint
│   └── pre-push             # typecheck + tests
├── src/app/                 # App Router routes, layouts, styles
├── public/                  # Static assets
├── .gitleaks.toml           # Secret-scanning rules and allowlist
├── commitlint.config.mjs
├── eslint.config.mjs
├── prettier.config.mjs
└── vitest.config.mts
```

## Git workflow

### Commit messages

Commits must follow [Conventional Commits](https://www.conventionalcommits.org/). The `commit-msg`
hook rejects anything else, and CI re-validates every commit in a PR.

```
<type>(<optional scope>): <subject>
```

Allowed types: `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`,
`style`, `test`.

```bash
git commit -m "feat(mint): add wallet connect button"
git commit -m "fix(api): handle failed metadata fetch"
git commit -m "docs: document env variables"
```

### What runs when

| Moment       | Checks                                                              |
| ------------ | ------------------------------------------------------------------- |
| `git commit` | `lint-staged` (ESLint + Prettier on staged files), Gitleaks         |
| commit msg   | Commitlint                                                          |
| `git push`   | `typecheck`, `test`                                                 |
| PR / push    | Full CI: lint, format, typecheck, test, build, commitlint, Gitleaks |

To bypass hooks in a genuine emergency, use `git commit --no-verify`. CI will still catch the
problem, so prefer fixing it locally.

## Repository protection

`main` and `development` are both protected. `main` is the release branch;
`development` is the day-to-day integration branch. Neither accepts direct pushes,
force pushes, or deletion — all changes arrive through a pull request.

`main` additionally requires an approving review from a code owner, as declared in
[`.github/CODEOWNERS`](.github/CODEOWNERS), and dismisses stale approvals when new commits
are pushed.

Both branches require these checks to pass before merging:

- `Lint, format & types`
- `Tests`
- `Build`
- `Commit messages`
- `Gitleaks`

Branches must also be up to date with the base branch before merging.


## Secret scanning

Gitleaks runs in two places:

1. **Pre-commit** — `gitleaks protect --staged` scans staged changes so a secret never lands in a
   commit.
2. **CI** — scans full history on every push and PR, plus a weekly scheduled sweep.

Rules and allowlists live in [`.gitleaks.toml`](.gitleaks.toml). The allowlist covers
`.env.example`, `package-lock.json`, `public/`, obvious placeholder values, and the all-zero
address common in NFT code. If a scan produces a false positive, add a narrow rule there rather
than disabling the scan.

`gitleaks-action` is free for personal and public repositories. Organisation-owned repos need a
`GITLEAKS_LICENSE` secret — uncomment that line in
[`.github/workflows/gitleaks.yml`](.github/workflows/gitleaks.yml).

## Deploy

The fastest path is [Vercel](https://vercel.com/new). Add every variable from `.env.example` to the
project's environment settings before the first deploy.

See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying)
for other targets.
