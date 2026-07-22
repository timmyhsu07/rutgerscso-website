import Reveal from "./Reveal";
import { ART } from "./art/Illustrations";
import { pastEvents } from "@/lib/data";

/** Groups events by year, newest first, preserving data order within a year. */
function groupByYear(events) {
  const years = new Map();
  events.forEach((event) => {
    if (!years.has(event.year)) years.set(event.year, []);
    years.get(event.year).push(event);
  });
  return [...years.entries()];
}

export default function PastEventsArchive({ items = pastEvents }) {
  if (!items.length) {
    return (
      <p className="empty-note">
        The archive is empty for now — photos and recaps land here after each
        event.
      </p>
    );
  }

  return (
    <div className="archive">
      {groupByYear(items).map(([year, events]) => (
        <section
          className="archive-year"
          key={year}
          aria-label={`${year} events`}
        >
          <Reveal as="header" className="archive-year__head">
            <h3 className="archive-year__no">{year}</h3>
            <span className="archive-year__count">
              {events.length} {events.length === 1 ? "event" : "events"}
            </span>
          </Reveal>

          <div className="past-grid">
            {events.map((event) => {
              const Art = ART[event.art] || ART.campus;
              return (
                <Reveal
                  as="article"
                  className="past-card"
                  key={`${event.year}-${event.title}-${event.when}`}
                >
                  <div className="past-card__art">
                    <Art preserveAspectRatio="xMidYMid slice" />
                    {event.tag ? (
                      <span className="past-card__tag">{event.tag}</span>
                    ) : null}
                  </div>
                  <div className="past-card__body">
                    <span className="past-card__when">{event.when}</span>
                    <h4 className="past-card__title">{event.title}</h4>
                    <p className="past-card__copy">{event.copy}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
