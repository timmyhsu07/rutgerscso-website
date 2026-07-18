import Reveal from "./Reveal";
import { currentEvents } from "@/lib/data";

const Clock = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
const Pin = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 21s-7-5.3-7-11a7 7 0 0 1 14 0c0 5.7-7 11-7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export default function EventsGrid() {
  if (!currentEvents.length) {
    return (
      <p className="empty-note">
        No upcoming events posted yet — follow our Instagram for the latest!
      </p>
    );
  }
  return (
    <div className="grid grid--events">
      {currentEvents.map((e, i) => (
        <Reveal key={i} delay={(i % 3) * 0.08}>
          <article className="event-card">
            <span className="index-tag">
              No.{String(i + 1).padStart(2, "0")}
            </span>
            {e.badge && <span className="event-card__badge">{e.badge}</span>}
            <div className="event-card__media">
              <img
                src={e.image || "/assets/placeholder.svg"}
                alt={e.title}
                loading="lazy"
              />
              {e.date && <span className="event-card__date">{e.date}</span>}
            </div>
            <div className="event-card__body">
              <h3 className="event-card__title">{e.title}</h3>
              <div className="event-card__meta">
                {e.time && (
                  <div className="row">
                    <span className="ic">
                      <Clock />
                    </span>
                    <span>{e.time}</span>
                  </div>
                )}
                {e.location && (
                  <div className="row">
                    <span className="ic">
                      <Pin />
                    </span>
                    <span>{e.location}</span>
                  </div>
                )}
              </div>
              <p className="event-card__desc">{e.description}</p>
              {(e.rsvp || e.instagram) && (
                <div className="event-card__foot">
                  {e.rsvp && (
                    <a
                      className="btn btn--primary"
                      href={e.rsvp}
                      target="_blank"
                      rel="noopener"
                    >
                      RSVP / Details
                    </a>
                  )}
                  {e.instagram && (
                    <a
                      className="btn btn--ghost"
                      href={e.instagram}
                      target="_blank"
                      rel="noopener"
                    >
                      Instagram ↗
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
