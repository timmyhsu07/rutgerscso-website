import Frame from "@/components/Frame";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import PageHero from "@/components/PageHero";
import Values from "@/components/Values";
import EboardGrid from "@/components/EboardGrid";
import { CityStamp } from "@/components/Deco";
import { stamps } from "@/lib/data";

export const metadata = { title: "About Us · Rutgers CSO" };

export default function AboutPage() {
  return (
    <>
      <PageHero cn="关于我们" en="About Us">
        Who we are, where we came from, and where we&apos;re headed.
      </PageHero>

      <section className="section wrap" style={{ paddingTop: "1rem" }}>
        <Reveal>
          <Frame no="01">
            <SectionTitle cn="我们的故事" en="Our History" />
            <div className="prose" style={{ maxWidth: "72ch", marginInline: "auto" }}>
              <p>
                <em>[Placeholder history — replace this with your own story.]</em>{" "}
                Founded by a small group of students who wanted a space to celebrate their
                heritage, the Chinese Student Organization has grown into one of Rutgers&apos;
                most active cultural communities. What began as informal gatherings over
                home-cooked meals has blossomed into a full calendar of festivals,
                performances, and traditions shared with the whole campus.
              </p>
              <p>
                Over the years, we&apos;ve welcomed hundreds of members from every background
                and class year. Whether you grew up speaking Mandarin at home, are
                reconnecting with your roots, or are simply curious about Chinese culture,
                there has always been a place for you here.
              </p>
            </div>
          </Frame>
        </Reveal>
      </section>

      <section className="section wrap" style={{ paddingTop: 0 }}>
        <Reveal>
          <Frame lotus no="02">
            <span className="wash" style={{ left: -40, top: "20%", width: 180, height: 105 }} aria-hidden="true" />
            <span className="wash" style={{ right: "20%", bottom: -32, width: 220, height: 115 }} aria-hidden="true" />
            <CityStamp {...stamps.about} className="deco-stamp" style={{ right: -14, bottom: 18, width: 170, }} />
            <SectionTitle cn="使命与愿景" en="What We Do & Our Vision" />
            <div className="prose" style={{ maxWidth: "72ch", marginInline: "auto", textAlign: "center", marginBottom: "1.6rem" }}>
              <p>
                <em>[Placeholder mission — replace with your own words.]</em> Our mission is
                to celebrate and share Chinese culture, foster a welcoming community for
                students, and build bridges across the diverse cultures at Rutgers. We
                envision a campus where every student can find belonging, tradition, and
                lifelong friendship.
              </p>
            </div>
            <Values />
          </Frame>
        </Reveal>
      </section>

      <section className="section wrap" style={{ paddingTop: 0 }}>
        <Reveal>
          <Frame no="03">
            <SectionTitle cn="执行委员会" en="Meet the E-Board" lede="The students who make it all happen. This roster grows itself as we add members." />
            <EboardGrid />
          </Frame>
        </Reveal>
      </section>
    </>
  );
}
