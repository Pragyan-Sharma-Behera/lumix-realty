# Kat Beaton | Dacha Real Estate

A concept site for a real agent (Kat Beaton) at a real agency (Dacha Real Estate), Dubai and Ras Al Khaimah. **Not yet live-ready** — see "What's still placeholder" below before showing this to anyone as finished.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

Vite + React 18 + Tailwind v4. No backend.

## What works

- **Filterable listings** — type, stage (Ready/Off-plan), location, bedrooms and a max-price slider compose together, plus sorting. Prices show AED with an approximate USD conversion. The result count is announced to screen readers, and the empty state names the real price range and offers a one-tap reset.
- **Property detail** — modal with a gallery, specs and inclusions. Focus-trapped, Escape to close, focus returned to the trigger.
- **Consultation form** — real validation (required fields, email format, phone length, consent), inline errors tied to inputs via `aria-describedby`, focus moved to the first problem, plus sending / success / error states. Submission is simulated; nothing is transmitted.
- **Nav, scroll, motion** — sticky nav that frosts on scroll, smooth anchor scrolling, mobile menu, staggered scroll reveals.

## Read these first

- **`PRODUCT.md`** — who this is for and why; the design principles and anti-references.
- **`DESIGN.md`** — the visual system: tokens, type, motion, the hero's non-obvious constraints, and section 9 ("Data Honesty") specifically.

## What's still placeholder

This was rebuilt from an earlier fully-fictional demo, and several things are bracketed placeholders rather than real data, on purpose — search the codebase for `[` to find all of them:

- Years licensed, client count, and Kat's RERA/BRN license number
- All 8 property listings (real locations, invented units/prices/features)
- Testimonial quotes (Kat's IG "Reviews" highlight has the real ones)
- Office address and email domain
- Hero and listing photography (currently Mediterranean villas, not Dubai/RAK — a deliberate placeholder, not an oversight)

None of this was invented and presented as fact. See `DESIGN.md` §9 for the full reasoning.

## Two things worth knowing

- **The scroll reveals have a 1.5s failsafe** (`src/hooks/useReveal.js`). Content renders visible by default and only opts into the hidden state once JS confirms motion is allowed. Without this, a reveal that never fires — headless renderers, prerenderers, background tabs, print — ships whole sections blank. This happened; the failsafe is the fix, not a precaution.
- **The hero is sized against viewport height as well as width.** Change the wordmark's `clamp()` without keeping its `vh` term and the hero's own CTA drops below the fold on short screens.
