import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

const wordVariant = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

// Word-by-word cascade reveal for longer statements. `parts` is an array of
// { text, emphasis? } — plain parts get split into individual words, an `emphasis`
// part (e.g. the one italic accent word) is kept intact as its own reveal unit.
// A single whileInView trigger on the parent cascades to children via variants —
// per-word IntersectionObservers don't fire reliably on elements this small.
export default function SplitWords({ parts, delayStart = 0, staggerStep = 0.03, className = "" }) {
  const reduceMotion = useReducedMotion();

  const words = [];
  parts.forEach((part, pi) => {
    const tokens = part.text.split(" ").filter(Boolean);
    tokens.forEach((token, ti) => {
      words.push({
        text: token,
        emphasis: !!part.emphasis,
        trailingSpace: ti < tokens.length - 1 || pi < parts.length - 1,
      });
    });
  });

  if (reduceMotion) {
    return (
      <span className={className}>
        {words.map((w, i) => (
          <span key={i}>
            {w.emphasis ? <em className="italic text-accent">{w.text}</em> : w.text}
            {w.trailingSpace ? " " : ""}
          </span>
        ))}
      </span>
    );
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3, margin: "0px 0px -15% 0px" }}
      variants={{ visible: { transition: { staggerChildren: staggerStep, delayChildren: delayStart } } }}
    >
      {words.map((w, i) => (
        <span key={i}>
          <span className="inline-block overflow-hidden align-bottom">
            <motion.span
              className={`inline-block ${w.emphasis ? "italic text-accent" : ""}`}
              variants={wordVariant}
            >
              {w.text}
            </motion.span>
          </span>
          {w.trailingSpace ? " " : ""}
        </span>
      ))}
    </motion.span>
  );
}
