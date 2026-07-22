import Link from "next/link";
import BoardGrid from "@/components/BoardGrid";
import ChapterTag from "@/components/ChapterTag";
import ConnectionCard from "@/components/ConnectionCard";
import Hero from "@/components/Hero";
import PartnersNote from "@/components/PartnersNote";
import ProgramList from "@/components/ProgramList";
import Reveal from "@/components/Reveal";
import ValueList from "@/components/ValueList";
import VisualStory from "@/components/VisualStory";
import { org } from "@/lib/data";

/** Deeper pages, presented as the back half of the home page index. */
const SITE_INDEX = [
  {
    no: "04 / 历",
    title: "Past events",
    copy: "Every gala, night market, workshop, and weeknight social we have run, year by year.",
    href: "/events/past",
    linkLabel: "Open the archive",
  },
  {
    no: "05 / 会",
    title: "The E-Board",
    copy: "The student leaders who build the calendar, tell our story, and welcome new members.",
    href: "/about",
    linkLabel: "Meet the team",
  },
  {
    no: "06 / 联",
    title: "Say hello",
    copy: "Questions, collaborations, event ideas, or a first gathering to show up to.",
    href: "/contact",
    linkLabel: "Contact us",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="grid-paper" id="about" aria-labelledby="about-title">
        <div className="chapter">
          <ChapterTag>01 / Who we are / 关于我们</ChapterTag>
          <div className="about-layout">
            <VisualStory />
            <Reveal className="about-copy">
              <p className="cn">一个校园，一个家。</p>
              <h3 id="about-title">A home away from home.</h3>
              <p>
                CSO is a student-run community celebrating Chinese culture
                across Rutgers. We make room for traditions, new ideas, shared
                meals, and the friendships that turn a huge campus into
                somewhere familiar.
              </p>
              <p>
                Whether you grew up with the culture, are reconnecting with it,
                or are simply curious, there is a place for you here.
              </p>
              <Link className="text-link" href="/about">
                Read our story
              </Link>
              <ValueList />
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="events grid-paper"
        id="events"
        aria-labelledby="events-title"
      >
        <div className="chapter">
          <ChapterTag>02 / Gather with us / 活动</ChapterTag>
          <Reveal className="events-head">
            <h2 id="events-title">
              Make
              <br />
              memories.
            </h2>
            <p>
              Our calendar moves from signature celebrations to low-key
              weeknight hangs. Follow <strong>{org.instagramHandle}</strong> for
              live dates, rooms, and RSVP details.
            </p>
          </Reveal>

          <ProgramList />

          <PartnersNote
            label="Full calendar"
            href="/events"
            cta="See all events"
          >
            Dates, rooms, and RSVP details for everything coming up this
            semester.
          </PartnersNote>
        </div>
      </section>

      <section className="night" aria-labelledby="belong-title">
        <div className="chapter night-intro">
          <ConnectionCard />
          <ChapterTag>03 / Find your people / 社区</ChapterTag>
          <Reveal className="night-statement">
            <p>
              Belonging does not need a long introduction. It starts with
              showing up, learning somebody’s name, and finding out you already
              have more in common than you thought.
            </p>
            <h2 id="belong-title">
              Meet. Make.
              <br />
              Belong.
            </h2>
          </Reveal>
        </div>

        <section
          className="chapter board"
          id="board"
          aria-labelledby="board-title"
        >
          <div className="board-head">
            <div>
              <ChapterTag>04 / The people behind CSO / 执行委员会</ChapterTag>
              <Reveal as="h2" id="board-title">
                E-Board.
              </Reveal>
            </div>
            <Reveal as="p">
              Student leaders build the calendar, tell our story, welcome new
              members, and make every gathering happen.
            </Reveal>
          </div>

          <BoardGrid />
        </section>

        <section className="chapter" aria-labelledby="index-title">
          <ChapterTag>05 / Keep going / 继续</ChapterTag>
          <Reveal className="events-head">
            <h2 id="index-title">
              More to
              <br />
              explore.
            </h2>
            <p>
              The rest of the site, in the order most people read it — what we
              have already done, who runs it, and how to reach us.
            </p>
          </Reveal>

          <ProgramList items={SITE_INDEX} />
        </section>
      </section>
    </>
  );
}
