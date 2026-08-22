import { useEffect, useRef, useState } from "react";

// Manually reimplements what Framer Motion's `whileInView` + `initial` shorthand normally
// gives you, but as two independently-controlled things instead of one. The shorthand
// conflates "what to render before anything is known" with "what to revert to when scrolled
// out of view" into a single `initial` prop — there's no way to make that be "visible" for
// the first render (matching the prerendered HTML, avoiding a freeze) while still being
// "hidden" for the out-of-view case (needed for the reveal-on-scroll effect). This hook
// keeps them separate: returns `isHidden`, which only ever becomes `true` once an
// IntersectionObserver has positively determined the element is off-screen — before that
// (SSR, and the brief window before the observer's first callback), it reads as "not
// hidden", matching whatever the prerendered HTML already shows.
//
// Consumers must render the *same* component/element type regardless of `isHidden` — driving
// visibility through this value via Framer Motion's `animate` prop (with `initial={false}`
// so the very first render doesn't play a transition) rather than swapping between two
// different component types. Swapping types forces React to unmount/remount the DOM node,
// and with ~60 of these on one page all swapping at once right after hydration, that's a
// burst of DOM churn that itself causes a visible stutter — a different bug than the one
// this hook fixes, worth not reintroducing.
//
// Observers are shared, one per unique (amount, margin) pair, not one per element — creating
// a separate `new IntersectionObserver()` per element (there are ~60 of these on this page)
// is a well-documented real performance anti-pattern: switching between many observer
// instances measures at roughly a quarter second versus ~30ms for a shared instance, per
// browser vendor benchmarking. There are only 4 distinct (amount, margin) configs used
// across the site, so this reduces ~60 observers down to ~4.
const registry = new Map();

function getSharedObserver(amount, margin) {
  const key = `${amount}|${margin}`;
  let entry = registry.get(key);
  if (!entry) {
    const callbacks = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cb = callbacks.get(entry.target);
          if (cb) cb(entry.isIntersecting);
        });
      },
      { threshold: amount, rootMargin: margin }
    );
    entry = { observer, callbacks };
    registry.set(key, entry);
  }
  return entry;
}

export function useScrollReveal({ amount = 0.15, margin = "0px 0px -15% 0px" } = {}) {
  const elRef = useRef(null);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return undefined;
    const { observer, callbacks } = getSharedObserver(amount, margin);
    callbacks.set(el, (intersecting) => setIsHidden(!intersecting));
    observer.observe(el);
    return () => {
      callbacks.delete(el);
      observer.unobserve(el);
    };
  }, [amount, margin]);

  return [elRef, isHidden];
}
