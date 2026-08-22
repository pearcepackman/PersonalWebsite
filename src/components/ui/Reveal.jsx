import { forwardRef, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const EASE = [0.19, 1, 0.22, 1];
const HIDDEN = { opacity: 0, y: 18 };
const VISIBLE = { opacity: 1, y: 0 };

const Reveal = forwardRef(function Reveal({ children, delay = 0, as = "div", className = "", onMount = false, ...rest }, ref) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as] || motion.div;
  const [observedRef, isHidden] = useScrollReveal();
  const mergedRef = useCallback(
    (node) => {
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
      observedRef.current = node;
    },
    [ref, observedRef]
  );

  if (reduceMotion) {
    const Static = as;
    return (
      <Static ref={ref} className={className} {...rest}>
        {children}
      </Static>
    );
  }

  // onMount content (guaranteed above-the-fold, e.g. the Hero) uses a pure CSS @keyframes
  // animation (.anim-fade-up-in, defined in index.css) instead of Framer Motion. Framer
  // Motion is JS-driven — it can't move anything out of its hidden `initial` state until
  // React hydrates, so on the prerendered production build this content would sit frozen
  // in that hidden state for however long hydration takes (~1.4s measured via Lighthouse).
  // A CSS animation starts the moment the browser paints the prerendered HTML, independent
  // of hydration timing entirely, so there's no freeze regardless of how long JS takes.
  if (onMount) {
    const CssTag = as;
    return (
      <CssTag ref={ref} className={`anim-fade-up-in ${className}`} style={{ animationDelay: `${delay}s` }} {...rest}>
        {children}
      </CssTag>
    );
  }

  // Everything else (scroll-triggered reveals): see useScrollReveal.js — `initial={false}`
  // means this never plays a transition on mount, it just renders directly at whatever
  // `animate` resolves to, which is VISIBLE until an IntersectionObserver positively
  // determines otherwise. Always the same `motion.div`, never swapped for a different
  // element type, so there's no remount cost either.
  return (
    <Tag
      ref={mergedRef}
      initial={false}
      animate={isHidden ? HIDDEN : VISIBLE}
      transition={{ duration: 1, delay, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
});

export default Reveal;
