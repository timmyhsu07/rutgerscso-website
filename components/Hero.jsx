import { org } from "@/lib/data";
import HeroMosaic from "./HeroMosaic";

export default function Hero() {
  return (
    <section className="hero grid-paper" id="home" aria-labelledby="hero-title">
      <p className="hero-kicker">Culture study / {new Date().getFullYear()}</p>

      <HeroMosaic />

      <div className="hero-index">
        <div className="hero-index__date" aria-hidden="true">
          NEW
          <br />
          BRUNS
          <br />
          WICK
          <br />
          {new Date().getFullYear()}
        </div>
        <h1 className="hero-index__title" id="hero-title">
          {org.nameCnFull}
        </h1>
        <div className="hero-index__sub">
          {org.short}
          <br />
          Culture &amp; connection
        </div>
      </div>

      <div className="hero-deck">
        <p className="hero-deck__title">Culture moves here.</p>
        <p>
          {org.school}’s home for Chinese culture, community, and connection.
          Every background. Every class year. Everyone welcome.
        </p>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span>Scroll</span>
      </div>
    </section>
  );
}
