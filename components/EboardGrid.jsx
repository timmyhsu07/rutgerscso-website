import Reveal from "./Reveal";
import { eboard } from "@/lib/data";

export default function EboardGrid() {
  if (!eboard.length) {
    return <p className="empty-note">Our e-board roster is coming soon.</p>;
  }
  // preserve first-seen group order
  const order = [];
  const groups = {};
  eboard.forEach((m) => {
    const g = m.group || "Executive Board";
    if (!groups[g]) {
      groups[g] = [];
      order.push(g);
    }
    groups[g].push(m);
  });

  return (
    <>
      {order.map((g) => (
        <div className="eboard-group" key={g}>
          <h3 className="eboard-group__title">{g}</h3>
          <div className="grid grid--eboard">
            {groups[g].map((m, i) => (
              <Reveal key={i} delay={(i % 4) * 0.07}>
                <div className="member-card">
                  <div className="member-card__avatar">
                    <img src={m.image || "/assets/avatar.svg"} alt={m.name} loading="lazy" />
                  </div>
                  <h3 className="member-card__name">{m.name}</h3>
                  <div className="member-card__role">
                    {m.role}
                    {m.roleCn && <span className="member-card__role--cn"> {m.roleCn}</span>}
                  </div>
                  {m.major && <p className="member-card__major">{m.major}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
