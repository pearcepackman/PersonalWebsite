# Frontend Standards

Single source of truth for how this site is styled. When adding or changing UI, match these patterns instead of inventing new ones inline. The locked visual reference is `design-reference.html` (gitignored scratch file, repo root) — match it exactly for anything not covered here.

## Stack
- React + Vite, entry point `index.html` (root) → `src/index.jsx` → `src/App.jsx`
- **Tailwind CSS v4**, configured CSS-first via `@theme` in `src/index.css` (no `tailwind.config.js` — v4's `@tailwindcss/vite` plugin scans source files directly). Style with Tailwind utility classes in JSX; avoid writing new bespoke CSS files per component.
- Framer Motion for scroll reveals (`src/components/ui/Reveal.jsx`)
- `@emailjs/browser` for the contact form
- `src/App.jsx` is a thin composition root; each section lives in its own file under `src/components/`, shared primitives under `src/components/ui/`
- **`vite-prerender-plugin` prerenders `App` to static HTML at build time** (`src/prerender.jsx`, wired in `vite.config.js`) — see the SSR-safety gotcha below, this is not optional context for any new component.

### ⚠️ SSR-safety gotcha (App now genuinely runs in Node)
`src/prerender.jsx` calls `renderToString(<App />)` in a plain Node process at `vite build` time — there is no `window`, `document`, `localStorage`, or any browser API available while that runs. Any new component (or anything it imports) that touches a browser API **outside a `useEffect`/event handler** (i.e. during render, or at module top-level on import) will crash the production build, not just misbehave.
- Guard any top-level/import-time browser API access: `if (typeof window !== "undefined") { ... }` — see `Contact.jsx`'s `emailjs.init()` call for the pattern. `useTheme.js`'s state initializer is the same idea, already handled.
- DOM measurement/mutation (`document.querySelector`, `addEventListener`, etc.) is safe as long as it's inside `useEffect` — effects never run during `renderToString`, only the render/return itself does. `ScrollbarTicks.jsx` and `BackgroundGradient.jsx` are both examples of components that touch `document`/`window` freely, but only inside effects.
- **`react-helmet-async` was removed for this reason** — it doesn't have a real `document.head` to portal into during SSR and was silently rendering `<title>`/`<meta>` tags inline into the page body instead, duplicating (and slightly conflicting with) the real ones. `index.html`'s static `<title>`/meta tags are the single source of truth now — don't reintroduce a client-side head-tag library without checking it's SSR-safe first.
- If a new component ever needs to render differently in prerender vs. the browser (rare), check `typeof window !== "undefined"` at render time rather than reaching for a "am I on the server" library — this is a single-page site, not worth the dependency.

## ⚠️ Cascade-layer gotcha (already bit us once)
Tailwind v4 emits all of its utilities inside CSS cascade layers (`@layer base, components, utilities`, declared by `@import "tailwindcss"`). **Any CSS written outside an explicit `@layer` block is unlayered — and unlayered CSS always wins over layered CSS, regardless of specificity.** A single unlayered `* { margin: 0; padding: 0; }` reset silently zeroed out every `mx-*`/`px-*`/`py-*`/`mb-*` utility site-wide before this was caught.
- Preflight (part of `@import "tailwindcss"`) already resets margin/padding/box-sizing — don't re-add your own reset.
- Any base-element CSS you do add (`html`, `body`, `a`, `:focus-visible`, etc.) **must** go inside `@layer base { ... }` in `src/index.css` so it stays overridable by utility classes.
- `:root` custom-property declarations (theme tokens) are fine unlayered — they only set variables, not box-model properties, so they don't fight the cascade.

## Color palette — "Garage" (Porsche Type-7-inspired: warm, restrained, precise)
Two modes, both driven by CSS custom properties in `src/index.css`, toggled via `data-theme` on `<html>` (persisted in `localStorage`, default `dark`):

**Dark ("garage", default):** `--bg:#1a1c18` `--bg-2:#20221d` `--text:#e7e3d8` `--text-2:#a8a394` `--muted:#6d6a5d` `--line:#2f322b` `--line-2:#3d4137` `--accent:#a3b06a` `--accent-2:#8a9758`

**Light ("daylight", `data-theme="light"`):** `--bg:#e8e3d7` `--bg-2:#e1dbcc` `--text:#22201a` `--text-2:#565046` `--muted:#938c7c` `--line:#cfc8b8` `--line-2:#b8b0a0` `--accent:#5b6236` `--accent-2:#464b2a`

These map onto Tailwind's theme via `@theme { --color-bg: var(--bg); ... }`, so use them as ordinary utilities: `bg-bg`, `text-text`, `text-text-2`, `border-line`, `text-accent`, etc. **One accent color only** — don't introduce a second one.

## Typography
- `font-serif` → Fraunces (headings/big statements, weight 400, italic used surgically for one emphasized word per statement, in `text-accent`)
- `font-sans` → Hanken Grotesk (body/UI, default body font, no need to declare)
- `font-mono` → Fragment Mono (eyebrows, section numbers, nav labels, tags, dateline, form labels, letter-spaced e.g. `tracking-[0.16em]`)
- Toggle with `theme(fontFamily)` keys are already wired via `@theme` in `index.css`, so `font-serif`/`font-sans`/`font-mono` work out of the box.
- **No `uppercase` text-transform anywhere** (Pearce's call, tried it and didn't like the look) — write mono labels in the case you want them displayed in (usually sentence/Title Case) rather than relying on CSS to force caps. This was walked back after the first pass of this redesign used `uppercase` on section labels, tags, and form labels — don't reintroduce it.

## Layout
- `Container` (`src/components/ui/Container.jsx`) is the standard content wrapper: `mx-auto max-w-[1140px] px-6 md:px-12`. Use it for every section — don't hand-roll width/padding.
- Section pattern: `border-t border-line py-24 md:py-[110px]` (see `Profile.jsx`/`Index.jsx`/`Projects.jsx`/`Work.jsx`/`Education.jsx`). Hero and Contact/Footer don't get the top hairline (they're the first/last visual blocks).
- `SectionHeader` (`src/components/ui/SectionHeader.jsx`) renders the mono number + label + hairline rule pattern used at the top of every numbered section. Current numbering: `01` Profile, `02` Index, `03` Projects, `04` Work, `05` Education. Contact has no number (matches the locked visual reference, which doesn't give the closing CTA a section header).
- Two-column feature layout (label/meta left, content right) via `grid grid-cols-1 md:grid-cols-[Nfr_Mfr]` — see `Profile.jsx`, `Work.jsx`, and `Education.jsx` for the exact column ratios.
- `BackgroundGradient` (`src/components/ui/BackgroundGradient.jsx`) is a `-z-10`, very low-opacity radial glow using `color-mix(in srgb, var(--glow) X%, transparent)` — it's what keeps the flat background from looking like one boring solid color. Rendered inside a `position: relative` wrapper that spans the whole page (see `App.jsx`), as `position: absolute; inset: 0` (**not** `fixed`, see the gotcha below). Two orbs, top-left near the Hero and bottom-right near Contact/Footer, both `hidden md:block` — no gradient on mobile at all, see the gotcha below for why. Keep it subtle if you touch it; it should read as atmosphere, not a visible shape.
- Restraint is the governing principle: lots of air, few elements, nothing decorative that isn't functional. When in doubt, remove rather than add.

## Motion
- `Reveal` (`src/components/ui/Reveal.jsx`) is the standard scroll-reveal wrapper: fade + 18px rise, `cubic-bezier(.19,1,.22,1)`, ~1s. Pass `delay` for stagger (0.1/0.2/0.3 pattern).
- **All scroll reveals use `viewport={{ once: false }}` (or `useInView(ref, { once: false })`)** — every reveal in this design replays each time its element re-enters the viewport, not just on first scroll-past. This is deliberate (Pearce's call) — don't switch any of these back to `once: true` without checking with him first.
- `Reveal` automatically respects `prefers-reduced-motion` via Framer's `useReducedMotion()` — reduced-motion users get the final state immediately with no animation, no extra work needed at the call site.
- `SplitChars` / `SplitWords` (`src/components/ui/`) give character- and word-level cascade reveals for big serif statements — see the Hero name (`SplitChars`) and Profile's opening statement (`SplitWords`, which also handles the one italicized accent word via a `{ text, emphasis }` part). Both respect `prefers-reduced-motion`.
- `FlipCard` (`src/components/ui/FlipCard.jsx`) is the standard photo treatment: click-to-flip 3D card (`perspective` + `rotateY` + `backface-hidden`), front is the duotone photo (grayscale + `mix-blend-mode: color` olive wash that resolves to full color on hover), back is personal-story text. Used for the three Profile tiles; reuse it for any future clickable photo rather than hand-rolling a new treatment.
- **Optimize photos before importing them** — source phone photos in this repo have been 1.7–2.9MB at 2700px+. Before adding a new one to `src/assets/`, downsize/compress it first, e.g. `magick photo.jpg -auto-orient -resize '1000x1000>' -quality 78 -strip photo.jpg` (ImageMagick is available on this machine). The three Profile photos went from ~5.5MB combined to ~540KB this way with no visible quality loss at the sizes they're actually displayed.
- Hover motion is CSS-only and cheap: nav/contact/footer links use a `::after`-style underline wipe (`right-full` → `group-hover:right-0`, `transition-[right]`); Index (skills) rows nudge via `hover:pl-[14px]` + `group-hover:text-accent`. Don't reach for Framer Motion for simple hover states — CSS transitions are the convention here.

### ⚠️ `whileInView` reliability gotcha (already bit us twice)
The declarative `whileInView` prop did **not** reliably fire in two cases during development, leaving elements permanently stuck at their `initial` state:
1. **Many small per-child observers** — `SplitChars`/`SplitWords` originally gave each individual character/word its own `whileInView` + `viewport` prop (13+ separate IntersectionObservers on tiny inline elements). Fix: use **one** `whileInView` trigger on the parent with Framer `variants` + `staggerChildren`/`delayChildren`, letting children inherit the animate state — don't give each item in a stagger group its own independent `viewport` observer.
2. **Animating `clip-path`** — an earlier photo-reveal component's shutter effect used `initial`/`whileInView` with a `clipPath` value and never triggered, even as a single normal-sized element. Fix: use the explicit `useInView(ref, { once, amount })` hook + `animate={{ clipPath: inView ? ... : ... }}` instead of the `whileInView` prop. This pattern worked reliably where `whileInView` didn't — keep it in mind if you add a new `clip-path` animation (e.g. inside `FlipCard`).

If you add a new scroll-triggered animation and it seems to just... never happen, check the actual DOM (`getComputedStyle`/inline `style` attr) to confirm whether it's stuck at `initial` before assuming it's a CSS/layout issue — reach for `useInView` + `animate` if `whileInView` is flaky for the property you're animating.

3. **Above-the-fold content on some mobile browsers** — some mobile browsers don't reliably fire an IntersectionObserver's *first* callback for a target that's already in view at the moment the observer is created, which is exactly the Hero's situation (name/eyebrow/lede are always in view on load). Symptom: the element never animates in until the user scrolls it out of view and back. Fix: `Reveal` and `SplitChars` both take an `onMount` boolean prop that swaps `whileInView` for a plain mount-triggered `animate`, bypassing the observer entirely. Only the Hero uses it — every other section keeps the default scroll-triggered/replay behavior. Reach for this only for content that's guaranteed to be in the initial viewport.

### ⚠️ iOS Safari `position: fixed` + `mix-blend-mode` gotcha
`BackgroundGradient`'s two glow orbs are `position: fixed` with `mix-blend-mode` children, `-inset-[20%]`/percentage-sized, anchored near the Hero and Contact corners. On iOS Safari, that exact combination corrupts into a flat solid-color block on scroll-direction changes (e.g. the rubber-band bounce at the top) — a real, reproducible bug, not a one-off. A few different workarounds were tried (a JS scroll-synced `transform` faking "fixed" without native fixed-position compositing; making the background `position: absolute` and span the full page height so it scrolls natively) — each fixed the iOS glitch but traded it for a different problem (JS scroll listeners can't keep up with iOS's momentum/fling scroll and visibly lag; full-page-height sizing makes percentage-based gradient sizing stretch into huge distorted ovals, and needs `vh`/`vw` units instead, which then can't track mobile browser chrome resizing the viewport as the address bar shows/hides).

None of this applies on desktop. Rather than compromise the desktop look to route around an iOS-only bug, the orbs are just `hidden md:block` — **no gradient renders on mobile at all**, only the flat themed background + grain texture. If you touch this component, keep that split: don't reintroduce vh/vw sizing or scroll-synced positioning to try to bring the gradient back to mobile — it was tried multiple ways and every version had a visible mobile-only artifact.

### ⚠️ iOS Safari `backface-visibility` gotcha (FlipCard)
Two distinct Safari-only bugs bit `FlipCard`'s 3D flip:
1. `backface-visibility: hidden` needs the `-webkit-` prefix on iOS or it's silently ignored.
2. Even prefixed, Safari breaks `backface-visibility: hidden` on an element that **also** has `overflow: hidden`/`overflow-y: auto` set directly on it — both faces end up rendered simultaneously. Fix: keep `backface-visibility` on the outer face `div` (`overflow: visible`), and move `overflow-hidden`/`overflow-y-auto` onto an inner wrapper `div` instead. Don't put overflow and backface-visibility on the same element.

Even with both fixes, iOS Safari has still been observed not fully hiding the backface during the transition (mirrored front-face text briefly visible mid-flip). `FlipCard` now also cross-fades each face's `opacity` in sync with the rotation via `transitionDelay` — the leaving face fades to 0 immediately (no delay), the entering face doesn't start fading in until partway through the rotation — timed so both faces are already near-invisible at the ~90°/edge-on midpoint of the flip, regardless of whether `backface-visibility` actually works. Treat this as the reliable fix; `backface-visibility` alone is not enough on iOS.

## Forms
- `Contact.jsx` holds the real EmailJS integration (honeypot field, `emailjs.send`, 60s success cooldown, `idle`/`sending`/`success`/`error` state machine). **The service/template/public key come from `import.meta.env.VITE_EMAILJS_*`** — see `.env.example`. Set real values in `.env.local` for local dev and in Netlify's environment variables for production; never hardcode them in the file or commit an `.env` with real values. If those env vars are missing, `handleSubmit` fails into the `error` state instead of throwing.
- Inputs are bottom-border-only, transparent background, `focus:border-accent` — no boxed/bordered inputs, matches the restrained aesthetic.

## Accessibility
- One `<h1>` (the hero name), `<h2>` per section heading, `<h3>` for sub-entries (Work/Education items) — don't skip levels.
- Semantic landmarks: `<nav>` (Nav), `<header>` (Hero), `<main>` (wraps Profile/Index/Projects/Work/Education/Contact in `App.jsx`), `<footer>` (Footer).
- `:focus-visible` gets a visible `outline: 2px solid var(--accent)` globally (see `@layer base` in `index.css`) — don't suppress focus outlines on interactive elements.
- Photos use `FlipCard`, which requires a real, descriptive `alt` prop — not decorative/empty `alt=""`, since the Profile tiles are content, not decoration. `FlipCard`'s clickable area is a `role="button"` with `tabIndex`, `aria-pressed`, and Enter/Space keyboard support — don't swap it for a plain `onClick` div if you touch it.
- The dark/light toggle in `Nav.jsx` is icon-only (sun/moon SVG) — make sure it keeps its `aria-label` since there's no visible text to fall back on.

## What NOT to do
- Don't add a second accent color or reintroduce the old amber/tactical or blue/purple palettes from earlier redesigns — those systems are fully retired.
- Don't write component-scoped `.css` files — everything is Tailwind utility classes in JSX now (`App.css` was deleted for this reason).
- Don't put base/reset CSS outside `@layer base` (see the cascade-layer gotcha above).
