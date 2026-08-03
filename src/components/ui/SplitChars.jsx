import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

const charVariant = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.7, ease: EASE } },
};

// Character-by-character cascade reveal, for short high-impact text (the hero name).
// A single whileInView trigger on the parent cascades to children via variants —
// per-character IntersectionObservers on elements this small don't fire reliably.
// aria-hidden on the characters with an aria-label on the wrapper keeps it from
// reading as garbled letters to a screen reader.
export default function SplitChars({ text, delayStart = 0, staggerStep = 0.025, className = "" }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      className={`inline-block overflow-hidden pr-[0.08em] ${className}`}
      aria-label={text}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.6, margin: "0px 0px -15% 0px" }}
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
