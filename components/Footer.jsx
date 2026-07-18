import Link from "next/link";
import { org } from "@/lib/data";

const IgIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <div className="footer__brand-cn">中国学生会</div>
          <p>
            Rutgers University Chinese Student Organization — celebrating
            culture, building community, bridging cultures.
          </p>
          <div className="social-row" style={{ marginTop: ".7rem" }}>
            <a
              className="social-pill"
              href={org.instagram}
              target="_blank"
              rel="noopener"
            >
              <IgIcon /> Instagram
            </a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Get in Touch</h4>
          <ul>
            <li>
              <a href={`mailto:${org.email}`}>{org.email}</a>
            </li>
            <li>
              <a href={org.instagram} target="_blank" rel="noopener">
                {org.instagramHandle}
              </a>
            </li>
            <li>{org.location}</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <span>
          © {new Date().getFullYear()} Rutgers Chinese Student Organization ·
          Made by Timothy Hsu
        </span>
      </div>
    </footer>
  );
}
