"use client";
import { useEffect, useRef } from "react";

export default function PageProgress() {
  const bar = useRef(null);

  useEffect(() => {
    const update = () => {
      const el = bar.current;
      if (!el) return;
      const available =
        document.documentElement.scrollHeight - window.innerHeight;
      const value = available > 0 ? window.scrollY / available : 0;
      el.style.transform = `scaleY(${Math.min(1, Math.max(0, value))})`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="page-progress" aria-hidden="true">
      <span ref={bar} />
    </div>
  );
}
