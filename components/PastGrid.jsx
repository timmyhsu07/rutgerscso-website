import Reveal from "./Reveal";
import { pastEvents } from "@/lib/data";

export default function PastGrid() {
  if (!pastEvents.length) {
    return <p className="empty-note">Photos from past events will appear here.</p>;
  }
  return (
    <div className="grid grid--past">
      {pastEvents.map((e, i) => (
        <Reveal key={i} delay={(i % 4) * 0.07}>
          <article className="past-card">
            <div className="past-card__media">
              <img src={e.image || "/assets/placeholder.svg"} alt={e.title} loading="lazy" />
            </div>
            <div className="past-card__body">
              {e.date && <span className="past-card__date">{e.date}</span>}
              <h3 className="past-card__title">{e.title}</h3>
              <p className="past-card__desc">{e.description}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
