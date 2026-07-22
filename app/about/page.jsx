import BoardGrid from "@/components/BoardGrid";
import ChapterTag from "@/components/ChapterTag";
import ConnectionCard from "@/components/ConnectionCard";
import PageHead from "@/components/PageHead";
import PartnersNote from "@/components/PartnersNote";
import Reveal from "@/components/Reveal";
import ValueList from "@/components/ValueList";
import VisualStory from "@/components/VisualStory";
import { org } from "@/lib/data";

export const metadata = {
  title: "About",
  description: `Who the ${org.name} at ${org.school} is, what we stand for, and the students who run it.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHead
        tag="01 / Who we are / 关于我们"
        cn="关于我们"
        title="About CSO."
        meta={[
          { label: "Founded at", value: "Rutgers – New Brunswick" },
          { label: "Open to", value: "Every student, every year" },
          { label: "Dues", value: "None" },
        ]}
      >
        <p>
          A student-run community celebrating Chinese culture across Rutgers —
          traditions, new ideas, shared meals, and the friendships that turn a
          huge campus into somewhere familiar.
        </p>
      </PageHead>

      <section className="grid-paper" aria-labelledby="story-title">
        <div className="chapter">
          <ChapterTag>02 / Our story / 我们的故事</ChapterTag>
          <div className="about-layout">
            <VisualStory />
            <Reveal className="about-copy">
              <p className="cn">一个校园，一个家。</p>
              <h3 id="story-title">A home away from home.</h3>
              <p>
                CSO started the way most student communities do — a small group
                of people who wanted somewhere to celebrate the holidays they
                grew up with, and somewhere to bring friends who had never
                celebrated them at all.
              </p>
              <p>
                That is still the shape of it. We run a handful of large
                celebrations, a steady rhythm of small ones, and workshops built
                around whatever our members want to share that year.
              </p>
              <p>
                Whether you grew up with the culture, are reconnecting with it,
                or are simply curious, there is a place for you here. No
                background required, no audition, no dues.
              </p>
              <ValueList />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="night" aria-labelledby="belong-title">
        <div className="chapter night-intro">
          <ConnectionCard label="Come by +" />
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
              members, and make every gathering happen. Member names drop into
              these role cards once the roster is set for the year.
            </Reveal>
          </div>

          <BoardGrid />

          <PartnersNote
            label="Join the board"
            href="/contact"
            cta="Ask about a role"
          >
            Elections run at the end of each spring semester — every role is
            open to any member.
          </PartnersNote>
        </section>
      </section>
    </>
  );
}
