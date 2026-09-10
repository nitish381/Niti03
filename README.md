# Nitish Kumar — Portfolio

Personal portfolio for Nitish Kumar, Senior UI/UX & Product Designer.
React + Vite + TypeScript, SCSS (BEM, `@use`/`@forward`), React-Bootstrap's
grid system for the editorial column layout. Light theme only, by design.

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
├── components/  Header · Footer · Reveal (scroll-in) · UntangleLine
│                 RotatingBadge (hero CTA) · Marquee · Monogram
│                 ProjectRail (numbered rail, shared by SelectedWork + Work)
│                 RouteTransition · SkipLink
├── sections/    one component per landing-page section
├── pages/       Landing · Work · ProjectDetail · Contact · NotFound
│                 (each lazy-loaded — see App.tsx route-level code splitting)
├── layouts/     MainLayout (Header/Footer shell, skip link, scroll-to-top)
├── hooks/       useReducedMotion · useReveal · useScrollParallax · useDocumentHead
├── styles/      global.scss — the single entry point (see below)
└── App.tsx      routes
```

No conventional nav bar, per the brief — the header carries only the name and
a single "Say hello" link.

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

The hero is a layered, scroll-linked composition rather than a flat two-column
split: a huge low-contrast capability word (`.hero__bg-word`) bleeds off the
section's bottom edge behind everything else; the portrait and the five
floating capability pills (`hero.capabilities`, split into individual badges)
sit above it; a circular rotating "Say hello" badge (`RotatingBadge.tsx`,
SVG `textPath`, links to `/contact`) overlaps the portrait's corner. One
scroll listener (`useScrollParallax`) writes a single `--scroll-p` CSS custom
property per frame; the background word, portrait and pills each read it at
their own rate via `transform: translateY(calc(var(--scroll-p) * <px>))` —
real depth from differential movement, not a repeated fade-in. The hero's
thin line (`UntangleLine.tsx`) starts tangled and straightens as the visitor
scrolls past the first screen — a small literal echo of "I design complex
products to feel simple." The numbered project rail (`ProjectRail.tsx`) stays
quiet at rest and reveals a full image on hover/focus (desktop) — always
visible on touch/mobile, since no essential content is hover-gated.

On narrow screens (below Bootstrap's own 768px column-stacking breakpoint —
matched deliberately, not an independent guess) the pills and badge recompose
into a static row rather than staying scattered against a now much-wider
stacked portrait. Everything here respects `prefers-reduced-motion`: the
parallax listener never attaches, the badge doesn't spin, the pills don't
float.
