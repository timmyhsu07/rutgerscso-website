import Reveal from "./Reveal";
import { upcomingEvents } from "@/lib/data";

export default function UpcomingEvents({ items = upcomingEvents }) {
  if (!items.length) {
    return (
      <p className="empty-note">
        Nothing on the calendar right now — Instagram gets the next date first.
      </p>
    );
  }

  return (
    <div className="event-list">
      {items.map((event) => (
        <Reveal as="article" className="event-entry" key={event.no}>
          <div className="event-entry__rail">
            <span className="event-entry__no">{event.no}</span>
            <span className="event-entry__glyph" aria-hidden="true">
              {event.cn}
            </span>
            <span className="event-entry__when">{event.when}</span>
          </div>

          <div className="event-entry__main">
            {event.tag ? (
              <span className="event-entry__tag">{event.tag}</span>
            ) : null}
            <h3 className="event-entry__title">{event.title}</h3>
            <p className="event-entry__copy">{event.description}</p>
          </div>

          <div className="event-entry__side">
            <ul className="event-entry__meta">
              {event.time ? (
                <li>
                  <span>Time</span>
                  <b>{event.time}</b>
                </li>
              ) : null}
              {event.location ? (
                <li>
                  <span>Place</span>
                  <b>{event.location}</b>
                </li>
              ) : null}
            </ul>
            {event.rsvp ? (
              <a
                className="text-link"
                href={event.rsvp}
                target="_blank"
                rel="noopener"
              >
                Details
              </a>
            ) : null}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
