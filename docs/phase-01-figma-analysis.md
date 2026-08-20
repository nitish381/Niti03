# RAAHI — Phase 01: Figma Analysis & Asset Audit

**Figma file:** `GsFr2RqNMFtoJ2guv25Pm8` — "Raahi"
**Source of truth frame:** `Final Pages › LandingPage` — node `105:1062` — 1920 × 10493
**Analysis date:** 2026-08-20

---

## 01 — FIGMA FILE STRUCTURE

### Pages

| Page | Node ID | Role |
|---|---|---|
| **Final Pages** | `61:1031` | Delivery page. Contains the finished landing page. |
| Design | `0:1` | Working/exploration page. Drafts, versions, staged raw assets. |

### Frames on "Final Pages"

| Frame | Node ID | Size | Verdict |
|---|---|---|---|
| **LandingPage** | `105:1062` | 1920 × 10493 | ✅ **FIRST COMPLETED LANDING PAGE — SOURCE OF TRUTH** |
| LandingPage-V2 | `171:1210` | 1920 × 6377 | ❌ Ignored (explicit instruction) |

`LandingPage` is first in canvas order (x = −5012 vs −2915) and is the only frame carrying the
complete narrative: hero → personalization → library → journey → philosophy → features →
iceberg → seminar → FAQ → app CTA → newsletter → footer. V2 is 4,116 px shorter and drops
whole sections.

### Frames on "Design" — all intentionally ignored

- `1:652` LandingPage (early draft, 6426 tall)
- `47:419` LandingPage-V2, `108:125` LandingPage-V2 (two explorations)
- `55:86`, `56:564`, `56:1013`, `74:127`, `106:125`, `106:493` — six LandingPage-V3 1600px variants
- `108:573` Frame 9, `74:552` Group 6 — fragments
- Loose staged assets: book cover renders, `Hover` states, `Sliders` master, `image 11/13/14`

**Note on shared components:** the book carousel on the final page is an *instance*
(`108:676`) of the `Sliders` component that lives on the Design page (`47:964`). The instance is
authoritative for layout; the component holds the hover states.

---

## 02 — COMPLETE SECTION-BY-SECTION BREAKDOWN

Ordered top-to-bottom by Y within `105:1062`. Note that Figma child order ≠ visual order here —
several sections are absolutely positioned siblings that overlap.

### 1. Header / Navigation — `111:2094` — y 0, h 102.27

- **Purpose:** persistent global nav, overlaid transparently on the hero.
- **Content:** logo mark + "Raahi" wordmark · Home / The Journey / How It Works / The App / Philosophy · "Install App" pill.
- **CTA:** Install App — gradient pill (`#98C8E8 → #FFAC66 → #98C8E8`), 160.53 × 45, radius 200.
- **Layout:** `justify-between`, 160px horizontal padding, logo block 24px vertical padding.
- **Layering:** sits **above** the hero background; text is light because the hero behind it is near-black.

### 2. Hero — `111:2046` (bg) + `117:1247` (copy) — y 0, h 1080

- **Purpose:** establish the emotional premise — a lone figure in fog looking at a distant summit.
- **Main heading:** "The Map Wasn't Always Yours" — Cormorant Medium **120px / 1.05**, white, 810px wide.
- **Supporting text:** two paragraphs, Poppins Regular 18px, `#B9C0CB`, capped at 576.37px.
- **CTA:** "Learn More" — `#FFAC66` pill, radius 32.422, padding 32.422 × 17.832.
- **Main visual:** full-bleed mountain photograph (`image 1`) at **30% opacity** over a solid black frame, with a left-edge black gradient scrim (to 9.926%).
- **Decorative / layering (bottom → top):** black base → photo @30% + scrim → golden path curve (`Vector 2`) → two Fog Layer ellipse blurs → Horizon Glow → two waypoint markers → nav → copy block.
- **Waypoint markers:** "YOU ARE HERE / STORY 01 · THE FOG" at (994, 781) and "TARGET IDENTITY / 100 STORIES AHEAD" at (1475, 161). Compass icon 116 × 117 + 16px gap + 229px text column.

### 3. Transitional Statement — `117:813` — y 1180, h 87

- **Purpose:** thesis line bridging hero into personalization.
- **Heading:** "NO TWO PEOPLE WALK THROUGH LIFE WITH THE SAME MAP." — Cormorant Medium 50px, black, centered. Rendered as **small-caps by per-character casing spans**, not a CSS property.
- **Supporting text:** Poppins Regular 16px / 26px, `#191614`, 1123.34px wide, centered.
- **Layout:** centered, 30px gap, sits on the page's sand background.

### 4. Personalization Diagram — `129:2353` + `132:2354` — y 1311, h 763

- **Purpose:** show the four signals Raahi reads about you.
- **Main visual:** aerial photo of a child with a telescope at a four-way crossroads, 447.9 × 449.58, heavily rounded (squircle).
- **Four labels** on N/E/S/W axes: YOUR STRUGGLE→Direction (top), YOUR GOAL→Confident Leader (right), YOUR CONTEXT→Student 21 (bottom), YOUR PATTERNS→Overthinking (left).
- **Decorative:** dashed connector lines terminating in 24.057px ring nodes; small "YOU" label (`132:2354`) centered on the image.
- **Layout:** absolutely positioned radial composition — not a flow layout.

### 5. Dark Banner Strip — `116:2289` — y 2114, h 105

- **Purpose:** punctuation between the diagram and the library.
- **Heading:** "Before Helping You Move Forward, Raahi Understands What Moves You" — Cormorant **Bold 40px**, white, centered, 1147px.
- **Style:** `#373737` card, radius 30, padding 28/227/29/226, drop-shadow `0 20.264px 26.383px rgba(0,0,0,0.06)`.
- **Layering:** overlaps the top edge of the next section's background band.

### 6. Library / Book Carousel — `111:2095` — y 2319, h 965

- **Purpose:** present Raahi as a reading product.
- **Heading:** "We are a self-aware reading app." — Cormorant Medium 50px, `#0A0909`, 626px.
- **Supporting text:** Poppins Regular 16px / 26px, `#191614`.
- **CTA:** App Store + Google Play badges, top-right (`117:932`, 363.03 × 58.56).
- **Main visual:** `Sliders` instance — **5 slides**, each 500px wide with a Poppins Bold 48px numeral (`01`–`05`) in `#F4ECE2` above the cover. Slides at x = 0, 650, 1300, 1980, 2630. Viewport is 1600 → ~3 visible, 2 off-canvas.
- **Hover state (in component):** an "Explore" pill (`#F4EEE2`, radius 40) rises from `bottom: -100px`.
- **Decorative:** 12-vector layered mountain-range silhouette (3451 × 1481, bleeds beyond the frame) + a gradient fade rectangle at the bottom (`111:2109`, y 623.53, h 341.47).

### 7. The River Journey — `111:1841` — y 3403, h 932

- **Purpose:** the core metaphor — growth as a river you travel.
- **Eyebrow:** "The Self-Awareness Engine" — Poppins SemiBold 16px uppercase, `#B5502C`.
- **Heading:** "Turn Your Growth Into a Story You Live" — Cormorant Medium 50px, `#0A0909`.
- **Main visual:** vertical river illustration with a rower (`image 4`, 435.76 × 730.53) centered at x ≈ 701.
- **Five journey nodes**, alternating left/right, each = dashed line + 24.057px ring + two-line label (Poppins Regular 16px / 25px label over Cormorant Medium 30px / 58.33px value in `#B5502C`):
  - Left: The Summit → Leadership (y 335) · The Storm → Resistance (y 526) · Confusion → The Fog (y 717)
  - Right: Identity Shift → The Forge (y 428) · Effort → The Climb (y 608)
- **Decorative:** a tiled mountain-panorama strip (`111:1842`, four 12-vector groups + two gradient fades) sitting **above** the section, y −38, creating a soft horizon that the river descends from.

### 8. Philosophy — `108:783` — y 4335, h 976

- **Purpose:** state the belief system.
- **Section style:** `#FCF9F6` background, padding 120 vertical / 160 horizontal, 80px column gap.
- **Left — dark art card** (`108:784`): `#373737`, radius 30, padding 60, 27px gap.
  - Title "Man Jeetai Jag Jeet." — Cormorant **Bold 50px**, white, letter-spacing 3px.
  - Gurmukhi gold calligraphy artwork, 395.48 square.
  - Translation pill: `#504F4F`, radius 30, 447.07 × 105.54; Inter Regular 16px / 24.316px white centered, flanked by two rotated quote glyphs.
- **Right — copy column** (`108:792`, 967px):
  - Eyebrow "Our Philosophy" (Poppins SemiBold 16px uppercase `#B5502C`)
  - Heading "Redesigning the Human Operating System" — Cormorant Medium 50px
  - Three body paragraphs, Poppins Regular 16px / 26px, 16px paragraph spacing
  - Two check-circle bullets (icon 29.18px + Poppins Medium 16px / 24.316px)
  - CTA "Learn More" — `#FFAC66` pill

### 9. Feature Cards — `117:1079` — y 5311, h 685.83

- **Purpose:** explain the four engine mechanics.
- **Eyebrow + heading:** "The Self-Awareness Engine" / "Turn Your Growth Into a Story You Live" — **identical to Section 7.** Flagged as a likely duplication to confirm with design.
- **Grid:** 4 columns, 1600px total, 30px gap, each card 377.5 × ~327.
- **Card style:** 1px `#D2C1AC` border, radius 30, padding 41, 40px gap; icon 93.333px (3 SVG groups each); title Cormorant Medium 30px `#B5502C`; body Poppins Regular 16px / 26px `#6D6868`.
- **Cards:** Adaptive Literature · Playable Decision Points · Moments That Matter · Reflective Calibration.
- **Hidden in Figma:** each card has a "View details →" link container, `hidden="true"`. Do not render.
- **Inconsistency:** card 2's body is 14px / 24px while cards 1, 3, 4 are 16px / 26px, and card 2's height is 326.33 vs 327.33. Normalize to 16px / 26px.

### 10. The Iceberg / Invisible Map — `146:2583` + `146:2582` — y ~5943–6774

- **Purpose:** the central visual thesis — visible behavior vs. hidden drivers.
- **Left column** (`146:2583`, 845px, x 160):
  - Eyebrow "THE INVISIBLE MAP" — Poppins SemiBold 16px uppercase `#B5502C`
  - Heading "What You See is Only The Surface" — Cormorant Medium **60px / 70px**, 553.49px wide
  - Three body paragraphs, Poppins Regular 16px / 26px
  - CTA "Reserve My Seat" — `#FFAC66`, radius 40, padding 40 × 22
- **Right — iceberg graphic** (`146:2582`, 644.65 × 773.58, x 1113):
  - Photoreal iceberg render, waterline roughly mid-height
  - **Above water — 4 green ring markers:** Your Actions, Your Choices, Your Results, Your Habits
  - **Below water — 7 red ring markers:** Beliefs, Fears, Expectations, Inherited Patterns, Past Experiences, Mental Models
  - Marker labels: 25px line boxes, ring icon 24.057px on the side facing the iceberg
- **Decorative:** two near-invisible faint grid textures (`146:2612` image 13, `146:2614` image 14, 451.59 × 569.44 each) sitting low in the z-stack behind the iceberg. Optional.

### 11. Seminar + Founder — `137:2355` — y 6865, h 1203.70

**11a — Seminar** (`137:2400`, y +120)

- **Left photo mosaic** (`137:2356`, 759.70 × 636): tall founder-on-stage portrait 393.47 × 636; audience crowd 355.70 × 265 (top right); group-on-stage 355.70 × 361 (bottom right); 10px gutters.
- **Right copy** (`137:2360`, 801px): meta row "MONTHLY • HYBRID • MOHALI, INDIA" (Poppins SemiBold 16px uppercase `#B5502C`, 6px dot separators, 20px gaps) → heading "Raahi isn't only an app. It's a room full of people writing their next chapter." (Cormorant Medium 50px) → two body paragraphs → CTA "Reserve My Seat".

**11b — Founder Message** (`137:2372`, y +816, h 267.70)

- Circular avatar 139.70px + name "Vikram R Singh" / "CEO @Antier" (Poppins, 22px line boxes), 182px column.
- Large decorative quote mark SVG, 70.85 × 62.
- Heading "A Message from the Founder" — 1406px column.
- Two-paragraph quote body.

### 12. FAQ — `165:239` — y 8189, h 707

- **Eyebrow:** "FAQ" — Poppins SemiBold 16px uppercase `#B5502C`, centered.
- **Heading:** "BEFORE THERE WAS A JOURNEY, THERE WERE QUESTIONS." — Cormorant, centered, 1019.30px.
- **Accordion:** 5 items, 1600px wide, 16px gap.
  - Container: 1px `#D2C1AC`, radius 20, padding 31 × 11, shadow `0 0 2px rgba(39,39,46,0.04)`.
  - Number badge: 30px circle, `#E3A465`, radius 42, Poppins SemiBold 16px / 19.2px `#191614`.
  - Question: Poppins Regular 24px / 28.8px, `#1E1E1E`.
  - Toggle icon 36px — minus when open (`Layer 39`, 30 × 2.143 bar), plus when closed.
  - Answer: Poppins Regular 16px / 26px, padding-left 45, padding-right 69, padding-bottom 10.
- **Default state:** item 1 open (h 176), items 2–5 closed (h 88).
- **Copy status:** answer body is **Lorem ipsum placeholder** — real copy required before launch.

### 13. App Download CTA — `105:1352` — y 9058, h 496

- **Purpose:** the conversion moment.
- **Band:** `165:238` — `#201F1A`, radius 40, 1599 × 415, overflow clipped; dark organic texture PNG at **mix-blend-multiply** on top.
- **Heading:** two lines, both Cormorant Medium, line-height 83px, `#F4ECE2` — "Your roadmap is waiting." at **40px**, "Start walking it today." at **70px**.
- **Supporting text:** Poppins Regular 16px / 24px, `rgba(255,255,255,0.7)`, letter-spacing −0.64px.
- **CTA:** App Store (148 × 40) + Google Play (143 × 40) badges — black, 1px `#A6A6A6`, radius 6, Inter 9px uppercase over Inter 18px.
- **Main visual — layering:** two app-screen phone mockups (258.33 × 530.02 and 258.95 × 529.98) **break out of the band on both the top and bottom edges**. This overflow is the section's signature move.

### 14. Newsletter — `167:1202` — y 9674, h 303

- **Eyebrow:** "YOU DON'T HAVE TO DESTROY THE MAP YOU INHERITED." — Poppins SemiBold 16px uppercase `#B5502C`, centered.
- **Heading:** "You Just Have To Start Drawing Your Own" — Cormorant Medium **90px / 90px**, `#0A0909`, 1129.29px, centered.
- **Form** (`167:1201`, 593px): input `#FCF9F6` radius 200, padding 35 × 20, placeholder Inter Regular 13px uppercase `#828487` tracking 1.3px; Subscribe button `#FFAC66` radius 200, Inter SemiBold 13px uppercase black. **Button overlaps the input by 76px** (`mr: -76px`).
- **Decorative:** two large glow ellipses behind — `167:1141` (1909.65 × 900, y 9526) and `167:1166` (830 × 391.17, y 9781).

### 15. Footer — `167:1167` — y 10092.82, h 400.18

- Top hairline rule, `rgba(0,0,0,0.1)`, 0.969px.
- **Left (554.52px):** logo mark 54.269px → "One story. Many lives." Cormorant Medium **60px**, tracking −2px, `#0A0909` → descriptor Poppins Regular 16px / 26px.
- **Right:** two columns, 94px gap — **Address** (Inter Light 26px / 32px head, tracking −0.52px; Inter Regular 16px / 32px lines) and **Connect** (Poppins Light 26px head; Poppins Regular 16px lines).
- **Bottom bar** (1590px, hairlines above and below, 27px gaps): "© 2026 Raahi World" left (Inter, "©" semibold, rest regular, 16px / 28px) · "Terms & Conditions" + "Privacy Policy" right, underlined, 50px gap.

---

## 03 — DESIGN SYSTEM EXTRACTION

All values read from Figma. Nothing below is estimated.

### Colors

**Accent / brand**

| Token | Hex | Use |
|---|---|---|
| Terracotta | `#B5502C` | Eyebrow labels, card titles, journey node values |
| CTA Orange | `#FFAC66` | Every primary button, Subscribe |
| Amber | `#E3A465` | FAQ number badges |
| Sky | `#98C8E8` | Install App gradient endpoints |

**Ink**

| Token | Hex | Use |
|---|---|---|
| Heading ink | `#0A0909` | All light-background Cormorant headings |
| Body ink | `#191614` | All light-background body copy |
| FAQ question | `#1E1E1E` | Accordion question text |
| Muted body | `#6D6868` | Feature card descriptions |
| Grey 49 | `#797E81` | Variable `color/grey/49` |
| Placeholder | `#828487` | Email input placeholder |

**Surfaces**

| Token | Hex | Use |
|---|---|---|
| Warm white | `#FCF9F6` | Philosophy section, email input fill |
| Cream | `#F4ECE2` | CTA heading text, slider numerals |
| Cream alt | `#F4EEE2` | Slider hover pill |
| Charcoal card | `#373737` | Man Jeetai card, dark banner strip |
| Charcoal pill | `#504F4F` | Translation pill in dark card |
| CTA band | `#201F1A` | App download band |
| Hero base | `#000000` | Hero frame fill |

**On-dark text**

| Token | Hex |
|---|---|
| White | `#FFFFFF` |
| Cloud (`color/cloud`) | `#F3F4F6` |
| Stone (`color/stone`) | `#B9C0CB` |
| CTA body | `rgba(255,255,255,0.7)` |

**Lines**

| Token | Value | Use |
|---|---|---|
| Card border | `#D2C1AC` | Feature cards, FAQ containers |
| Badge border | `#A6A6A6` | App store badges |
| Footer rule | `rgba(0,0,0,0.1)` @ 0.969px | Footer hairlines |

**Published Figma variables (partial library):** `color/cloud #f3f4f6`, `color/stone #b9c0cb`,
`color/grey/49 #797e81`, `color/black/solid #000000`, `color/white/solid #ffffff`,
`font family/Font 1 = Inter`, `font weight/500`, `font weight/600`, `line height/20`,
`line height/22`, `height/16`, `item spacing/36`, `letter spacing/-0_48`.
Most of the page is **hard-coded hex, not variable-bound** — the token set must be authored in code.

### Typography

**Families:** Cormorant (Medium 500, SemiBold 600, Bold 700) · Poppins (Light, Regular, Medium, SemiBold, Bold) · Inter (Light, Regular, SemiBold)

**Cormorant — display & headings**

| Role | Size / line-height | Weight | Color | Node |
|---|---|---|---|---|
| Hero H1 | 120 / 1.05 | Medium | white | `117:1249` |
| Newsletter H2 | 90 / 90 | Medium | `#0A0909` | `167:1165` |
| Iceberg H2 | 60 / 70 | Medium | `#0A0909` | `146:2591` |
| Footer wordmark | 60, tracking −2 | Medium | `#0A0909` | `167:1173` |
| CTA H2 line 2 | 70 / 83 | Medium | `#F4ECE2` | `105:1358` |
| CTA H2 line 1 | 40 / 83 | Medium | `#F4ECE2` | `105:1358` |
| Section H2 (standard) | 50 / normal | Medium | `#0A0909` | `108:795`, `108:673`, `137:2368`, `117:936` |
| Dark banner H3 | 40 / normal | **Bold** | white | `116:2282` |
| Art card title | 50, tracking 3 | **Bold** | white | `108:785` |
| Logo wordmark | 39.28, tracking −0.9032 | Medium | white | `105:1133` |
| Card title | 30 / normal | Medium | `#B5502C` | `117:948` |
| Journey node value | 30 / 58.333 | Medium | `#B5502C` | `111:1931` |
| Hero marker | 30, tracking 1.8 | SemiBold | `#F3F4F6` | `111:2146` |

**Poppins — UI & body**

| Role | Size / line-height | Weight | Color |
|---|---|---|---|
| Eyebrow label | 16 / 20.264, uppercase | SemiBold | `#B5502C` |
| Body (standard) | 16 / 26 | Regular | `#191614` |
| Hero body | 18 / normal | Regular | `#B9C0CB` |
| Card body | 16 / 26 | Regular | `#6D6868` |
| Nav link | 14, tracking 0.3 | Medium | `#B9C0CB` |
| Button label | 16 / 38.906 | Medium | black |
| Install App | 13, tracking 1.3, uppercase | SemiBold | black |
| FAQ question | 24 / 28.8 | Regular | `#1E1E1E` |
| FAQ number | 16 / 19.2 | SemiBold | `#191614` |
| Slider numeral | 48 / 48 | Bold | `#F4ECE2` |
| Journey node label | 16 / 25 | Regular | `#191614` |
| Hero marker sub | 16, tracking 1 | Regular | white |
| Checklist item | 16 / 24.316 | Medium | `#191614` |
| Footer "Connect" head | 26 / 32, tracking −0.52 | Light | `#191614` |

**Inter — utility**

| Role | Size / line-height | Weight |
|---|---|---|
| Footer "Address" head | 26 / 32, tracking −0.52 | Light |
| Footer body | 16 / 32 | Regular |
| Footer legal | 16 / 28 | Regular (© is SemiBold) |
| App badge small | 9 / 9, uppercase | Regular |
| App badge large | 18, tracking −0.47 | Regular |
| Email placeholder | 13 / 13, tracking 1.3, uppercase | Regular |
| Subscribe | 13 / 13, tracking 1.3, uppercase | SemiBold |
| Dark card quote | 16 / 24.316 | Regular |

### Buttons

| Variant | Fill | Radius | Padding | Label | Instances |
|---|---|---|---|---|---|
| Primary (small) | `#FFAC66` | 32.422 | 32.422 × 17.832 | Poppins Medium 16 / 38.906 black | Learn More ×2 |
| Primary (large) | `#FFAC66` | 40 | 40 × 22 | Poppins Medium 16 / 38.906 black | Reserve My Seat ×2 |
| Pill / gradient | `#98C8E8 → #FFAC66 (50%) → #98C8E8` | 200 | 20 × 12, h 45 | Poppins SemiBold 13 uppercase | Install App |
| Subscribe | `#FFAC66` | 200 | 35 × 20 | Inter SemiBold 13 uppercase | Newsletter |
| Slider hover | `#F4EEE2` | 40 | 40 × 22 | Poppins Medium 20 / 48 | Explore ×3 |
| App badge | black, 1px `#A6A6A6` | 6 | — 148/143 × 40 | Inter 9 + 18 white | App Store, Google Play |

### Border Radius Scale

`6` (badges) · `20` (FAQ) · `30` (cards, dark panels) · `32.422` (small button) · `40` (large button, CTA band) · `42` (FAQ badge) · `200` (pills, input) · squircle (personalization photo)

### Borders

- `1px solid #D2C1AC` — feature cards, FAQ containers
- `1px solid #A6A6A6` — app store badges
- `0.969px rgba(0,0,0,0.1)` — footer rules (×3)

### Shadows

- FAQ container: `0 0 2px 0 rgba(39,39,46,0.04)`
- Dark banner strip: `drop-shadow(0 20.264px 26.383px rgba(0,0,0,0.06))`

That is the complete shadow inventory. Everything else is flat.

### Container & Grid

- **Design frame:** 1920px
- **Gutter:** 160px each side → **content width 1600px**
- **Feature grid:** 4 × 377.5px, gap 30px
- **FAQ:** full 1600px, inner padding 31px, item gap 16px
- **Footer:** inner 1598px; bottom bar 1590px; column gap 94px
- **Two-column text sections:** 801–967px copy column
- **Hero copy:** 810px block, 576.37px paragraph measure

### Spacing Patterns

- Section vertical padding: **120px** (philosophy: 120/160)
- Header → content: **50px**
- Major stack gap: **40px**
- Heading → body: **20px**
- Eyebrow → heading: **16.211px** / **16.667px** / **20px**
- Paragraph spacing: **16px**
- Card internal: **41px** padding, **40px** gap, **15px** title→body
- Nav link gap: **60px**
- Icon → label: **8.105px** (checks), **16px** (hero markers), **34.057px** (iceberg labels)

---

## 04 — COMPONENT INVENTORY

### Reusable primitives

| Component | Props | Figma source |
|---|---|---|
| `Button` | `variant: primary-sm \| primary-lg \| pill \| subscribe`, `label` | `117:1251`, `146:2593`, `111:2086`, `167:1197` |
| `SectionLabel` | `text`, `align`, `tone` | `117:935`, `108:794`, `146:2586`, `148:1493` |
| `SectionHeading` | `eyebrow`, `title`, `size`, `align` | `117:934`, `108:793`, `137:2361` |
| `AppStoreBadge` | `store: apple \| google`, `size: sm \| lg` | `105:1361/1368`, `117:919/931` |
| `NodeMarker` | `state: default \| above \| below`, 24.057px ring | `111:1905`, `146:2539`, `125:2312` |
| `ConnectorLine` | `orientation`, `length`, `dashed` | `111:1904`, `125:2311` |
| `Logo` | `variant: mark \| lockup`, `tone: light \| dark` | `111:2075`, `167:1172` |

### Section components

| Component | Node | Notes |
|---|---|---|
| `Header` | `111:2094` | Transparent over hero; needs a scrolled state (not in Figma — propose) |
| `Hero` | `111:2046` + `117:1247` | 6-layer composite |
| `HeroWaypoint` | `116:2229` | ×2, absolutely placed |
| `StatementBand` | `117:813` | Centered thesis line |
| `SignalDiagram` | `129:2353` | Radial, 4 `SignalLabel` children |
| `DarkBanner` | `116:2289` | Single-purpose |
| `BookCarousel` | `108:676` | 5 `BookSlide`, hover "Explore" |
| `RiverJourney` | `111:1841` | 5 `JourneyNode`, river art, mountain strip |
| `PhilosophySection` | `108:783` | `ArtCard` + `PhilosophyCopy` |
| `FeatureGrid` | `117:1079` | 4 × `FeatureCard` |
| `IcebergSection` | `146:2583` + `146:2582` | 11 × `IcebergMarker` |
| `SeminarSection` | `137:2400` | `PhotoMosaic` + copy |
| `FounderMessage` | `137:2372` | Avatar + quote |
| `FaqAccordion` | `165:239` | 5 × `FaqItem`, single-open |
| `AppDownloadCta` | `105:1352` | Overflowing phone mockups |
| `NewsletterCta` | `167:1202` | Overlapping input + button |
| `Footer` | `167:1167` | 3 columns + legal bar |

### Recommended React structure

```
src/
├── app/
│   └── page.tsx
├── components/
│   ├── layout/          Header, Nav, Footer, Container, Section
│   ├── ui/              Button, SectionLabel, SectionHeading,
│   │                    AppStoreBadge, NodeMarker, ConnectorLine, Logo
│   ├── sections/        Hero, StatementBand, SignalDiagram, DarkBanner,
│   │                    BookCarousel, RiverJourney, PhilosophySection,
│   │                    FeatureGrid, IcebergSection, SeminarSection,
│   │                    FounderMessage, FaqAccordion, AppDownloadCta,
│   │                    NewsletterCta
│   └── motion/          Reveal, Parallax, StickyStage
├── content/             raahi.ts — all copy, extracted from Figma
├── styles/              tokens.css, globals.css
└── public/assets/
    ├── images/  photos/, books/, phones/, art/
    ├── graphics/ hero/, journey/, iceberg/
    └── icons/   features/, ui/, brand/
```

**Principle:** every section is data-driven from `content/raahi.ts`. No copy hard-coded in JSX.

---

## 05 — COMPLETE ASSET AUDIT

**Legend:** R = raster, V = vector. Resolution column gives the **minimum export**; use 2× (or 3× where noted) of the Figma frame size.

### A. Brand & UI

| # | Asset | Location | Type | R/V | Format | Resolution | Transparency | Frontend use |
|---|---|---|---|---|---|---|---|---|
| A1 | `Raahi_logo_mark_only 1` | Header `105:1132`, Footer `167:1172` | Logo mark | R (should be re-cut as V) | **SVG preferred**, else PNG @3× | 54.269² → 163² | **Yes** | Header + footer logo. Request the vector original from design. |
| A2 | `Raahi_logo_mark_only 2` | Header `111:2076` | Alpha mask | R | PNG @3× | 163² | **Yes** | Luminance mask that tints the mark white on dark. Replace with a currentColor SVG. |
| A3 | Install-app glyph | `111:2089` | Icon | V | SVG | 18² | Yes | Inside Install App pill |
| A4 | Apple logo | `105:1362` | Icon | V | SVG | 20 × 24 | Yes | App Store badge |
| A5 | Google Play icon | `105:1370` | Icon | R | **SVG** (source is `.svg` rasterized) | 21.736 × 24 | Yes | Google Play badge |
| A6 | App Store badge (large) | `117:919` | Composite | V | SVG | 168.75 × 58.56 | Yes | Library section |
| A7 | Google Play badge (large) | `117:931` | Composite | V | SVG | 174.28 × 58.56 | Yes | Library section |
| A8 | `fi_7131174` plus/minus | FAQ ×5 | Icon | V | SVG | 36² | Yes | Accordion toggle. Export both states or animate one bar. |
| A9 | `Layer 39` minus bar | `163:52` | Icon | V | SVG | 30 × 2.143 | Yes | Open-state toggle |
| A10 | `fi_16702700` check-circle | `108:799`, `108:805` | Icon | V | SVG | 29.18² | Yes | Philosophy checklist |
| A11 | Quote glyph `"` | `108:790`, `108:791` | Ornament | V | SVG | 37.234 × 36.215 | Yes | Art-card quote pill (one asset, mirrored) |
| A12 | `svg-685804024_684` | `137:2391` | Ornament | V | SVG | 70.85 × 62 | Yes | Founder quote mark |
| A13 | Dot separator | `137:2364/2366` | Ornament | V | SVG or CSS | 6² | Yes | Seminar meta row. A CSS dot is acceptable — pure circle. |

### B. Hero

| # | Asset | Location | Type | R/V | Format | Resolution | Transparency | Frontend use |
|---|---|---|---|---|---|---|---|---|
| B1 | `image 1` — mountain valley | `111:2061` | Photo | R | **WebP + JPEG fallback** | 3840 × 2406 (2×) | No | Full-bleed hero bg at **opacity 0.30** on `#000`, plus left→right black gradient scrim to 9.926%. Focal point: the ridge line and the standing figure at ~28% from left, ~50% height. |
| B2 | `Vector 2` — golden path | `116:2272` | Graphic | V | **SVG** | 499.85 × 570.23 | Yes | The S-curve connecting the two waypoints. Must be SVG — it will be stroke-animated. |
| B3 | `Fog Layer` (right) | `105:1059` | Atmosphere | V | SVG (blurred ellipse) | 1281.22 × 288.83 | Yes | Fog band, y 839 |
| B4 | `Fog Layer` (left) | `105:1060` | Atmosphere | V | SVG | 1048.27 × 222.18 | Yes | Fog band, y 906 |
| B5 | `Horizon Glow` | `105:1058` | Atmosphere | V | SVG | 777.62 × 726.85 | Yes | Warm glow behind the summit |
| B6 | `City_1` waypoint compass | `116:2183`, `116:2231` | Icon | V | SVG | 116 × 117 | Yes | Both waypoint markers. Composite: outer Vector + masked Group + rotated inner Vector (−22.65°). Export **flattened** to preserve the mask. |

### C. Personalization Diagram

| # | Asset | Location | Type | R/V | Format | Resolution | Transparency | Frontend use |
|---|---|---|---|---|---|---|---|---|
| C1 | `ChatGPT Image ... 05_04_42 PM 1` | `129:2347` | Photo | R | WebP + JPEG | 896 × 900 (2×) | No | Aerial crossroads. Focal point: **dead center** — the child. Crop must stay centered; squircle mask. |
| C2 | Ring node ×4 | `125:2312` etc. | Icon | V | SVG | 24.057² | Yes | Axis terminators |
| C3 | Dashed connectors | `125:2311` etc. | Graphic | V | SVG or CSS | variable | Yes | 2 horizontal + 2 vertical. CSS dashed borders are acceptable. |

### D. Library / Books

| # | Asset | Location | Type | R/V | Format | Resolution | Transparency | Frontend use |
|---|---|---|---|---|---|---|---|---|
| D1 | `31884421_book_mockup_31 1` | Slide 01 | Book render | R | **PNG** | 1000 × 1446 (2×) | **Yes** | "The Discipline of Attention" — 3D mockup with soft shadow |
| D2 | `31884421_book_mockup_30 2` | Slide 02 | Book render | R | PNG | 1000 × 1446 | **Yes** | "The Work That Matters" |
| D3 | `31884421_book_mockup_29 1` | Slide 03 | Book render | R | PNG | 1000 × 1446 | **Yes** | "The Ladder Within" |
| D4 | `book-beyond-first-flight-CSB259cE 2` | Slide 04 | Book render | R | PNG | 1000 × 1576 | **Yes** | Off-canvas at 1920 — reachable by carousel |
| D5 | `book-code-courage-clarity-I4Po2keT 2` | Slide 05 | Book render | R | PNG | 1000 × 1574 | **Yes** | Off-canvas at 1920 |
| D6 | Mountain range silhouette | `111:2096` (12 vectors) | Graphic | V | **SVG, single flattened file** | 3451 × 1481 | Yes | Decorative backdrop, bleeds past the frame both sides |
| D7 | Gradient fade | `111:2109` | Graphic | V | CSS gradient | 1920 × 341.47 | Yes | Bottom fade — implement in CSS, not as an asset |

### E. River Journey

| # | Asset | Location | Type | R/V | Format | Resolution | Transparency | Frontend use |
|---|---|---|---|---|---|---|---|---|
| E1 | `image 4` — river with rower | `111:1899` | Illustration | R | **PNG** | 872 × 1462 (2×) | **Yes** | Central vertical river. The blue must sit on the sand background, so alpha is required. |
| E2 | Mountain panorama strip | `111:1844`, `111:1857`, `111:1872`, `111:1885` | Graphic | V | **SVG, one tile** | 1173.93 × 504.97 per tile | Yes | Four instances of one tile — export once, repeat horizontally |
| E3 | Panorama gradient fades | `111:1870`, `111:1898` | Graphic | V | CSS gradient | 1379.54 / 1222.88 × 116.08 | Yes | CSS, not an asset |
| E4 | Ring node ×5 | `111:1905` etc. | Icon | V | SVG | 24.057² | Yes | Journey stops (reuse A/C ring) |
| E5 | Dashed connectors ×5 | `111:1904` etc. | Graphic | V | CSS | 471.58–694.86 wide | Yes | Left/right leader lines |

### F. Philosophy

| # | Asset | Location | Type | R/V | Format | Resolution | Transparency | Frontend use |
|---|---|---|---|---|---|---|---|---|
| F1 | `7edc587b-...-5f6185bc9ec0 1` | `108:786` | Artwork | R | **PNG** | 791 × 791 (2×) | **Yes** | Gurmukhi gold calligraphy on `#373737`. Alpha required. |

### G. Feature Icons

| # | Asset | Location | Type | R/V | Format | Resolution | Transparency | Frontend use |
|---|---|---|---|---|---|---|---|---|
| G1 | Adaptive Literature icon | `117:939` | Icon | V | **SVG** | 93.333² | Yes | Overlapping squares. 3 sub-groups — export flattened. |
| G2 | Playable Decision Points icon | `117:958` | Icon | V | SVG | 93.333² | Yes | Interlocking circles |
| G3 | Moments That Matter icon | `117:977` | Icon | V | SVG | 93.333² | Yes | Nested diamonds |
| G4 | Reflective Calibration icon | `117:996` | Icon | V | SVG | 93.333² | Yes | Circle with orbit dot |

### H. Iceberg

| # | Asset | Location | Type | R/V | Format | Resolution | Transparency | Frontend use |
|---|---|---|---|---|---|---|---|---|
| H1 | `ChatGPT Image ... 05_51_18 PM 1` | `146:2538` | Render | R | **PNG** | 1290 × 1548 (2×) | **Yes** | The hero graphic of the section. Must sit on sand — alpha required. Waterline at ~31% height is the anchor for marker placement and for any scroll reveal. |
| H2 | Green ring marker ×4 | `146:2539` etc. | Icon | V | SVG | 24.057² | Yes | Above-water labels |
| H3 | Red ring marker ×7 | `146:2558` etc. | Icon | V | SVG | 24.057² | Yes | Below-water labels |
| H4 | `image 13` / `image 14` grid texture | `146:2612`, `146:2614` | Texture | R | PNG or CSS | 903 × 1139 | **Yes** | Near-invisible faint grid behind the iceberg. **Optional** — reproducible as a CSS repeating-linear-gradient. Confirm intent with design. |

### I. Seminar & Founder

| # | Asset | Location | Type | R/V | Format | Resolution | Transparency | Frontend use |
|---|---|---|---|---|---|---|---|---|
| I1 | `image 9` — founder seated | `137:2358` | Photo | R | WebP + JPEG | 787 × 1272 (2×) | No | Tall left tile, radius ~16. Focal point: subject's face, upper third. |
| I2 | `image 8` — audience | `137:2357` | Photo | R | WebP + JPEG | 712 × 530 | No | Top-right tile. Focal point: center of crowd. |
| I3 | `image 10` — group on stage | `137:2359` | Photo | R | WebP + JPEG | 712 × 722 | No | Bottom-right tile. Focal point: the group, center. **Crops on the right edge in the design** — preserve that crop. |
| I4 | `l8YnPfO1KlKps6bo2S4dz5wpFKs.png` | `137:2377` | Photo | R | WebP + JPEG | 280² (2×) | No | Founder avatar, circular mask. Face centered. |

### J. App Download CTA

| # | Asset | Location | Type | R/V | Format | Resolution | Transparency | Frontend use |
|---|---|---|---|---|---|---|---|---|
| J1 | `13940 1` — dark texture | `105:1354` | Texture | R | **PNG** | 3600 × 830 (2×) | Yes | Organic swirl over `#201F1A` at **mix-blend-multiply**. Blend mode is essential. |
| J2 | `image 8` — phone (front) | `164:235` | UI mockup | R | **PNG @3×** | 775 × 1590 | **Yes** | "The Ladder Within" detail screen. Overflows the band top **and** bottom. |
| J3 | `image 6` — phone (back) | `164:236` | UI mockup | R | **PNG @3×** | 777 × 1590 | **Yes** | Home screen ("Good afternoon, Osheen"). Sits behind and lower-left. |

### K. Newsletter & Footer

| # | Asset | Location | Type | R/V | Format | Resolution | Transparency | Frontend use |
|---|---|---|---|---|---|---|---|---|
| K1 | Glow ellipse (large) | `167:1141` | Atmosphere | V | SVG or CSS radial | 1909.65 × 900 | Yes | Behind newsletter. CSS radial-gradient is acceptable if the falloff matches. |
| K2 | Glow ellipse (small) | `167:1166` | Atmosphere | V | SVG or CSS radial | 830 × 391.17 | Yes | Inner glow |

### Asset totals

- **Photographs:** 6 (B1, C1, I1–I4)
- **Product/book renders:** 5 (D1–D5)
- **App UI mockups:** 2 (J2, J3)
- **Custom artwork:** 3 (F1 calligraphy, H1 iceberg, E1 river)
- **Vector graphics:** 8 (B2–B6, D6, E2, K1–K2)
- **Icons:** 17 (A3–A13, G1–G4, plus ring markers)
- **Textures:** 2 (J1, H4)
- **Logo:** 1 mark (+1 mask)

**≈ 44 discrete assets.**

---

## MANDATORY ASSET FIDELITY RULE — ACKNOWLEDGED

Every asset above is exported from this Figma file. No stock photography, no AI-generated
substitutes, no placeholders, no lookalike icon-set glyphs, and no CSS approximations of
designed artwork.

The only CSS reproductions permitted are those explicitly marked above — the two gradient fade
rectangles (D7, E3), the dot separator (A13), and optionally the glow ellipses (K1–K2) and grid
texture (H4) — because those are literally a linear gradient, a circle, a radial gradient, and a
repeating grid in Figma. Everything else ships as an exported file.

The goal is the Figma design running as a frontend, not a site inspired by it.

---

## RESPONSIVE STRATEGY

Base: 1920px design → 1600px content. Scale by **container**, not by page zoom.

| Breakpoint | Container | Gutter | Base font |
|---|---|---|---|
| Desktop XL ≥ 1600 | 1600 | 160 | 16 |
| Desktop 1440–1599 | 1200 | 80 | 16 |
| Laptop 1024–1439 | 960 | 48 | 16 |
| Tablet 768–1023 | 704 | 32 | 16 |
| Mobile < 768 | fluid | 20 | 16 |

### Type scale by breakpoint

| Role | 1920 | 1440 | 1024 | 768 | <768 |
|---|---|---|---|---|---|
| Hero H1 | 120 | 96 | 72 | 56 | 40 |
| Newsletter H2 | 90 | 72 | 56 | 44 | 32 |
| Iceberg H2 | 60 | 52 | 44 | 36 | 30 |
| Section H2 | 50 | 44 | 38 | 32 | 27 |
| CTA H2 (large line) | 70 | 58 | 48 | 38 | 30 |
| Card title | 30 | 28 | 26 | 24 | 22 |
| FAQ question | 24 | 22 | 20 | 18 | 17 |
| Body | 16 | 16 | 16 | 16 | 15 |
| Hero body | 18 | 18 | 17 | 16 | 16 |
| Eyebrow | 16 | 15 | 14 | 13 | 12 |

Section padding: 120 → 100 → 80 → 64 → 48.

### Per-section behaviour

**Header** — Unchanged to 1024 (nav gap 60 → 32). At <1024, collapse links into a drawer; keep
logo left and Install App right. Below 768 the Install App pill becomes icon + short label.

**Hero** — The composition survives everywhere; only the framing changes.
- ≥1440: as designed.
- 1024–1439: photo `object-position: 30% center` to hold the ridge; the "TARGET IDENTITY"
  waypoint moves inward to stay on-canvas.
- 768–1023: heading wraps to 3 lines; the golden path scales with the photo; both waypoints
  shift toward center.
- <768: **restructure, do not shrink.** Photo becomes a 100vw × 70vh crop focused on the figure
  and the ridge (`object-position: 35% 45%`). Copy sits below the visual on a solid `#000`
  extension. Waypoints reduce to two stacked labels with the compass icon at 64px. The golden
  path becomes a short vertical S connecting them rather than the wide desktop curve.

**Statement band** — Only measure and size change. Keep centered at all sizes.

**Personalization diagram** — Radial to 1024. At 768 the left/right labels move above/below,
giving a vertical 4-stack. At <768 it becomes: photo (squircle, full width) followed by a 2 × 2
label grid; drop the connector lines, keep the ring markers as inline bullets.

**Dark banner** — Horizontal padding 227 → fluid. Text wraps to 2 lines at 1024, 3 at 768.
Radius 30 → 20 on mobile.

**Book carousel** — 3 slides visible → 2 at 1024 → 1.2 at 768 (peek indicates swipe) → 1.1 at
<768. Becomes touch-draggable below 1024; the "Explore" hover pill becomes always-visible below
the cover. Numerals 48 → 32.

**River journey** — The hardest section.
- ≥1280: as designed, nodes alternating left/right.
- 1024–1279: shorten leader lines, pull labels inward.
- 768–1023: river stays centered; **all five labels move to the right side**, connector lines
  shorten to ~60px.
- <768: river narrows to ~140px and hugs the left edge; nodes become a **single left-aligned
  vertical timeline** with the river as its spine. Labels sit to the right of each node with a
  20px connector. The mountain panorama crops to its center third.

**Philosophy** — Two columns → stacked at 1024, art card first. Art card padding 60 → 40 → 28;
calligraphy 395 → fluid square capped at 320. Quote pill wraps to 3 lines on mobile.

**Feature grid** — 4 → 2 × 2 at 1024 → 1 column at 768. Card padding 41 → 32 → 24; icon 93.33 →
72 → 64.

**Iceberg** — Two columns to 1024, then stacked with copy first, iceberg second.
- The iceberg must **not** shrink below ~340px wide or the markers collide.
- 768–1023: iceberg 480px wide, markers keep their radial positions with labels at 14px.
- <768: iceberg centered at ~300px; **markers detach from the graphic** and become two labeled
  lists below it — a green "What you see" group of 4 and a red "What shapes you" group of 7.
  This preserves the meaning without an unreadable pile of overlapping labels.

**Seminar** — Mosaic + copy side by side to 1024. At 768 the mosaic becomes a full-width 3-tile
row (tall tile left, two stacked right at reduced height). At <768: tall portrait full width,
then the two smaller photos side by side beneath it. Copy follows.

**Founder message** — Avatar + name column moves above the quote at 768. Quote mark shrinks
70 → 48 → 36.

**FAQ** — Structurally unchanged; only padding and question size shrink. Toggle icon 36 → 28.
Answer padding-left 45 → 36 → 12 on mobile so the measure stays readable.

**App download CTA** — The overflowing phones are the section's identity; keep the overflow.
- 1024–1439: phones scale to ~78%, still breaking both edges.
- 768–1023: single phone (front only), overlapping the **top edge only**.
- <768: phones move **above** the dark band as a centered pair with only the top overflow;
  band becomes full-width with radius 24; heading, body, badges stack centered. Badges go
  side-by-side, 2-up.

**Newsletter** — Heading 90 → 32 with 3–4 line wraps on mobile. The −76px button overlap is
kept to 768; below that the input and button stack full-width with 12px gap, both radius 200.
Glow ellipses scale with the viewport and clip.

**Footer** — 3 columns → 2 at 1024 (brand full width, Address + Connect side by side) → 1 at
768. Legal bar stacks with 16px gap, left-aligned. Wordmark 60 → 40 → 32.

### Image crop rules

- Hero: art-directed. Wide crop desktop, portrait-biased crop mobile. Use `<picture>`.
- Crossroads photo: **always center-cropped** — the composition is symmetric.
- Seminar mosaic: fixed aspect boxes with `object-fit: cover` and per-image `object-position`
  set from the focal points in the audit.
- Book renders and phone mockups: `object-fit: contain`, never cropped.
- Iceberg, river, calligraphy: `contain`, never cropped — cropping destroys the metaphor.

---

## MOTION STRATEGY

Motion serves the journey metaphor: fog lifting, a path drawing itself, depth beneath a surface.
Everything below respects `prefers-reduced-motion`.

### Scroll reveal — the default

- Standard: `opacity 0→1`, `translateY 24px→0`, 600ms, `cubic-bezier(0.22, 1, 0.36, 1)`,
  trigger at 15% viewport entry, **once**.
- Stagger 80ms for grids (feature cards, iceberg markers, journey nodes, mosaic tiles).
- Section headers reveal 100ms ahead of their body.

### Parallax — sparing, four places only

| Element | Rate | Rationale |
|---|---|---|
| Hero photo | 0.15 | Depth behind the fixed copy |
| Hero fog layers | 0.35 / 0.28 | Fog drifts faster than the mountain |
| Library mountain silhouette | 0.10 | Distant horizon |
| Journey mountain panorama | 0.08 | Same horizon logic |

Never parallax text, cards, or the iceberg.

### Layered depth

- **Hero (page load):** black → photo fades to 0.30 (1200ms) → horizon glow (600ms, +200ms) →
  fog layers drift in (900ms, +400ms) → **golden path draws** via `stroke-dashoffset`
  (1400ms, +700ms) → "YOU ARE HERE" marker (+1800ms) → "TARGET IDENTITY" (+2100ms) → heading
  and copy (+400ms, ahead of the path). Total ≈ 2.6s, skippable on scroll.
- **Fog idle:** the two fog ellipses drift ±12px horizontally over 20s, alternating, infinite.
  This is the only always-on animation on the page.

### Sticky scroll — one section

**The river journey.** Pin the section for ~200vh. As progress advances:
1. The river's stroke/gradient reveals top-to-bottom.
2. Each of the five nodes activates in turn — ring scales 1 → 1.15 → 1, its connector line draws,
   the label fades up, and previously passed nodes hold at 60% opacity.
3. The boat translates down the river path.

Below 1024, drop the pin and fall back to per-node scroll reveal along the vertical timeline.

### Hover interactions

| Element | Behaviour |
|---|---|
| Nav link | Color `#B9C0CB` → `#FFFFFF`, 200ms; 1px underline wipes in from left |
| Primary button | Brightness 1.06, `translateY(-2px)`, shadow `0 8px 24px rgba(255,172,102,0.28)`, 200ms |
| Install App pill | Gradient position shifts 0% → 100%, 400ms |
| Book slide | Cover `scale(1.03)` + **"Explore" pill rises from `bottom:-100px` to `bottom:40px`**, 350ms — this state exists in the Figma component and must be built |
| Feature card | Border `#D2C1AC` → `#B5502C`, `translateY(-4px)`, icon strokes to `#B5502C`, 250ms |
| Iceberg marker | Ring scales 1.2, label weight → 600, 180ms |
| Journey node | Ring scales 1.2, connector brightens |
| FAQ row | Background `rgba(181,80,44,0.03)`, 200ms |
| App badge | `scale(1.04)`, 200ms |
| Footer link | Underline thickens 1 → 2px |

### Micro-interactions

- **FAQ accordion:** height 300ms `ease-out`; icon morphs plus → minus by rotating the vertical
  bar 90° and fading it, 250ms. Single-open — the previous item closes in parallel.
- **Carousel:** 500ms `cubic-bezier(0.22,1,0.36,1)` slide; numerals cross-fade; drag has
  rubber-band resistance at the ends.
- **Email input:** focus ring `2px #FFAC66` at 40% alpha, 150ms; Subscribe presses to
  `scale(0.97)`; success swaps the label to a check with a 400ms fade.
- **Personalization diagram:** on entry, the four connector lines draw outward from center
  (400ms, 100ms stagger) and the labels fade in behind them.
- **Header:** past 100px scroll, background becomes `rgba(10,9,9,0.85)` with
  `backdrop-filter: blur(12px)`, height 102 → 76, 300ms. Not in Figma — propose to design.

### Explicitly no motion

Philosophy section (reveal only), footer, statement band, dark banner, founder message body.
The page has enough movement; these sections are its rests.

---

## IMPLEMENTATION SUMMARY

**What this is:** a 10,493px single-page narrative built on a 1920/1600 grid, running a
Cormorant + Poppins + Inter type system against a warm sand palette with terracotta and orange
accents. The page opens in near-black cinematic space, moves into warm light for the body, and
returns to dark for the conversion moment.

**Fifteen sections** in confirmed order: Header · Hero · Statement · Personalization Diagram ·
Dark Banner · Book Carousel · River Journey · Philosophy · Feature Grid · Iceberg · Seminar ·
Founder · FAQ · App CTA · Newsletter · Footer.

**Technically demanding areas, ranked:**
1. Hero layer stack — 6 layers, staged entrance, path draw, fog drift
2. River journey — sticky pin with 5 sequenced nodes
3. App CTA — phone mockups overflowing the band on two edges
4. Iceberg — 11 positioned markers that must survive to mobile
5. Book carousel — 5 slides, off-canvas reach, hover state from a component
6. Newsletter — negative-margin button overlap

**Issues to resolve with design before Phase 02:**

| # | Issue | Location |
|---|---|---|
| 1 | FAQ answers are **Lorem ipsum** — real copy needed | `163:45` |
| 2 | Sections 7 and 9 share an identical eyebrow + heading | `111:1900` / `117:934` |
| 3 | Feature card 2 body is 14px/24px; cards 1, 3, 4 are 16px/26px | `117:969` |
| 4 | Footer "Address" head is Inter Light; "Connect" head is Poppins Light | `167:1178` / `167:1184` |
| 5 | Footer address is placeholder ("The Castle, Port Douglas, Queensland") | `167:1180–1182` |
| 6 | Logo mark is a raster PNG + PNG mask — vector original needed | `105:1132` |
| 7 | No scrolled-header, focus, or error states in the file | — |
| 8 | Slider "Explore" pill label is `#F5EFE3` on a `#F4EEE2` fill — invisible | `I108:676;47:815;7:598` |
| 9 | `image 13` / `image 14` grid textures are near-invisible — confirm intent | `146:2612/2614` |
| 10 | Feature card "View details" links are hidden — confirm they stay out | `117:951` etc. |

---

## ASSET EXPORT CHECKLIST

### SVG — export as vector, flatten composites

- [ ] Logo mark (request vector original) — A1
- [ ] Install-app glyph — A3
- [ ] Apple logo — A4
- [ ] Google Play icon — A5
- [ ] App Store badge, large — A6
- [ ] Google Play badge, large — A7
- [ ] FAQ plus icon + minus icon — A8, A9
- [ ] Check-circle — A10
- [ ] Quote glyph — A11
- [ ] Founder quote mark — A12
- [ ] Hero golden path — B2
- [ ] Hero fog layer ×2 — B3, B4
- [ ] Hero horizon glow — B5
- [ ] Waypoint compass (flattened) — B6
- [ ] Ring marker: default / green / red — C2, H2, H3
- [ ] Library mountain silhouette (flattened) — D6
- [ ] Journey mountain tile (one tile only) — E2
- [ ] Feature icons ×4 (flattened) — G1–G4

### PNG with alpha — @2× unless noted

- [ ] Book renders ×5 — D1–D5
- [ ] River with rower — E1
- [ ] Gurmukhi calligraphy — F1
- [ ] Iceberg — H1
- [ ] CTA dark texture — J1
- [ ] Phone mockup, front — J2 **@3×**
- [ ] Phone mockup, back — J3 **@3×**
- [ ] Logo mask (until vector arrives) — A2
- [ ] Grid texture ×2 *(optional)* — H4

### WebP + JPEG fallback — @2×, with art-directed variants

- [ ] Hero mountain valley — B1 *(desktop wide + mobile portrait crop)*
- [ ] Aerial crossroads — C1
- [ ] Founder seated — I1
- [ ] Audience — I2
- [ ] Group on stage — I3
- [ ] Founder avatar — I4

### Fonts

- [ ] Cormorant — 500, 600, 700 (Latin, woff2)
- [ ] Poppins — 300, 400, 500, 600, 700 (Latin, woff2)
- [ ] Inter — 300, 400, 600 (Latin, woff2)
- [ ] Self-host all three; `font-display: swap`; preload Cormorant 500 and Poppins 400

### Build

- [ ] All raster assets through an optimizer
- [ ] LQIP or blur placeholder for the 6 photographs
- [ ] SVG sprite or per-icon React components for the 17 icons
- [ ] `srcset` on every photograph
- [ ] Lazy-load everything below the hero; eager-load B1

---

## COMPONENT ARCHITECTURE

```
<RaahiLandingPage>
├── <Header/>                    111:2094   sticky, transparent → blurred
├── <main>
│   ├── <Hero/>                  111:2046 + 117:1247
│   │   ├── <HeroBackdrop/>      photo · scrim · glow · fog ×2
│   │   ├── <HeroPath/>          animated SVG
│   │   ├── <HeroWaypoint/> ×2   116:2229 · 116:2230
│   │   └── <HeroCopy/>          h1 · body · <Button variant="primary-sm"/>
│   ├── <StatementBand/>         117:813
│   ├── <SignalDiagram/>         129:2353
│   │   ├── <SignalPhoto/>
│   │   └── <SignalLabel/> ×4
│   ├── <DarkBanner/>            116:2289
│   ├── <BookCarousel/>          111:2095
│   │   ├── <SectionHeading/>
│   │   ├── <AppStoreBadge/> ×2
│   │   ├── <MountainBackdrop variant="library"/>
│   │   └── <BookSlide/> ×5      numeral · cover · hover "Explore"
│   ├── <RiverJourney/>          111:1841   sticky stage ≥1024
│   │   ├── <MountainBackdrop variant="panorama"/>
│   │   ├── <SectionHeading/>
│   │   ├── <RiverGraphic/>
│   │   └── <JourneyNode/> ×5    marker · connector · label
│   ├── <PhilosophySection/>     108:783
│   │   ├── <ArtCard/>           title · calligraphy · <QuotePill/>
│   │   └── <PhilosophyCopy/>    heading · 3 paragraphs · 2 checks · button
│   ├── <FeatureGrid/>           117:1079
│   │   └── <FeatureCard/> ×4
│   ├── <IcebergSection/>        146:2583 + 146:2582
│   │   ├── <IcebergCopy/>
│   │   └── <IcebergGraphic/>
│   │       └── <IcebergMarker/> ×11  (4 above · 7 below)
│   ├── <SeminarSection/>        137:2400
│   │   ├── <PhotoMosaic/>       3 tiles
│   │   └── <SeminarCopy/>       meta row · heading · body · button
│   ├── <FounderMessage/>        137:2372
│   ├── <FaqAccordion/>          165:239
│   │   └── <FaqItem/> ×5        badge · question · toggle · answer
│   ├── <AppDownloadCta/>        105:1352
│   │   ├── <CtaBand/>           #201F1A + multiply texture
│   │   ├── <PhoneMockups/>      overflow top + bottom
│   │   └── <CtaCopy/>           heading · body · <AppStoreBadge/> ×2
│   └── <NewsletterCta/>         167:1202
│       ├── <GlowBackdrop/>
│       └── <SubscribeForm/>     overlapping input + button
└── <Footer/>                    167:1167
    ├── <FooterBrand/>
    ├── <FooterColumn/> ×2       Address · Connect
    └── <FooterLegal/>
```

**Shared primitives:** `Button` · `SectionLabel` · `SectionHeading` · `AppStoreBadge` ·
`NodeMarker` · `ConnectorLine` · `Logo` · `Container` · `Section` · `Reveal` · `Parallax` ·
`StickyStage`

**Data:** all copy in `content/raahi.ts`; all design values in `styles/tokens.css` as CSS custom
properties mirroring section 03.
