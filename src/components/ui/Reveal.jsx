import { forwardRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.19, 1, 0.22, 1];

const Reveal = forwardRef(function Reveal({ children, delay = 0, as = "div", className = "", onMount = false, ...rest }, ref) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as] || motion.div;

  if (reduceMotion) {
    const Static = as;
    return (
      <Static ref={ref} className={className} {...rest}>
        {children}
      </Static>
    );
  }

  // onMount skips the IntersectionObserver-based whileInView trigger entirely and just
  // plays on mount. Some mobile browsers don't reliably fire the observer's first callback
  // for a target that's already in view when the observer is created, so above-the-fold
  // content (e.g. the Hero) needs this to guarantee it animates in on load.
  const triggerProps = onMount
    ? { animate: { opacity: 1, y: 0 } }
    : { whileInView: { opacity: 1, y: 0 }, viewport: { once: false, amount: 0.15, margin: "0px 0px -15% 0px" } };

  return (
    <Tag
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      {...triggerProps}
      transition={{ duration: 1, delay, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
});

export default Reveal;
