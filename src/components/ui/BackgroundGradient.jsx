// Ambient background: two static radial glows plus a faint film-grain texture layered on
// top. Desktop-only — the two glow orbs are `hidden md:block`, no gradient renders on mobile
// at all. iOS Safari has a real bug where `position: fixed` + `mix-blend-mode` children
// corrupts into a solid-color block on scroll-direction changes, and mobile browser chrome
// (address bar / bottom toolbar) resizing the viewport breaks any vh/vw-based sizing too.
// Several workarounds were tried (position: absolute + full document height, a JS scroll-
// synced transform faking "fixed") and all traded one visual bug for another. Since none of
// this applies on desktop, the fix is just not rendering the orbs on mobile at all rather
// than compromising the desktop look to accommodate iOS quirks — the grain texture stays on
// mobile since it isn't vh-sized and isn't affected by any of this.
//
// Static on purpose, not animated/scroll-tied — this used to drift via a continuous
// `animate-[drift-a_18s...]` CSS keyframe and had a scroll listener nudging its opacity via
// a --scroll-depth custom property. mix-blend-mode is a genuinely expensive CSS feature (it
// forces the browser to allocate intermediate render targets and recomposite, rather than a
// cheap single paint), and continuously animating or recomputing style on an element using
// it means paying that recompositing cost every single frame, indefinitely, for as long as
// the tab is open — a real, sustained CPU/GPU cost, not just a one-time thing. Neither the
// drift nor the scroll-depth nudge was essential to the look, so both are gone in favor of
// keeping this a one-time paint.
export default function BackgroundGradient() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -inset-[20%] hidden md:block"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 12% -5%, color-mix(in srgb, var(--glow) 68%, transparent), transparent 70%)",
          opacity: 0.8,
          mixBlendMode: "var(--glow-blend)",
        }}
      />
      <div
        className="absolute -inset-[20%] hidden md:block"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 100% 105%, color-mix(in srgb, var(--glow) 56%, transparent), transparent 70%)",
          opacity: 0.8,
          mixBlendMode: "var(--glow-blend)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "220px 220px",
        }}
      />
    </div>
  );
}
