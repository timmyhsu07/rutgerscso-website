"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 36,
    restDelta: 0.001,
  });
  return <motion.div className="progress-bar" style={{ scaleX }} />;
}
