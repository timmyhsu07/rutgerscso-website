"use client";
import { motion } from "framer-motion";

const EASE = [0.2, 0.7, 0.2, 1];

export default function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
  style,
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
