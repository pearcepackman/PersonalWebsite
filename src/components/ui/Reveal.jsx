import { forwardRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.19, 1, 0.22, 1];

const Reveal = forwardRef(function Reveal({ children, delay = 0, as = "div", className = "", ...rest }, ref) {
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

  return (
    <Tag
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 1, delay, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
});

export default Reveal;
