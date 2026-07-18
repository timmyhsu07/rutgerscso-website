"use client";
import { motion } from "framer-motion";
import { Star } from "./Deco";

/* Interior-page hero: ruled HUD strip up top, giant CJK title left with a
   muted sun behind it, italic English overlapping at an angle. */
export default function PageHero({ cn, en, children }) {
  return (
    <header className="hero hero--page wrap" style={{ paddingBottom: "1rem" }}>
      <motion.div
        className="hero__meta"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <span>Rutgers CSO — file · {en}</span>
        <span><Star style={{ width: 10, height: 10, color: "var(--red)", verticalAlign: "-1px" }} /> NB · NJ</span>
      </motion.div>
      <span
        className="sun"
        aria-hidden="true"
        style={{ left: "1%", top: "34%", width: 110, height: 110, zIndex: -1 }}
      />
      <span className="ht ht--dots" aria-hidden="true" style={{ right: "6%", top: "18%", width: 110, height: 78, zIndex: -1 }} />
      <span className="wash" aria-hidden="true" style={{ right: "14%", top: "48%", width: 170, height: 95, zIndex: -1 }} />
      <span className="wash" aria-hidden="true" style={{ right: "2%", bottom: "-6%", width: 130, height: 80, zIndex: -1 }} />
      <motion.p
        className="hero__cn"
        style={{ fontSize: "clamp(2.4rem,9vw,4.8rem)", margin: 0, position: "relative" }}
        initial={{ opacity: 0, scale: 1.3, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 16 }}
      >
        {cn}
      </motion.p>
      <motion.h1
        className="hero__en"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {en}
      </motion.h1>
      {children && (
        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.p>
      )}
    </header>
  );
}
