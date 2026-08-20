# RAAHI — Asset Manifest

Every visual asset on the source-of-truth frame (**Final Pages › LandingPage**,
node `105:1062`, file `GsFr2RqNMFtoJ2guv25Pm8`).

**Status: NOT YET EXPORTED.** `www.figma.com` is blocked by this session's
network egress policy, so the download URLs the Figma MCP server returns cannot
be fetched. See "Blocker" at the bottom.

Nothing has been substituted. Components reference their intended asset through
a `data-asset` attribute so the slots are wired and empty rather than filled
with stand-ins.

Totals: **74 asset references** — 51 SVG, 23 raster — resolving to **~44
distinct assets** once shared icons are de-duplicated.

---

## Raster assets (23 references)

| Figma node | Figma name | Target file | Format |
|---|---|---|---|
| `111:2061` | image 1 | `images/hero/hero-mountain-valley.webp` | WebP + JPEG @2× |
| `105:1132` | Raahi_logo_mark_only 1 | `logo/raahi-mark.svg` *(vector original requested)* | SVG preferred |
| `111:2076` | Raahi_logo_mark_only 2 | `logo/raahi-mark-alpha.png` | PNG @3× |
| `167:1172` | Raahi_logo_mark_only 1 | *(same as `105:1132`)* | — |
| `129:2347` | ChatGPT Image Aug 18 2026 05_04_42 PM 1 | `images/sections/signal-crossroads.webp` | WebP + JPEG @2× |
| `I108:676;108:569` | 31884421_book_mockup_31 1 | `images/books/book-01-discipline-of-attention.png` | PNG @2×, alpha |
| `I108:676;108:571` | 31884421_book_mockup_30 2 | `images/books/book-02-work-that-matters.png` | PNG @2×, alpha |
| `I108:676;108:568` | 31884421_book_mockup_29 1 | `images/books/book-03-ladder-within.png` | PNG @2×, alpha |
| `I108:676;47:880;47:842` | book-beyond-first-flight-CSB259cE 2 | `images/books/book-04-beyond-first-flight.png` | PNG @2×, alpha |
| `I108:676;47:894;47:860` | book-code-courage-clarity-I4Po2keT 2 | `images/books/book-05-code-courage-clarity.png` | PNG @2×, alpha |
| `111:1899` | image 4 | `graphics/journey/river-with-rower.png` | PNG @2×, alpha |
| `108:786` | 7edc587b-…-5f6185bc9ec0 1 | `images/sections/gurmukhi-calligraphy.png` | PNG @2×, alpha |
| `146:2538` | ChatGPT Image Aug 18 2026 05_51_18 PM 1 | `graphics/iceberg/iceberg.png` | PNG @2×, alpha |
| `146:2612` | image 13 | `graphics/decorative/grid-texture-a.png` | PNG, alpha — **optional** |
| `146:2614` | image 14 | `graphics/decorative/grid-texture-b.png` | PNG, alpha — **optional** |
| `137:2358` | image 9 | `images/seminar/seminar-founder-stage.webp` | WebP + JPEG @2× |
| `137:2357` | image 8 | `images/seminar/seminar-audience.webp` | WebP + JPEG @2× |
| `137:2359` | image 10 | `images/seminar/seminar-group.webp` | WebP + JPEG @2× |
| `137:2377` | l8YnPfO1KlKps6bo2S4dz5wpFKs.png | `images/founder/founder-avatar.webp` | WebP + JPEG @2× |
| `137:2378` | image 7 | `images/founder/testimonial-avatar-2.webp` | WebP + JPEG @2× |
| `137:2379` | image 8 | `images/founder/testimonial-avatar-3.webp` | WebP + JPEG @2× |
| `105:1354` | 13940 1 | `images/backgrounds/cta-texture.png` | PNG @2×, alpha |
| `164:235` | image 8 | `images/sections/phone-book-detail.png` | PNG @3×, alpha |
| `164:236` | image 6 | `images/sections/phone-home.png` | PNG @3×, alpha |
| `105:1370` | Google_Play_2022_icon.svg 1 | `icons/store-google-play.svg` | SVG (source is a rasterised SVG) |

> `137:2378` and `137:2379` are two further testimonial avatars found while
> building this manifest. They were not in the Phase 01 audit — the founder
> block carries a three-avatar stack, not one.

## Vector assets (51 references)

### Hero
| Figma node | Name | Target file |
|---|---|---|
| `116:2272` | Vector 2 | `graphics/decorative/hero-golden-path.svg` |
| `105:1059` | Fog Layer | `graphics/decorative/hero-fog-right.svg` |
| `105:1060` | Fog Layer | `graphics/decorative/hero-fog-left.svg` |
| `105:1058` | Horizon Glow | `graphics/decorative/hero-horizon-glow.svg` |
| `116:2183` / `116:2231` | City_1 | `icons/waypoint-compass.svg` *(flatten the mask)* |

### Journey & library backdrops
| Figma node | Name | Target file |
|---|---|---|
| `111:2096` | Group (12 vectors) | `graphics/journey/mountain-silhouette.svg` *(flatten)* |
| `111:1844` | Group (12 vectors) | `graphics/journey/mountain-panorama-tile.svg` *(one tile, repeats ×4)* |
| `111:1905`, `111:1910`, `111:1915`, `111:1919`, `111:1924` | Group 7 | `icons/node-ring.svg` |

### Feature icons
| Figma node | Card | Target file |
|---|---|---|
| `117:939` | Adaptive Literature | `icons/feature-adaptive-literature.svg` |
| `117:958` | Playable Decision Points | `icons/feature-decision-points.svg` |
| `117:977` | Moments That Matter | `icons/feature-moments.svg` |
| `117:996` | Reflective Calibration | `icons/feature-calibration.svg` |

### Iceberg markers
| Figma node | Name | Target file |
|---|---|---|
| `146:2539`, `146:2544`, `146:2548`, `146:2552` | Group 7 / 13–15 | `icons/marker-above.svg` |
| `146:2558`, `146:2562`, `146:2566`, `146:2570`, `146:2574`, `146:2578` | Group 16–21 | `icons/marker-below.svg` |

### UI & ornament
| Figma node | Name | Target file |
|---|---|---|
| `111:2089` | SVG | `icons/install-app.svg` |
| `105:1362` | Apple | `icons/store-apple.svg` |
| `117:919` | Group 9 | `icons/badge-google-play.svg` |
| `117:931` | Group 10 | `icons/badge-app-store.svg` |
| `163:51`, `163:55`, `163:109`, `163:118`, `163:127` | fi_7131174 | `icons/faq-plus.svg` |
| `163:52` | Layer 39 | `icons/faq-minus.svg` |
| `108:799`, `108:805` | fi_16702700 | `icons/check-circle.svg` |
| `108:790` | “ | `icons/quote-glyph.svg` *(mirrored for the pair)* |
| `137:2391` | svg-685804024_684 | `icons/quote-mark-large.svg` |
| `137:2364` | Ellipse 5 | *(6px dot — rendered in CSS)* |
| `167:1141`, `167:1166` | Ellipse | `graphics/decorative/newsletter-glow.svg` *(or CSS radial)* |

### Reproduced in CSS by design
These are literally a gradient, a circle or a repeating grid in Figma, so they
ship as CSS rather than as files. Everything else is an exported asset.

- `111:2109`, `111:1870`, `111:1898` — gradient fade rectangles
- `137:2364`, `137:2366` — 6px dot separators
- `111:1904` etc. — dashed connector lines
- `167:1141`, `167:1166` — glow ellipses *(pending visual comparison in Phase 03)*

---

## Derived assets

| Asset | Source | Notes |
|---|---|---|
| `favicon.svg` | Raahi logo mark `105:1132` | Not linked in `index.html` until the mark is exported. |

---

## Blocker

`mcp__Figma__download_assets` and `get_screenshot` both return short-lived URLs
on `https://www.figma.com/api/mcp/asset/…`. Fetching them from this session
fails at the egress gateway:

```
$ curl -L -o hero.png "https://www.figma.com/api/mcp/asset/…"
curl: (56) CONNECT tunnel failed, response 403

$ curl -sS "$HTTPS_PROXY/__agentproxy/status"
{ "kind": "connect_rejected",
  "detail": "gateway answered 403 to CONNECT (policy denial or upstream failure)",
  "host": "www.figma.com:443" }
```

Reproduced three times. `registry.npmjs.org` returns 200 from the same shell, so
this is host-specific policy, not general network failure.

**To unblock:** allow `www.figma.com` (and `figma-alpha-api.s3.us-west-2.amazonaws.com`,
which Figma redirects some exports to) for this environment's egress policy.
Once allowed, every asset above can be pulled by node ID in a single pass —
the manifest is written to be machine-readable for exactly that.
