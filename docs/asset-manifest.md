# RAAHI — Asset Manifest

Assets in use on the landing page, and where each one is mounted.

**Status: 18 of 18 supplied assets integrated.** They were delivered directly as
a folder (`Raahi_assets.zip`) rather than exported from Figma — `www.figma.com`
remained blocked by this environment's egress policy throughout, so no asset was
pulled from the file itself.

Original filenames are kept exactly as delivered. `src/assets/registry.ts` globs
`src/assets/**` and indexes by filename stem, so each component asks for an
asset by its own name.

---

## Where each asset is mounted

| File | Section | Notes |
|---|---|---|
| `raahi-hero.png` (1920×1080) | Hero | **Complete composition.** Photograph, fog, horizon glow, golden path and *both* waypoint markers with their labels are all painted in. |
| `raahi-logo.png` (606×410) | Header, Footer | **Full lockup** — mark *and* "Raahi" wordmark, white line art. |
| `raahi-personal-map-visual.png` (480×482) | Personal Map / signal diagram | White squircle frame is part of the artwork. |
| `raahi-journey-background.png` (1920×257) | Journey | Mountain horizon strip above the section edge. |
| `raahi-journey-road.png` (436×731) | Journey | River with the rower. Its ground is `#f4ece2` — the page sand exactly. |
| `raahi-manifesto-quote-card.png` (568×737) | Manifesto / philosophy | **Complete card:** panel, title, gold Gurmukhi calligraphy and the translation pill with both quote glyphs. |
| `raahi-feature-adaptive-literature.svg` | Feature card 1 | 94×94 |
| `raahi-feature-playable-decisions.svg` | Feature card 2 | 94×94 |
| `raahi-feature-moments-that-matter.svg` | Feature card 3 | 94×94 |
| `raahi-feature-reflective-calibration.svg` | Feature card 4 | 94×94 |
| `raahi-mental-model-iceberg.png` (711×832) | Mental Model / iceberg | **All ten marker rings and labels are painted in**, along with the faint grid panels. |
| `raahi-founder-story.png` (760×636) | Seminar | **Complete three-photo mosaic** — portrait, audience and group, gutters and corners composed. |
| `raahi-book-discipline-of-attention.png` | Books, slide 01 | 445×643 |
| `raahi-book-work-that-matters.png` | Books, slide 02 | 445×643 |
| `raahi-book-ladder-within.png` | Books, slide 03 | 445×643 |
| `raahi-app-showcase-background.png` (1599×415) | App showcase | **Complete band** — ground, organic texture and rounded corners. |
| `raahi-app-screen-01.png` (259×455) | App showcase | Back phone — home / library screen. |
| `raahi-app-screen-02.png` (259×496) | App showcase | Front phone — book detail screen. |

---

## Composites: what was removed from the markup

Several assets arrived as finished compositions. The HTML and CSS that
previously drew those pieces has been deleted so nothing is drawn twice and no
part of the artwork is re-typeset:

| Asset | Elements removed |
|---|---|
| `raahi-hero.png` | Fog layers ×2, horizon glow, golden path, both waypoint markers and their four lines of text |
| `raahi-mental-model-iceberg.png` | Ten absolutely-positioned marker rings + labels, and the mobile grouped-list fallback |
| `raahi-manifesto-quote-card.png` | Dark card panel, title, calligraphy slot, translation pill, quote glyphs |
| `raahi-founder-story.png` | Three-tile mosaic grid and its per-tile aspect boxes |
| `raahi-app-showcase-background.png` | Band colour fill and the separate `mix-blend-mode: multiply` texture layer |
| `raahi-logo.png` | The HTML "Raahi" wordmark beside the mark |
| `raahi-personal-map-visual.png` | The 16px white border and 93px radius |

Because the iceberg's labels are pixels rather than characters, the same ten
terms are repeated in a visually hidden block for screen readers.

---

## Presentation adjustments (CSS only — no file was edited)

- **Hero**, below 16:9 viewports, is anchored `object-position: 100% center`.
  The crop falls on the empty left of the valley, which keeps the golden path
  and both waypoints on screen. Below 768 the whole frame is shown at its own
  aspect ratio above the copy, so nothing is lost.
- **Footer logo** is tinted with `filter: brightness(0)`. The supplied lockup is
  white and the footer ground is sand.
- **Iceberg** keeps its faint white grid panels. They are `rgba(255,255,255,0.3)`
  in the artwork and correspond to the grid textures in Figma (`146:2612`,
  `146:2614`), so they are left alone.

---

## Still outstanding

| Missing | Where | Current behaviour |
|---|---|---|
| Book covers 04 and 05 — *Beyond First Flight*, *Code, Courage & Clarity* | Books rail | Slides keep their place; cover renders as an empty box. Nothing substituted. |
| Founder avatar | Founder message | Empty circular box. |
| Check-circle icon (Figma `108:799`) | Philosophy checklist | Rows render without a glyph. |
| Quote-mark glyph (Figma `137:2391`) | Founder message | Not drawn. |
| App Store / Google Play badge artwork | App showcase, Books | Bordered text badges — deliberately *not* an imitation of the official marks. |
| Install-app icon (Figma `111:2089`) | Header pill | Not drawn. |
| Mountain silhouette (Figma `111:2096`) | Books section backdrop | Only the gradient fade is drawn. The thin `raahi-journey-background` strip belongs to the Journey section and would have to be stretched to stand in. |

Consequence of the last one: the Figma slide numerals are `#F4ECE2` against that
silhouette. With no backdrop, cream on sand is invisible, so they render as ink
at 18% opacity — the same ghosted-numeral effect, legible on the sand ground.
