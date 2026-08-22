import { useEffect } from "react";

const TICK_THICKNESS_PX = 4;

// Native scrollbar track pseudo-elements can't have real DOM content, so instead of
// building a fake custom scrollbar (which would mean re-implementing drag, click-to-seek,
// keyboard nav, and trackpad momentum ourselves — real functional risk for a decorative
// feature), this measures each section's actual position and writes it into the track as
// a precise CSS gradient. The native scrollbar stays fully native; only its background
// changes. Colors reference CSS variables directly in the injected rule, so they follow
// the current theme automatically without needing to recompute on toggle.
//
// Firefox has no pseudo-element access to the scrollbar track at all — it only gets the
// plain two-color scrollbar-color fallback set in index.css, no ticks. That's an accepted
// platform limitation, not a bug.
export default function ScrollbarTicks() {
  useEffect(() => {
    const styleEl = document.createElement("style");
    document.head.appendChild(styleEl);

    function recompute() {
      const sections = document.querySelectorAll("main > section");
      const docHeight = document.documentElement.scrollHeight;
      if (!sections.length || docHeight === 0) return;

      // The gradient's percentage stops resolve against the scrollbar TRACK's own
      // rendered size (≈ viewport height, since the track fills the visible scrollbar
      // regardless of document length) — not the document's scroll height. Using
      // docHeight here was the bug: on a page ~9x taller than the viewport, a "4px"
      // band computed as a fraction of docHeight rendered at under half a real pixel.
      const halfBandPct = (TICK_THICKNESS_PX / window.innerHeight) * 100;
      const stops = [];
      let cursor = 0;

      sections.forEach((section) => {
        const pct = (section.offsetTop / docHeight) * 100;
        const bandStart = Math.max(cursor, pct - halfBandPct);
        const bandEnd = pct + halfBandPct;
        stops.push(`transparent ${cursor}%`, `transparent ${bandStart}%`);
        stops.push(`var(--line-2) ${bandStart}%`, `var(--line-2) ${bandEnd}%`);
        cursor = bandEnd;
      });
      stops.push(`transparent ${cursor}%`, "transparent 100%");

      styleEl.textContent = `::-webkit-scrollbar-track { background-image: linear-gradient(to bottom, ${stops.join(", ")}); }`;
    }

    // recompute() forces a synchronous layout (querySelectorAll + reading .offsetTop on
    // every section, plus scrollHeight) — real, non-trivial main-thread work on a page this
    // size. Originally ran on a flat 300ms setTimeout, which landed right in the middle of
    // the Hero's ~150ms-1250ms entrance animation timeline, and caused a real, visible
    // stutter in that animation (a forced layout is exactly the kind of work that can stall
    // frame delivery for an unrelated concurrently-running animation). requestIdleCallback
    // runs this once the browser is actually idle instead of at a guessed fixed time, with a
    // generous timeout as a fallback deadline (and a plain setTimeout fallback for Safari,
    // which doesn't implement requestIdleCallback at all).
    const schedule = window.requestIdleCallback || ((fn) => setTimeout(fn, 1500));
    const cancel = window.cancelIdleCallback || clearTimeout;
    const handle = schedule(recompute, { timeout: 2000 });
    window.addEventListener("resize", recompute);
    return () => {
      cancel(handle);
      window.removeEventListener("resize", recompute);
      styleEl.remove();
    };
  }, []);

  return null;
}
