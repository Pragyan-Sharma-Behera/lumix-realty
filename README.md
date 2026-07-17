# LUMIX Realty

A functional demo site for a fictional Spanish coastal property developer.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

Vite + React 18 + Tailwind v4. No backend.

## What works

- **Filterable listings** — type, stage, location, bedrooms and a max-price slider compose together, plus sorting. The result count is announced to screen readers, and the empty state names the real price range and offers a one-tap reset.
- **Property detail** — modal with a gallery, specs and inclusions. Focus-trapped, Escape to close, focus returned to the trigger.
- **Consultation form** — real validation (required fields, email format, phone length, consent), inline errors tied to inputs via `aria-describedby`, focus moved to the first problem, plus sending / success / error states. Submission is simulated; nothing is transmitted.
- **Nav, scroll, motion** — sticky nav that frosts on scroll, smooth anchor scrolling, mobile menu, staggered scroll reveals.

## Read these first

- **`PRODUCT.md`** — who this is for and why; the design principles and anti-references.
- **`DESIGN.md`** — the visual system: tokens, type, motion, and the hero's non-obvious constraints.

## All content is fictional

No real company, property, price or person is represented. Listings, prices and figures are invented demo content; the headline statistics come from the reference board this was designed against. Photography is Unsplash, plus the hero render supplied in `public/`.

## Two things worth knowing

- **The scroll reveals have a 1.5s failsafe** (`src/hooks/useReveal.js`). Content renders visible by default and only opts into the hidden state once JS confirms motion is allowed. Without this, a reveal that never fires — headless renderers, prerenderers, background tabs, print — ships whole sections blank. This happened; the failsafe is the fix, not a precaution.
- **The hero is sized against viewport height as well as width.** Change the wordmark's `clamp()` without keeping its `vh` term and the hero's own CTA drops below the fold on short screens.
