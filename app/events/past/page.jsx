import ChapterTag from "@/components/ChapterTag";
import PageHead from "@/components/PageHead";
import PartnersNote from "@/components/PartnersNote";
import PastEventsArchive from "@/components/PastEventsArchive";
import Reveal from "@/components/Reveal";
import { org, pastEvents } from "@/lib/data";

export const metadata = {
  title: "Past Events",
  description: `An archive of past gatherings, galas, workshops, and socials run by the ${org.name} at ${org.school}.`,
};

const years = [...new Set(pastEvents.map((event) => event.year))];
const span = years.length > 1 ? `${years.at(-1)}–${years[0]}` : years[0];

export default function PastEventsPage() {
  return (
    <>
      <PageHead
        tag="01 / Look back / 往期回顾"
        cn="往期回顾"
        title="Past events."
        meta={[
          { label: "Events logged", value: String(pastEvents.length) },
          { label: "Years covered", value: span },
          { label: "Still running", value: "All of them" },
        ]}
      >
        <p>
          Everything we have already thrown, newest first. Recaps and photos get
          added here after each one wraps.
        </p>
      </PageHead>

      <section className="grid-paper" aria-labelledby="archive-title">
        <div className="chapter">
          <ChapterTag>02 / The archive / 存档</ChapterTag>
          <Reveal className="events-head">
            <h2 id="archive-title">
              What we
              <br />
              made.
            </h2>
            <p>
              Some of these run every year, some happened once because somebody
              suggested it in a group chat. Both count.
            </p>
          </Reveal>

          <PastEventsArchive />

          <PartnersNote label="Next up" href="/events" cta="Upcoming events">
            The archive only grows if you show up — here is what is on the
            calendar now.
          </PartnersNote>
        </div>
      </section>
    </>
  );
}
