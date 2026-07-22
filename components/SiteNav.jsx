"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { org } from "@/lib/data";

const LINKS = [
  { href: "/", label: "Home" },
  {
    href: "/events",
    label: "Events",
    children: [
      { href: "/events", label: "Upcoming" },
      { href: "/events/past", label: "Past Events" },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: org.instagram, label: "Instagram", external: true },
];

const normalize = (path) => path.replace(/\/+$/, "") || "/";

export default function SiteNav() {
  const pathname = normalize(usePathname() || "/");
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isSection = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-nav" aria-label="Primary navigation">
      <div className="nav-inner">
        <Link className="brand" href="/" aria-label={`${org.short} home`}>
          <span className="brand-mark" aria-hidden="true">
            华
          </span>
          <span className="brand-text">{org.short}</span>
        </Link>

        <nav
          className={"nav-links" + (open ? " is-open" : "")}
          id="nav-links"
          onClick={() => setOpen(false)}
        >
          {LINKS.map((link) => {
            if (link.external) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                >
                  {link.label}
                </a>
              );
            }

            if (!link.children) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={isSection(link.href) ? "is-active" : ""}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <span className="nav-item" key={link.href}>
                <Link
                  href={link.href}
                  className={isSection(link.href) ? "is-active" : ""}
                >
                  {link.label}
                </Link>
                <span className="nav-sub">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={pathname === child.href ? "is-active" : ""}
                    >
                      {child.label}
                    </Link>
                  ))}
                </span>
              </span>
            );
          })}
        </nav>

        <div className="nav-meta" aria-hidden="true">
          <span className="nav-arrow" />
          <span>NB · NJ</span>
          <span>EN / 中</span>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-controls="nav-links"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}
