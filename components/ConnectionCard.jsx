import Link from "next/link";
import Reveal from "./Reveal";
import { ConnectionArt } from "./art/Illustrations";

/**
 * Renders as a single element so it keeps its grid placement inside
 * `.night-intro` — wrapping it in a div would break the layout.
 */
export default function ConnectionCard({
  href = "/contact",
  label = "Connect +",
}) {
  return (
    <Reveal as={Link} href={href} className="connection-card">
      <div className="connection-card__art">
        <ConnectionArt />
      </div>
      <div className="connection-card__body">
        <span>{label}</span>
        <span>↗</span>
      </div>
    </Reveal>
  );
}
