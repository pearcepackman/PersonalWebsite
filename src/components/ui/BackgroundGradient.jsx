import { useEffect, useRef } from "react";

// Ambient background: two radial glows that drift independently and very slowly (pure
// CSS @keyframes, no per-frame JS — see drift-a/drift-b in index.css), a faint film-grain
// texture layered on top, and a small scroll-tied intensity bump so the glow reads as
// slightly "deeper" the further into the page you are. The scroll listener only touches
// a CSS custom property, not layout, so it's cheap even without throttling beyond rAF.
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
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ "--scroll-depth": 0 }}
    >
      <div
        className="absolute -inset-[20%] motion-safe:animate-[drift-a_18s_ease-in-out_infinite]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 12% -5%, color-mix(in srgb, var(--glow) 68%, transparent), transparent 70%)",
          opacity: "calc(0.6 + var(--scroll-depth) * 0.4)",
          mixBlendMode: "var(--glow-blend)",
        }}
      />
      <div
        className="absolute -inset-[20%] motion-safe:animate-[drift-b_23s_ease-in-out_infinite]"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 100% 105%, color-mix(in srgb, var(--glow) 56%, transparent), transparent 70%)",
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
