import Link from "next/link";
import Reveal from "./Reveal";
import { programs } from "@/lib/data";

/** The three signature programs, rendered as full-width editorial rows. */
export default function ProgramList({ items = programs }) {
  return (
    <div className="program-list">
      {items.map((program) => (
        <Reveal as="article" className="program-row" key={program.no}>
          <span className="program-no">{program.no}</span>
          <h3 className="program-title">{program.title}</h3>
          <p className="program-copy">{program.copy}</p>
          {program.external ? (
            <a
              className="text-link"
              href={program.href}
              target="_blank"
              rel="noopener"
            >
              {program.linkLabel}
            </a>
          ) : (
            <Link className="text-link" href={program.href}>
              {program.linkLabel}
            </Link>
          )}
        </Reveal>
      ))}
    </div>
  );
}
