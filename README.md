# EthicApp Website

Informational (brochure-style) website for the **EthicApp** project, including a localized blog powered by Markdown content.

## Purpose

This repository contains the public-facing site used to communicate:

- What EthicApp is and why it exists.
- Key product capabilities and educational value.
- Research, team, and institutional context.
- News and updates through a bilingual blog (`es` and `en`).

The site is designed to be lightweight, easy to maintain, and simple to deploy.

## Customizable Content

Most project updates can be made by editing content files and component text without changing core infrastructure.

### 1) Pages and sections

- Main localized pages live in `src/pages/[locale]/`.
- Shared and reusable sections (hero, features, CTA, top nav, etc.) live in `src/components/`.
- Global page wrapper and metadata (including favicon/manifest links) live in `src/layouts/BaseLayout.astro`.

### 2) Blog posts (Markdown)

- Blog content lives in `src/content/blog/` split by locale:
  - `src/content/blog/es/`
  - `src/content/blog/en/`
- Posts use frontmatter validated by `src/content.config.ts`.
- Current schema fields:
  - `title`
  - `description`
  - `pubDate`
  - `locale` (`es` or `en`)
  - `draft` (optional, defaults to `false`)

### 3) Visual assets

- Images, logos, screenshots, and favicon assets are stored under `assets/`.
- Keep exact filename casing when importing assets (important for CI/Linux builds).

### 4) Localization

- The site supports Spanish and English routes.
- Ensure content labels and blog metadata match the intended locale.

## Technology Stack

- **Astro** (site framework and routing)
- **Vite** (build tool used by Astro)
- **Tailwind CSS** (styling)
- **React** (interactive islands/components where needed)
- **Astro Content Collections + Markdown/MDX** (structured blog content)

## Development

### Requirements

- Node.js (LTS recommended)
- npm

### Install and run

```bash
npm install
npm run dev
```

### Build and preview

```bash
npm run build
npm run preview
```

## Deployment

Deployment is automated with **GitHub Actions** using `.github/workflows/deploy.yml`.

- Triggered on pushes to `main` (and manual workflow dispatch).
- Builds the site and deploys to GitHub Pages.

## Project Structure (high level)

```text
.
├─ src/
│  ├─ components/      # Reusable UI sections
│  ├─ layouts/         # Shared page layout
│  ├─ lib/             # Utilities (e.g., i18n helpers)
│  ├─ pages/           # File-based routes
│  ├─ content/         # Blog markdown by locale
│  └─ content.config.ts
├─ assets/             # Static images, logos, favicons, manifest
└─ .github/workflows/  # CI/CD deployment workflow
```

## Notes for Contributors

- Prefer small, focused changes.
- Run `npm run build` before opening or merging changes.
- If editing blog content, verify frontmatter fields and locale consistency.
