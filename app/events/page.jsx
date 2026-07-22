import ChapterTag from "@/components/ChapterTag";
import PageHead from "@/components/PageHead";
import PartnersNote from "@/components/PartnersNote";
import ProgramList from "@/components/ProgramList";
import Reveal from "@/components/Reveal";
import UpcomingEvents from "@/components/UpcomingEvents";
import { org, upcomingEvents } from "@/lib/data";

export const metadata = {
  title: "Events",
  description: `Upcoming gatherings, galas, workshops, and socials from the ${org.name} at ${org.school}.`,
};

export default function EventsPage() {
  return (
    <>
      <PageHead
        tag="01 / Gather with us / 活动"
        cn="活动"
        title="Events."
        meta={[
          {
            label: "On the calendar",
            value: `${upcomingEvents.length} events`,
          },
          { label: "Cost", value: "Free or member rate" },
          { label: "Live updates", value: org.instagramHandle },
        ]}
      >
        <p>
          From the Lunar New Year Gala down to a Thursday boba run. Dates firm
          up a few weeks out — Instagram always gets them first.
        </p>
      </PageHead>

      <section className="events grid-paper" aria-labelledby="upcoming-title">
        <div className="chapter">
          <ChapterTag>02 / What is next / 即将举行</ChapterTag>
          <Reveal className="events-head">
            <h2 id="upcoming-title">
              Coming
              <br />
              up.
            </h2>
            <p>
              Times and rooms are confirmed closer to each date. Nothing here
              needs an invitation — turning up is the whole entry requirement.
            </p>
          </Reveal>

          <UpcomingEvents />
        </div>
      </section>

      <section className="night" aria-labelledby="programs-title">
        <div className="chapter">
          <ChapterTag>03 / What we run / 常设活动</ChapterTag>
          <Reveal className="events-head">
            <h2 id="programs-title">
              Every
              <br />
              year.
            </h2>
            <p>
              Three programs anchor the calendar. Everything else grows around
              them, usually because a member asked for it.
            </p>
          </Reveal>

          <ProgramList />

          <PartnersNote
            label="The archive"
            href="/events/past"
            cta="Past events"
          >
            Looking for something we already ran? Every past gathering is
            collected by year.
          </PartnersNote>
        </div>
      </section>
    </>
  );
}
