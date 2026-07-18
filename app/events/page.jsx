import Link from "next/link";
import Frame from "@/components/Frame";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import PageHero from "@/components/PageHero";
import EventsGrid from "@/components/EventsGrid";
import PastGrid from "@/components/PastGrid";
import { CityStamp } from "@/components/Deco";
import { org, stamps } from "@/lib/data";

export const metadata = { title: "Events · Rutgers CSO" };

export default function EventsPage() {
  return (
    <>
      <PageHero cn="活动" en="Events">
        From our signature Lunar New Year Gala to laid-back boba socials — here&apos;s
        what&apos;s happening and what you missed. Follow{" "}
        <a href={org.instagram} target="_blank" rel="noopener">{org.instagramHandle}</a> for
        real-time updates.
      </PageHero>

      <section className="section wrap" style={{ paddingTop: "1rem" }}>
        <Reveal>
          <Frame no="01">
            <SectionTitle cn="近期活动" en="Upcoming Events" lede="Mark your calendars and RSVP early — spots fill up fast!" />
            <EventsGrid />
          </Frame>
        </Reveal>
      </section>

      <section className="section wrap" style={{ paddingTop: 0 }}>
        <Reveal>
          <Frame lotus no="02">
            <span className="wash" style={{ left: -44, top: "24%", width: 190, height: 110 }} aria-hidden="true" />
            <span className="wash" style={{ right: "16%", bottom: -34, width: 230, height: 120 }} aria-hidden="true" />
            <CityStamp {...stamps.events} className="deco-stamp" style={{ right: -14, bottom: 18, width: 170, }} />
            <SectionTitle cn="往期回顾" en="Past Events" lede="A look back at the memories we've made together." />
            <PastGrid />
          </Frame>
        </Reveal>
      </section>
    </>
  );
}
