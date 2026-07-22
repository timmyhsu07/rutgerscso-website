import Link from "next/link";
import Reveal from "./Reveal";

/** The thin rule-bounded call-to-action band used at the end of sections. */
export default function PartnersNote({ label, children, href, cta, external }) {
  return (
    <Reveal as="div" className="partners-note">
      <span>{label}</span>
      <strong>{children}</strong>
      {external ? (
        <a className="text-link" href={href} target="_blank" rel="noopener">
          {cta}
        </a>
      ) : (
        <Link className="text-link" href={href}>
          {cta}
        </Link>
      )}
    </Reveal>
  );
}
