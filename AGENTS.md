# AGENTS.md — EthicApp Website Maintenance Guide

This document gives autonomous/code agents the minimum operational context needed to safely maintain this repository.

## 1) Project purpose

- **Project**: EthicApp public website.
- **Type**: Brochure/informational site with a localized blog.
- **Audience**: Visitors looking for project overview, features, team, research, and updates.
- **Tech stack**: **Astro + Vite + Tailwind CSS**, with some React components where useful.

## 2) Core architecture

- `src/pages/`
  - Route files (`.astro`) define pages.
  - `src/pages/[locale]/...` contains localized routes.
- `src/components/`
  - Reusable UI sections (navigation, hero, features, CTA, etc.).
- `src/layouts/`
  - Shared layout wrappers (metadata, global links such as favicon/manifest, page shell).
- `src/lib/`
  - Utilities such as i18n helpers.
- `src/content/`
  - Blog content in Markdown, organized by locale (`en`, `es`).
- `src/content.config.ts`
  - Content collections schema validation for blog frontmatter.
- `assets/`
  - Static visual assets (logos, screenshots, favicons, manifest).
- `.github/workflows/deploy.yml`
  - CI/CD workflow for build + deploy to GitHub Pages.

## 3) Content model and localization

- Blog entries are Markdown files under `src/content/blog/<locale>/`.
- Required frontmatter fields are validated by Astro content collections:
  - `title` (string)
  - `description` (string)
  - `pubDate` (date)
  - `locale` (`es` or `en`)
  - `draft` (boolean, defaults to `false`)
- Keep locale consistency:
  - Files in `blog/es` should use `locale: es`.
  - Files in `blog/en` should use `locale: en`.
- Prefer adding translations in both locales when publishing new informational content.

## 4) Build, run, and verification commands

Use npm scripts from `package.json`:

- `npm run dev` → start local dev server.
- `npm run build` → production build (must pass before merge).
- `npm run preview` → preview production build locally.

For agent changes, run **at least** `npm run build` as a validation check.

## 5) Deployment model (GitHub Actions)

- Deployment is handled by `.github/workflows/deploy.yml`.
- Trigger conditions:
  - Push to `main` branch.
  - Manual trigger (`workflow_dispatch`).
- Workflow behavior:
  1. Checks out repository.
  2. Runs Astro build via `withastro/action@v3`.
  3. Deploys artifact to GitHub Pages via `actions/deploy-pages@v4`.

## 6) Asset and path conventions (important)

- When importing assets in Astro components/layouts, prefer ESM imports and use `.src` when required by Astro/Vite processing.
- Respect exact filename casing (e.g., `EthicApp-logo.png` vs other case variants).
- Keep favicon/manifest wiring in the main layout consistent with imported asset references.
- Before finishing, ensure no broken static imports by running `npm run build`.

## 7) Styling conventions

- Tailwind is the primary styling system.
- Prefer utility classes in components/pages over ad-hoc CSS unless truly reusable.
- Keep color usage aligned with EthicApp design tokens/palette already in use.
- Preserve accessibility basics on interactive elements (hover/focus-visible states, semantic controls).

## 8) Change safety checklist for agents

Before committing:

1. Confirm route/component imports resolve.
2. Confirm blog schema compliance for added/edited markdown frontmatter.
3. Run `npm run build` successfully.
4. Keep changes minimal and scoped to the request.
5. Document user-visible behavior changes in commit/PR notes.

## 9) Legacy folder note

- `legacy-site/` contains previous site artifacts and historical references.
- Do **not** modify `legacy-site/` for normal feature/fix work unless the task explicitly requires it.

---

If this guide conflicts with direct user/developer/system instructions, follow those higher-priority instructions.
