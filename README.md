# RAAHI — Landing Page

Production frontend for the RAAHI landing page, built from the Figma source of
truth (**Final Pages › LandingPage**, node `105:1062`).

React + Vite + TypeScript + SCSS. No Tailwind, no CSS Modules.

---

## Requirements

Node **20.19+** (`.nvmrc` pins `20.19.0`).

```bash
nvm use
npm install
```

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Dev server at http://localhost:5173 |
| `npm run build` | Type-check, then production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Type-check only |

---

## Architecture

```
src/
├── assets/            Figma exports (see docs/asset-manifest.md)
│   ├── images/        hero · sections · founder · seminar · books · backgrounds
│   ├── graphics/      iceberg · journey · decorative
│   ├── icons/
│   └── logo/
├── components/        Reusable primitives
├── layouts/           Header · Footer · MainLayout
├── sections/          One component per landing-page section
├── content/           raahi.ts — all copy, transcribed from Figma
├── hooks/             useTheme · useScrolled
├── styles/            SCSS (see below)
├── App.tsx
└── main.tsx
```

### Styling

One stylesheet enters the app: `src/styles/global.scss`. Components never
import SCSS of their own.

```
styles/
├── global.scss        the single entry point — imports everything below
├── abstracts/         zero-output: functions, variables, breakpoints, mixins
├── base/              tokens, reset, element defaults, utilities
├── vendor/            Bootstrap bundle + CSS-variable re-theme
├── layout/            container, section shell, header, footer
├── components/        button, section-heading, logo, app-badge, node-marker
└── sections/          one partial per section
```

- Modern Sass module system throughout — `@use` / `@forward`, no `@import`.
- Partials reach shared code with `@use '../abstracts' as *;`. That is a
  SCSS-to-SCSS reference required by the module system, not a per-component
  stylesheet import.
- **BEM** naming: `.block__element--modifier`.

### Design tokens

`styles/base/_tokens.scss` holds two tiers:

- `--c-static-*` — raw values read from Figma. Never change.
- `--c-*` — semantic roles. Flip between light and dark.

Light is the Figma design as drawn (page `#f4ece2`, ink `#0a0909`, terracotta
`#b5502c`, CTA `#ffac66`). Dark extends the palette already present inside the
page — the hero, CTA band and philosophy card are dark by design.

Theme is driven by `useTheme`, which sets `data-theme` **and** `data-bs-theme`
on `<html>` so Raahi tokens and React-Bootstrap never disagree. It honours
`prefers-color-scheme` until the user makes an explicit choice.

Sections that stay dark in both themes use the `.is-inverse` class.

### Responsive

Mobile-first. Breakpoints: `sm` 576 · `md` 768 · `lg` 1024 · `xl` 1440 ·
`xxl` 1600.

Type scales continuously via the `fluid()` function rather than stepping at
breakpoints. Container width and gutter step per breakpoint, ending at the
Figma 1600 / 160 grid.

---

### Motion

- `lib/scrollEngine.ts` — one passive scroll listener and one rAF loop drive
  every parallax element. Offsets are cached on register and resize, never read
  per frame, and only near-viewport elements are written to.
- `useReveal` — IntersectionObserver, no scroll listener.
- Everything is gated on `prefers-reduced-motion`: reveals still reveal, they
  just arrive without travel, and parallax never registers at all.

Parallax is used in four places only (hero photo, hero fog ×2, library
mountains, journey panorama). Text, cards and the iceberg are never parallaxed.

---

## Asset status

Assets are **not yet exported** — `www.figma.com` is blocked by this
environment's egress policy. Nothing has been substituted.

`AssetImage` looks each asset up in `src/assets/registry.ts`, which globs
`src/assets/**` at build time and indexes by filename stem. When an asset is
missing it renders an empty slot that reserves the exact same box, so the
composition stays pixel-correct. **Drop the real exports into the folders named
in the manifest and they appear automatically — no code changes.**

There are currently **47 empty slots**. Full inventory, target filenames and the
exact blocker: **`docs/asset-manifest.md`**.

## Verification

Driven in headless Chromium at 1920 / 1440 / 1280 / 1024 / 768 / 480 / 390 / 375:

- No horizontal overflow at any width (`scrollWidth === clientWidth` throughout)
- Zero console errors at any width
- One `<h1>`, 14 `<h2>`, every `<img>` carries `alt`
- 17 interaction checks pass — FAQ single-open + toggle, carousel arrows, theme
  toggle with `data-bs-theme` sync, anchor scrolling, mobile drawer open/close,
  and the three reduced-motion guarantees

## Documentation

- `docs/phase-01-figma-analysis.md` — full design analysis and asset audit
- `docs/asset-manifest.md` — asset inventory keyed by Figma node ID
