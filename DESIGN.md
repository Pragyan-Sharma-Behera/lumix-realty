# Design System: Kat | Dacha Real Estate

## 1. Visual Theme & Atmosphere

**The hero is dusk; the page below it is daylight.** The hero follows the Sander House reference: one full-bleed villa at dusk, evenly shaded across its whole area, carrying an enormous light-weight grotesk wordmark, a left-hand stack (code → headline → CTA → footnote) and a single dark glass card opposite. Everything below the hero is the inverse — bright, cool, open Mediterranean daylight, with nothing hiding in shadow.

That contrast is deliberate: the hero is the poster, the page is the product. The rest of the board's bones carry through — the asymmetric composition, the floating panels, the four-step image row.

Glass is the signature material, but it is **frost on daylight, not neon on black**. Panels are frosted only where they genuinely float over photography — never a glass card on a flat background. Density: 4 (daily-app balanced). Variance: 6 (offset, asymmetric). Motion: 4 (fluid, restrained, never decorative loops).

## 2. Color Palette & Roles

Cool-tinted neutrals (chroma pulled toward the brand's own marine hue, never toward warm) plus one accent. Strategy: **Restrained** — accent occupies under 10% of surface. Explicitly not the cream/sand warm near-white AI default, and explicitly not purple-blue neon glass.

- **Daylight Canvas** (`#f2f6f8` · `oklch(0.972 0.005 230)`) — primary page background
- **Frost Surface** (`#fbfdfe` · `oklch(0.993 0.003 230)`) — card and panel fill
- **Deep Ink** (`#0e1720` · `oklch(0.2 0.022 250)`) — primary text, 16.7:1 on canvas
- **Muted Steel** (`#545d67` · `oklch(0.474 0.02 250)`) — secondary text, 6.18:1 on canvas
- **Faint Steel** (`#78818b` · `oklch(0.6 0.018 250)`) — 3.64:1, **large text and decoration only, never body**
- **Marine Accent** (`#0072ab` · `oklch(0.52 0.135 236)`) — CTAs, active filter states, focus rings. 4.85:1 on canvas, 5.15:1 against white text
- **Hairline** (`#d2d9dc` · `oklch(0.88 0.008 230)`) — 1px structural borders
- **Deep Marine** (`#133144` · `oklch(0.3 0.05 240)`) — footer, dark inversions
- **Brick Danger** (`#b02a2d` · `oklch(0.5 0.17 25)`) — form errors only. Deliberately **not** the marine accent: blue error text reads as a link or a hint, not a failure. 6.05:1 on canvas, 6.55:1 for white on it

Never pure black. No gradient text. No outer glows.

## 3. Typography Rules

Per the reference board: **Helvetica-faithful**, weight-driven hierarchy, tight tracking.

- **Hero display (`.display-thin`):** same family at **weight 300**, tracking `-0.015em`, line-height `0.82`, uppercase. This is the reference's voice and belongs to the hero only — it must not leak into section headings, which stay bold. Sized `clamp(3rem, min(15.5vw, 21vh), 13rem)`: the `vh` term is load-bearing, not decoration — on width alone the hero stack ran ~908px and pushed its own CTA and card below the fold on any short screen.
- **Display:** `"Helvetica Neue", Helvetica, Inter, Arial, sans-serif` — weights 700/900, tracking `-0.035em` (floor is `-0.04em`; letters must never touch), `text-wrap: balance`
- **Body:** same family, weight 400/500, line-height 1.6, max 68ch, Muted Steel
- **Numerals:** `font-variant-numeric: tabular-nums` on all prices, m², and specs so figures align in columns
- **Scale:** fluid `clamp()`, ratio ≥1.25 between steps. Display ceiling `7rem`
- **Banned:** serif anywhere, all-caps body copy, gradient text

## 4. Component Stylings

- **Buttons:** Pill (`999px`). Primary is solid Marine with white text; secondary is frosted glass with a hairline. `scale(0.97)` on `:active` for tactile feedback, `160ms ease-out`. No glow, ever.
- **Cards:** `16px` radius. **Never** a 1px border and a wide soft shadow together — pick one. Shadow blur caps at `8px`. No nested cards.
- **Glass panels:** `backdrop-filter: blur(20px) saturate(1.4)`, semi-opaque white fill, single hairline. Only over imagery. Blur stays under 20px (Safari cost).
- **Inputs:** Label above, error below, Marine focus ring at `2px` offset. Placeholder must hit 4.5:1 — not default gray.
- **Loaders:** Skeletal shimmer matching real layout dimensions. No circular spinners.
- **Empty state:** When filters match nothing, a composed panel naming the active filters with a one-tap reset — not "No results".

## 5. Layout Principles

Fluid `clamp()` spacing that breathes at large viewports; varied rhythm, not uniform stacks. Asymmetric hero (type left-weighted, glass panels bottom-right) per the reference. Max-width `1400px` centered. Grid for 2D, flex for 1D — no `calc()` percentage math. Listings use `repeat(auto-fit, minmax(300px, 1fr))` for breakpoint-free reflow. Full-height uses `100dvh`, never `100vh` (iOS Safari). Single-column collapse below `768px`; horizontal overflow at any width is a defect. Semantic z-index scale: dropdown → sticky → backdrop → modal → toast.

## 6. Motion & Interaction

- Curve: `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`. Never `ease-in` on UI. No bounce, no elastic.
- Durations: press `160ms`, tooltips/chips `180ms`, modal `240ms`. UI stays under `300ms`.
- Animate `transform` and `opacity` only. Never `top`/`left`/`width`/`height`.
- Entrances start at `scale(0.96)` + `opacity: 0` — **never** `scale(0)`.
- Reveals **enhance an already-visible default**: content renders visible without JS, and only opts into the hidden-then-revealed state once JS confirms motion is allowed. A headless or reduced-motion render must never ship blank.
- Stagger 40–60ms within a single list. No uniform whole-page fade reflex.
- `prefers-reduced-motion: reduce` → crossfade or instant, no movement. Non-optional.
- Hover effects gated behind `@media (hover: hover) and (pointer: fine)`.

## 7. Anti-Patterns (Banned)

No emojis. No pure black. No neon or outer-glow shadows. No gradient text. No glassmorphism on flat backgrounds (glass requires something behind it). No side-stripe borders. No border + wide-shadow "ghost card". No radius above 20px on cards. No tiny uppercase tracked eyebrow above every section — one deliberate kicker system only. No numbered `01/02/03` section scaffolding unless the section genuinely is a sequence. No hero-metric template. No identical card grids. No `LABEL // YEAR` formatting. No AI copywriting ("Elevate", "Seamless", "Unleash", "Next-Gen", "Bespoke Living"). No generic placeholder names. No hand-drawn SVG illustration. No `repeating-linear-gradient` stripes. No text overflowing its container at any breakpoint.

**Category anti-references:** not Zillow (utilitarian portal), not crypto/SaaS glass (purple neon), not luxury cliché (gold serif, marble, script).

## 8. The hero, specifically

Non-obvious constraints, all of them learned by measuring the render rather than reading the code:

- **The shade lives on the photo, not on an overlay alone.** `.hero-photo` carries `filter: brightness(0.78) saturate(0.95)`, and three gradients layer on top (sky, side, bottom). An overlay by itself left the villa untouched wherever anything repainted above it — the darkening has to live on the image itself.
- **White type needs the shade to exist at all.** The villa is white render and the driveway is pale; unshaded, the wordmark measured near 1.4–2.2:1 and the subhead over the garage door fell to 2.3:1. With the dim in place: wordmark 7.84:1, subhead 16.49:1, footnote 12.27:1, card body 14.61:1. Re-measure after any change to the dim — do not eyeball it.
- **Two rejected alternatives, for the record.** Ink-colored text without the dim fails wherever it crosses the villa's dark glass and roofline (the garage door measured 2.26:1). White text with only a text-shadow halo (no dim) fails wherever it crosses the pale sky (wordmark 2.18:1). Both were tried and measured; the whole-hero dim is the one that clears WCAG everywhere the text appears, top to bottom.
- **Verify contrast against the composited render, not the computed colour string.** Sample the real backdrop, then composite the text's actual alpha over it in-page — Chrome reports `white/85%` as `oklab(...)`, so parsing the string directly gives wrong numbers.
- **The image is `<picture>` + WebP.** The source PNG was 1.86MB for the LCP element; WebP is 111KB full-width / 50KB mobile, with a JPEG fallback, preloaded in `index.html`. Re-export if the photo is replaced.

## 9. Data Honesty

This project changed category partway through: it started as a fictional Spanish developer, then was rebranded for a real person (Kat) and a real agency (Dacha Real Estate). That change matters more than it sounds — fabricating a number for a made-up developer is harmless texture; fabricating the same kind of number under a real name is misrepresentation. The rules below are what changed as a result.

- **No invented figure is attributed to Kat or Dacha.** Anywhere the old developer version had a specific number carrying no real source (years on market, properties sold, client count, license number), this version has a literal bracketed placeholder — `[Years licensed]`, `[X]+`, `[Add Kat's BRN / license number here]` — instead of a plausible-looking substitute. Search the codebase for `[` to find every open item before this goes live.
- **Two things are real, not fabricated, and are stated as such:** the AED–USD conversion uses the dirham's actual fixed peg (3.6725 AED = 1 USD), and the escrow/RERA/DLD regulatory language describes Dubai's actual off-plan framework in general terms — not a claim about a specific project or license.
- **The 8 listings are structurally real but substantively placeholder.** Locations (Palm Jumeirah, Dubai Marina, Downtown Dubai, Business Bay, Dubai Hills Estate, JVC, Al Marjan Island, Mina Al Arab) are real Dubai/RAK districts; the specific units, prices, and features attached to them are invented and must be replaced with Kat's actual inventory before publishing anywhere real.
- **Testimonials are placeholder quotes**, not real client feedback — Kat's IG "Reviews" highlight has the real ones; nobody fetched them for this build (no browser/Instagram access in-session).
- **Photography is a known, deliberate mismatch.** The stock photos are Mediterranean villas carried over from the original draft — nobody has yet sourced Dubai/RAK-appropriate imagery. Alt text describes what the photo actually shows (a white villa, a hillside pool) rather than pretending it's a Dubai property, so accessibility text stays honest even while the pairing is wrong. Replace before shipping.
