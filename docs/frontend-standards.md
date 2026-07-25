# Frontend Standards

Single source of truth for how this site is styled. When adding or changing UI, match these patterns instead of inventing new ones inline.

## Stack
- React + Vite, entry point `index.html` (root) → `src/index.jsx` → `src/App.jsx`
- `public/index.html` does **not** exist and should not be re-created — Vite only reads the root `index.html`
- Styling is plain CSS in `src/App.css` (no Tailwind currently applied despite it being in `package.json`/`vite.config.js` — don't assume Tailwind classes work without checking)
- Framer Motion for animation

## Color palette
- **Background glows:** blue `#2563a8` (top), purple `#6d28d9` (bottom-right) — these two colors are the site's accent identity
- **Button/CTA gradient:** `linear-gradient(103deg, #2563a8 0%, #6d28d9 100%)` — reuse this exact gradient for any new primary action button, don't introduce a different accent color
- **Title gradient:** `linear-gradient(135deg/160deg, #ffffff 0%, #e2e8f0 100%)` — subtle white-to-cool-gray, used on `.hero-title` and `.section-title`. Don't reintroduce cyan/violet into titles — that was tried and rejected in favor of this more neutral look
- **Body text:** `#c5d0e0` (primary), `#8a95a8` (muted/secondary), `#6b7280`/`#5a6070` (tertiary/labels)
- **Category accent colors** (skill rows, project rows) — one distinct color per category, used only for the left border accent and category label, e.g. `#f87171` red, `#34d399` green, `#60a5fa` blue, `#fbbf24` amber, `#22d3ee` cyan, `#fb923c` orange, `#a78bfa` violet

## Card pattern ("glass card")
Every card-like block (skill row, project row, school entry, contact card, aboutme biocard) follows this recipe:
```css
border: 1px solid rgba(255,255,255,0.08);
border-radius: 14px–16px;
background: rgba(255,255,255,0.02);
backdrop-filter: blur(12px–16px);
```
Reuse this exact combination for new cards rather than adjusting the opacity/blur values per-component.

## Hover behavior — important gotcha
Framer Motion sets `transform` as an **inline style** on any element using its animation props (`initial`/`whileInView`/`animate`). Inline styles beat CSS, so a CSS `:hover { transform: scale(...) }` rule silently does nothing on a `motion.*` element.

- If the element is a `motion.*` component: use `whileHover={{ scale: 1.015, transition: { duration: 0.15 } }}` in JSX, not CSS transform.
- Resting/hover **brightness** (`filter: brightness(0.85)` → `brightness(1)` on hover) still works fine in CSS on `motion.*` elements — only `transform` is the problem.
- Non-motion elements (buttons, plain links) can use CSS `transform`/`box-shadow` hover freely, e.g. `.hero-cta:hover { transform: translateY(-2px) scale(1.02); box-shadow: 0 6px 20px rgba(109,40,217,0.35); }`

## Typography
- Font: `"Geist", sans-serif` everywhere — always include the `sans-serif` fallback, never just `"Geist"` alone
- Section titles: 68px desktop / 48px mobile, weight 800

## Layout
- `.section-inner` is the standard content container: `width: 70vw; min-width: 850px;` (mobile: `90vw`, `min-width: 0`)
- Mobile breakpoint is `768px` throughout — don't introduce a different breakpoint value

## Symbols
- `↗` denotes an external link. Used on project rows, experience/education cards, About Me buttons, and footer social links. Use it consistently on any new outbound link — don't use other arrow glyphs (→, ➜, etc.) for the same purpose

## Inline styles
The hero section still has inline `style={{...}}` props (pre-dates this doc). Going forward, new sections should use CSS classes in `App.css`, not inline styles, so colors/spacing stay centralized here instead of scattered through JSX.
