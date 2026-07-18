"use client";
import { motion } from "framer-motion";

/* App Router template: re-mounts on every navigation, so each page enters
   with a soft rise — a route transition without any wiring in the pages. */
export default function Template({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
