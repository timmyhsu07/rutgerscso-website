import Link from "next/link";
import { org } from "@/lib/data";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        {org.nameCn}
        <br />
        {org.short}
      </div>
      <div className="footer-meta">
        <nav className="footer-nav" aria-label="Footer">
          <Link href="/events">Events</Link>
          <Link href="/events/past">Past Events</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <a href={org.instagram} target="_blank" rel="noopener">
            Instagram
          </a>
        </nav>
        <span>Culture · Community · Connection</span>
        <span>
          © {new Date().getFullYear()} {org.school} {org.name}
        </span>
        <span>{org.location}</span>
      </div>
    </footer>
  );
}
