"use client";
import { motion } from "framer-motion";

export default function SectionTitle({ cn, en, lede }) {
  return (
    <div className="sec-title">
      {cn && (
        <motion.p
          className="sec-title__cn"
          initial={{ opacity: 0, scale: 1.5, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ type: "spring", stiffness: 320, damping: 15 }}
        >
          {cn}
        </motion.p>
      )}
      <motion.h2
        className="sec-title__en"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-8%" }}
        transition={{ duration: 0.5, delay: 0.08 }}
      >
        {en}
      </motion.h2>
      <motion.div
        className="sec-title__divider"
        style={{ transformOrigin: "center" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-8%" }}
        transition={{ duration: 0.5, delay: 0.18 }}
      />
      {lede && <p className="sec-title__lede">{lede}</p>}
    </div>
  );
}
