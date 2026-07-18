"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const upd = () => setScrolled(window.pageYOffset > 8);
    window.addEventListener("scroll", upd, { passive: true });
    upd();
    return () => window.removeEventListener("scroll", upd);
  }, []);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className={"nav" + (scrolled ? " is-scrolled" : "")}>
      <div className="nav__inner">
        <Link className="brand" href="/">
          <span className="brand__seal">华</span>
          <span className="brand__text">
            <span className="brand__cn">中国学生会</span>
            <span className="brand__en">Rutgers CSO</span>
          </span>
        </Link>
        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>
        <div
          className={"nav__links" + (open ? " is-open" : "")}
          onClick={() => setOpen(false)}
        >
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? "is-active" : ""}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <ThemeToggle />
        <Link className="nav__cta" href="/contact">
          Join Us
        </Link>
      </div>
    </nav>
  );
}
