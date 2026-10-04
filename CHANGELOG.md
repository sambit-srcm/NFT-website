# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project follows [Conventional Commits](https://www.conventionalcommits.org/).

## [Unreleased]

### Added

- Security response headers and Dependabot / `npm audit` checks in CI
- Coverage thresholds and an axe-core accessibility CI job
- Shared accessible `TabList`, hero `TiltCard`, and App Router error / 404 pages
- Skip-to-content link, newsletter validation parity, and MIT license

### Changed

- Marketplace, artist, and rankings tabs now share one keyboard-friendly tabs primitive
- Rankings board exposes table semantics to assistive technology
- Create-account and subscribe forms trim input and announce field errors

## [0.1.0] - 2026-09-08

### Added

- Next.js App Router marketplace UI with homepage, marketplace, rankings, artist, NFT, and account routes
- Design tokens, responsive header/footer, and Framer Motion primitives
- Vitest + Testing Library suite, Husky hooks, Commitlint, Gitleaks, and GitHub Actions CI
