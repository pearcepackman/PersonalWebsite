// components/ScrollFadeIn.jsx
import { motion } from "framer-motion";

const ScrollFadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: false, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

export default ScrollFadeIn;

