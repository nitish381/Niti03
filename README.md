# Nitish Kumar — Portfolio

Personal portfolio for Nitish Kumar, Senior UI/UX & Product Designer.
React + Vite + TypeScript, SCSS (BEM, `@use`/`@forward`), React-Bootstrap's
grid system for the editorial column layout, CSS custom properties for
light/dark theming.

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
| `npm run lint` | ESLint (typescript-eslint + react-hooks) |

## Structure

```
src/
├── content/     site.ts (approved copy + Project type + projectRoute())
│                 assets.ts (placeholder media URLs + getProjectThumbnail())
├── components/  Header · Footer · ThemeToggle · Reveal (scroll-in)
│                 UntangleLine (hero signature move) · Marquee · Monogram
│                 ProjectRail (numbered rail, shared by SelectedWork + Work)
│                 RouteTransition · SkipLink
├── sections/    one component per landing-page section
├── pages/       Landing · Work · ProjectDetail · Contact · NotFound
│                 (each lazy-loaded — see App.tsx route-level code splitting)
├── layouts/     MainLayout (Header/Footer shell, skip link, scroll-to-top)
├── hooks/       useReducedMotion · useReveal · useTheme · useDocumentHead
├── styles/      global.scss — the single entry point (see below)
└── App.tsx      routes
```

No conventional nav bar, per the brief — the header carries only the name, a
theme toggle, and a single "Say hello" link.

## Styles

`src/styles/global.scss` is the only stylesheet any component ever needs —
components add classNames, never their own `@use`/imports. Partials:

```
styles/
├── abstracts/   breakpoints, static spacing scale, typography variables —
│                 SCSS variables/mixins, not runtime values
├── base/        reset · tokens (CSS custom properties, light + dark) · base
├── vendor/      _bootstrap.scss — Bootstrap's grid only (see below)
├── components/  one partial per reusable component (header, rail, marquee…)
├── sections/    one partial per landing-page section
└── pages/       work-page, project-detail, contact-page
```

Class names follow BEM (`block__element--modifier`); breakpoints/spacing/type
scale are SCSS-level constants, while all *color* is a CSS custom property so
theme switching needs no rebuild.

### Why Bootstrap, and how much of it

Only the grid (`Container`/`Row`/`Col` via react-bootstrap, backed by
Bootstrap's own `_grid.scss`/`_containers.scss`) is loaded — not the full
framework. `vendor/_bootstrap.scss` explicitly skips reboot, buttons, cards
and every other component skin, so nothing pulls this bespoke editorial
design toward a generic Bootstrap look. It's used for the asymmetric column
splits (Hero, Intro, About, the project-detail body) at Bootstrap's own
default breakpoints; the more bespoke pieces (the project rail, marquee,
expertise grid) use our own breakpoint mixins instead. Bootstrap's SCSS
internals still lean on the legacy `@import` global-namespace model, so that
one vendor file is a deliberate, contained exception to the
`@use`/`@forward`-only rule the rest of the app follows.

## Theming

Light and dark both exist behind the same tokens (`--paper`, `--ink`,
`--ink-soft`, `--line`) defined in `base/_tokens.scss`; only their *values*
flip per theme. `--signal` (orange) and `--yellow` are fixed brand constants
in both themes. Two elements are deliberately **not** theme-reactive at all —
the yellow philosophy chapter-break and the AI × Design ink block — they're
treated as fixed editorial devices, not page chrome, so they read the same
regardless of theme (the AI block does gain a subtle border in dark mode,
since a fixed-dark block needs an edge once the page canvas is also dark).

Defaults to the system's `prefers-color-scheme`; an explicit toggle
(`ThemeToggle.tsx`, in the header) overrides it and persists to
`localStorage` (`nk-theme`). A small inline script in `index.html` applies
the stored choice before first paint, to avoid a flash of the wrong theme.

## Content

All landing-page copy lives verbatim in `src/content/site.ts`, transcribed from the
approved PRD. Do not paraphrase or invent content there — treat it as source of truth.

Project data (`Project` in `site.ts`) is centralized and typed: `slug` is the
join key both `projectRoute()` and `getProjectThumbnail()` (in `assets.ts`)
resolve against, so adding a project or swapping its media never touches
component code.

## Placeholder media

`src/content/assets.ts` currently points at **temporary AI-generated placeholder
images and a placeholder teaser video**, hosted on Magnific's CDN. They are
referenced as remote URLs rather than bundled into `src/assets/` because this
build environment's network policy blocked direct downloads to disk — the
build tool itself could reach the generation API, but not pull the resulting
files onto disk here.

This works for real visitors (the restriction only applied to this sandbox),
but it isn't a permanent setup:

- The signed URLs carry an expiry token (good for roughly a year from
  generation).
- Hot-linking a third-party generation host isn't appropriate for a shipped
  site.

**Before launch:** download each URL in `src/content/assets.ts`, save it under
`src/assets/images/` (or `src/assets/video/`), and swap the import. Replace the
hero portrait with the real photo, and the four project covers / teaser clip
with real or final creative whenever they're ready — this is exactly the swap
the PRD anticipated ("easily replaceable later"). Nothing in component logic
hard-codes a URL; every reference goes through `assets.ts`.

## Performance

Every route (`Landing`, `Work`, `ProjectDetail`, `Contact`, `NotFound`) is
`React.lazy`-loaded in `App.tsx`, so the initial JS payload only ships the
page actually being visited. Non-critical images (project thumbnails) use
`loading="lazy"`; the hero portrait and project-cover images carry explicit
`width`/`height` so their aspect-ratio boxes reserve space before the image
arrives (no layout shift). The teaser video uses `preload="metadata"` rather
than eagerly buffering the full clip.

## SEO

`useDocumentHead` (a small, dependency-free hook) sets `document.title` and
upserts description/Open Graph meta tags per route. `index.html` carries the
site-wide defaults (description, `og:type`, `og:site_name`, Twitter card,
light/dark `theme-color`).

## Signature move

The hero's thin line (`UntangleLine.tsx`) starts tangled and straightens as
the visitor scrolls past the first screen — a small literal echo of "I design
complex products to feel simple." The numbered project rail
(`ProjectRail.tsx`) stays quiet at rest and reveals a full image on
hover/focus (desktop) — always visible on touch/mobile, since no essential
content is hover-gated. Both fully respect `prefers-reduced-motion`.
