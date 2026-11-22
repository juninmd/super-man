# AGENTS.md

Mqsculus Protocol: a client-only React dashboard for stoic discipline and personal routines (quotes, directives, readings, habits, Memento Mori). All state lives in the browser `localStorage`. There is no backend.

## Stack

- React 19, Vite, TypeScript, Tailwind CSS v4, Lucide React, canvas-confetti
- Package manager: pnpm (`pnpm-lock.yaml`, `packageManager` pinned). `bun.lock` also exists and is updated by Dependabot. Do not hand-edit either lockfile
- Node 22 in CI

## Commands

- Install: `pnpm install`
- Dev: `pnpm dev`
- Build: `pnpm build` (`tsc && vite build`)
- Preview: `pnpm preview`
- Lint: `eslint.config.js` is present, but `package.json` has no lint script. Run `pnpm exec eslint .`
- Tests: no test runner is configured in `package.json` yet

## Structure

- `src/main.tsx`, `src/App.tsx`: entry point. `App.tsx` mounts one component per section
- `src/components/`: UI sections (`Hero`, `DailyStoic`, `Diagnosis`, `Tracker`, `MementoMori`, `Readings`, `Guide`, `Perspective`, `Toast`)
- `src/constants/`: static content (quotes, directives, readings, guide, tracker habits)
- `public/`: static assets
- `.github/workflows/`: `pages.yml` (builds with `--base=/super-man/` and deploys to Pages), `validate.yml` (reusable from `juninmd/base-actions`), `sast.yml`, `security.yml`

## Conventions

- DRY, KISS, SOLID, YAGNI. Implement only what is needed now. Extract repeated logic when it appears twice.
- Max 180 lines of code per file (comments and docstrings excluded). Split by responsibility when a file grows.
- Comments only for complex logic or non-obvious decisions. Prefer self-describing names.
- Handle errors so the app does not crash, and give the user a clear message.
- Mocks and fakes exist only in tests. Test data is realistic but controlled, with no personal data.
- Tests come first (TDD) and cover the essential cases. Target: 80% coverage.
- Every change goes through code review before merge.

## Gotchas

- `localStorage` holds the user's progress (date, habits, streak, Memento Mori). Changing its key or shape breaks existing users. Migrate it.
- Vite base path: the Pages build uses `--base=/super-man/`. Keep asset paths relative or base-aware.
- Do not commit secrets or personal data. The app has no backend and no API keys.

<!-- base-actions-main-policy -->
## GitHub Actions — padrão obrigatório (@main)

- Referencie as actions internas sempre pelo branch, nunca por SHA:
  - `uses: juninmd/base-actions/<action>@main`
  - `uses: juninmd/base-actions/.github/workflows/<arquivo>.yml@main`
- Não fixe `@<sha>` em `juninmd/base-actions`: a atualização é centralizada no
  `main` e passa a valer no próximo run.
- PRs cujos checks não iniciam por billing/spending limit são mesclados pelo bot central
  `juninmd/base-actions/.github/workflows/auto-merge-billing-blocked.yml`.
  Para impedir o merge automático de um PR, aplique a label `do-not-merge`.
