import { motion, useReducedMotion } from "framer-motion";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const EASE = [0.16, 1, 0.3, 1];

const charVariant = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.7, ease: EASE } },
};

// Character-by-character cascade reveal, for short high-impact text (the hero name).
// A single whileInView trigger on the parent cascades to children via variants —
// per-character IntersectionObservers on elements this small don't fire reliably.
// aria-hidden on the characters with an aria-label on the wrapper keeps it from
// reading as garbled letters to a screen reader. role="text" is required on the wrapper —
// a plain <span> has no implicit role that supports naming, so aria-label on it alone is an
// invalid/ignored ARIA attribute (caught via Lighthouse's aria-prohibited-attr audit);
// role="text" is the standard pattern for exactly this "one readable label over several
// presentational child spans" case.
export default function SplitChars({ text, delayStart = 0, staggerStep = 0.025, className = "", onMount = false }) {
  const reduceMotion = useReducedMotion();
  const [observedRef, isHidden] = useScrollReveal({ amount: 0.6, margin: "0px 0px -15% 0px" });

  if (reduceMotion) {
    return <span className={className}>{text}</span>;
  }

  // onMount (the Hero name) uses plain <span>s with a CSS @keyframes animation
  // (.anim-char-reveal-in, index.css) and a per-character animation-delay, instead of
  // Framer Motion's staggerChildren. Same reasoning as Reveal.jsx's onMount path: Framer
  // Motion can't animate anything before React hydrates, so on the prerendered production
  // build this would sit frozen for however long hydration takes. CSS animations start the
  // instant the browser paints, independent of hydration timing.
  if (onMount) {
    return (
      <span className={`inline-block overflow-hidden pr-[0.08em] ${className}`} role="text" aria-label={text}>
        {[...text].map((ch, i) => (
          <span
            key={i}
            aria-hidden="true"
            className="anim-char-reveal-in inline-block"
            style={{ animationDelay: `${delayStart + i * staggerStep}s` }}
          >
            {ch}
          </span>
        ))}
      </span>
    );
  }

  // See useScrollReveal.js / Reveal.jsx — `initial={false}` + a manually-driven `animate`
  // variant instead of Framer Motion's `whileInView` shorthand.
  return (
    <motion.span
      ref={observedRef}
      className={`inline-block overflow-hidden pr-[0.08em] ${className}`}
      role="text"
      aria-label={text}
      initial={false}
      animate={isHidden ? "hidden" : "visible"}
      variants={{ visible: { transition: { staggerChildren: staggerStep, delayChildren: delayStart } } }}
    >
      {[...text].map((ch, i) => (
        <motion.span key={i} aria-hidden="true" className="inline-block" variants={charVariant}>
          {ch}
        </motion.span>
      ))}
    </motion.span>
  );
}
