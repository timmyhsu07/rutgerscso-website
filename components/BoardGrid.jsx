import Reveal from "./Reveal";
import { boardRoles } from "@/lib/data";

export default function BoardGrid() {
  return (
    <div className="board-grid">
      {boardRoles.map((member) => (
        <Reveal as="article" className="board-card" key={member.no}>
          <span className="board-card__no">
            {member.no} / {member.group}
          </span>
          <span className="board-card__glyph" aria-hidden="true">
            {member.glyph}
          </span>
          <div className="board-card__role">
            <strong>{member.role}</strong>
            <span>{member.roleCn}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
