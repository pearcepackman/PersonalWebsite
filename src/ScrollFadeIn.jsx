import { motion } from "framer-motion";

const ScrollFadeIn = ({ children, delay = 0 }) => (
  <motion.div
    style={{ width: '100%' }}
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, ease: "easeOut", delay }}
    viewport={{ once: false, amount: 0.15 }}
  >
    {children}
  </motion.div>
);

export default ScrollFadeIn;
