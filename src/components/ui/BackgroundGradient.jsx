import { useEffect, useRef } from "react";

// Ambient background: two radial glows that drift independently and very slowly (pure
// CSS @keyframes, no per-frame JS — see drift-a/drift-b in index.css), a faint film-grain
// texture layered on top, and a small scroll-tied intensity bump so the glow reads as
// slightly "deeper" the further into the page you are.
//
// This is `position: absolute; inset: 0` inside a `position: relative` wrapper that spans
// the whole page (see App.jsx), NOT `position: fixed` and NOT a JS-driven transform that
// tries to fake "fixed" by tracking scroll — both were tried and both glitch on iOS: fixed
// combined with mix-blend-mode children flat-out corrupts into a solid block on scroll
// direction changes, and a rAF-throttled JS transform can't keep up with iOS's native
// momentum/fling scrolling and visibly lags, exposing a gap of the plain --bg color at the
// edge. Spanning the full document height and letting it scroll natively with the page
// needs no synchronization at all, so neither failure mode is possible. The tradeoff is the
// two glows now read as fixed points on the page (top-left near the Hero, bottom-right near
// Contact) rather than anchored to the viewport at all times — which works fine here since
// the page reads top-to-bottom as one continuous piece anyway.
//
// The two glow orbs are hidden below md (see `hidden md:block` below): mobile browser chrome
// (address bar / bottom toolbar) resizes the visual viewport as it shows/hides, which vh-based
// orb sizing can't track, so a gap of plain --bg reappears whenever the chrome toggles. Rather
// than chase that further, mobile just gets the flat themed background — the grain texture
// stays since it isn't vh-sized and isn't affected.
export default function BackgroundGradient() {
  const rootRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    function update() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const depth = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (rootRef.current) rootRef.current.style.setProperty("--scroll-depth", depth.toFixed(3));
      ticking = false;
    }
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [isolation:isolate]"
      style={{ "--scroll-depth": 0 }}
    >
      <div
        className="absolute -top-[15vh] -left-[20vw] hidden h-[110vh] w-[110vw] motion-safe:animate-[drift-a_18s_ease-in-out_infinite] md:block"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 20%, color-mix(in srgb, var(--glow) 68%, transparent), transparent 70%)",
          opacity: "calc(0.6 + var(--scroll-depth) * 0.4)",
          mixBlendMode: "var(--glow-blend)",
        }}
      />
      <div
        className="absolute -bottom-[15vh] -right-[20vw] hidden h-[110vh] w-[110vw] motion-safe:animate-[drift-b_23s_ease-in-out_infinite] md:block"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 70% 80%, color-mix(in srgb, var(--glow) 56%, transparent), transparent 70%)",
          opacity: "calc(0.6 + var(--scroll-depth) * 0.4)",
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
