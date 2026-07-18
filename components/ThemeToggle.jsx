"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  function toggle() {
    const next =
      document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("cso-theme", next);
    } catch (e) {}
    setDark(next === "dark");
  }

  return (
    <button className="theme-toggle" aria-label="Toggle dark mode" aria-pressed={dark} onClick={toggle}>
      <svg className="icon-moon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8Z" />
      </svg>
      <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4.2" fill="currentColor" stroke="none" />
        <path d="M12 2.4v2.2M12 19.4v2.2M4.4 4.4l1.6 1.6M18 18l1.6 1.6M2.4 12h2.2M19.4 12h2.2M4.4 19.6l1.6-1.6M18 6l1.6-1.6" />
      </svg>
      <span className="theme-toggle__knob" />
    </button>
  );
}
