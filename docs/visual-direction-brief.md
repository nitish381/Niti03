# Visual Direction Brief (Part 2)

Self-authored under explicit creative delegation — the supplied PDF fully specifies
vibe, palette, typography, grid, interactions, marquee, hover behavior, and
accessibility, so this documents the decisions rather than re-running the interview.

## Vibe
Bold editorial, premium, typography-led, high contrast, controlled accent.
References: the Pixora personal-portfolio reference (structure/energy only, not cloned).

## Palette
Paper `#FAFAF7` / Ink `#141414` dominate. Signal Orange `#FF4B1F` is reserved for
CTAs, links, arrows, and small indicators (project index numbers) — never for
tag/label text, which stays neutral ink-soft. Break Yellow `#F5D300` is used
exactly once, full-bleed, for the philosophy chapter break.

## Type
Two families only: **Anton** (display — heavy, condensed, editorial, reads well
in the uppercase-heavy copy already approved) and **Inter** (body/UI).

## Grid
12-col desktop / 8-col tablet / 4-col mobile editorial grid, used for intentional
asymmetric column spans (hero, intro, about) rather than centered symmetric layouts.

## Feeling curve
- Hero — confident, still (clip-reveal headline, monogram, untangle-line)
- Marquee — kinetic jolt right after the hero's stillness
- Intro — calm clarity
- Teaser video — cinematic tension
- Expertise — structured competence
- **Selected Work — the peak.** Numbered rail, thumbnail hidden at rest, revealed
  on hover/focus with scale + arrow shift. Largest interaction budget on the page.
- Experience — grounded credibility (8.5+ years, progression chain)
- AI × Design — quiet confidence, restrained, same visual language as the rest
- Process — procedural clarity
- Philosophy (yellow break) — a second, smaller jolt
- Industries / About — steady, warm close
- Final CTA — resolves and holds, does not fade out

## Tell-someone sentence
"It's the site where the project list stays quiet until you hover — then a full
editorial image slides in like flipping to that page."

## Signature moves
1. Numbered project rail with hover/focus-revealed imagery (the peak, per brief).
2. Hero "untangle line" carried over from Part 1 (tangled → straight on scroll).

## Grammar
Closest to an editorial-index / gallery grammar: numbered lists, full-bleed color
and video breaks, no continuous camera flight, no clay diorama, no scroll-cue
affordances, no section counters. This is a redesign of an existing, already-approved
React app rather than a greenfield static build, so the skill's disposable-build
workspace/fingerprint-registry tooling and kie.ai pipeline are not used — Magnific
(per the PRD) remains the asset source, and the app's own repo is the build folder.

## Accessibility commitments
Semantic heading order per page (fixed: Contact page now renders its own `h1`),
visible focus states in Signal Orange, marquee `aria-hidden` (decorative — same
keywords exist as real text elsewhere), hover-revealed imagery is decorative only
(all project text stays always visible, not hover-gated), reduced-motion honored
by the marquee, hero reveal, hover transforms, and page transitions.
