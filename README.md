# Nitish Kumar — Portfolio

Personal portfolio for Nitish Kumar, Senior UI/UX & Product Designer.
React + Vite + TypeScript, plain CSS with a token-driven design system.

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

## Structure

```
src/
├── content/        site.ts (approved copy) · assets.ts (placeholder media URLs)
├── components/      Header · Footer · Reveal (scroll-in) · UntangleLine (hero signature move)
├── sections/        one component per landing-page section
├── pages/           Landing · Work · ProjectDetail · Contact · NotFound
├── layouts/          MainLayout (Header/Footer shell + scroll-to-top on route change)
├── hooks/            useReducedMotion · useReveal
├── styles/global.css design tokens + all styles (single entry point)
└── App.tsx            routes
```

No conventional nav bar, per the brief — the header carries only the name and a single "Say hello" link.

## Content

All landing-page copy lives verbatim in `src/content/site.ts`, transcribed from the
approved PRD. Do not paraphrase or invent content there — treat it as source of truth.

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
the PRD anticipated ("easily replaceable later").

## Signature move

The hero's thin line (`UntangleLine.tsx`) starts tangled and straightens as
the visitor scrolls past the first screen — a small literal echo of "I design
complex products to feel simple." It fully respects
`prefers-reduced-motion` (renders straight immediately, no animation).
