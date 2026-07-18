"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Frame from "@/components/Frame";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import Marquee from "@/components/Marquee";
import Collage from "@/components/Collage";
import HudWeather from "@/components/HudWeather";
import { Arrow, CityStamp, Star, Stamp } from "@/components/Deco";
import { stamps } from "@/lib/data";

const BRUSH = Array.from("中国学生会");
const EASE = [0.2, 0.7, 0.2, 1];

const HIGHLIGHTS = [
  {
    no: "01",
    cn: "活动",
    title: "Cultural Events",
    text: "Festivals, galas, and workshops all year long — come celebrate with us.",
    href: "/events",
    cta: "Explore Events",
  },
  {
    no: "02",
    cn: "团队",
    title: "Our Team",
    text: "Meet the e-board behind the org and learn about our story and vision.",
    href: "/about",
    cta: "About Us",
  },
  {
    no: "03",
    cn: "联系",
    title: "Stay Connected",
    text: "Follow us on Instagram and reach out — we'd love to hear from you.",
    href: "/contact",
    cta: "Contact Us",
  },
];

export default function Home() {
  const { scrollY } = useScroll();
  const yCollage = useTransform(scrollY, (v) => v * -0.06);

  return (
    <>
      <header className="hero hero--poster wrap panel">
        <div className="hero__split" aria-hidden="true" />
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: -1,
            pointerEvents: "none",
            y: yCollage,
          }}
          aria-hidden="true"
        >
          <Collage />
        </motion.div>
        <motion.div
          className="hero__postal"
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Stamp image={stamps.rail.image} />
          <span className="hero__mark">文化社区交流</span>
        </motion.div>

        <motion.div
          className="hud"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span>
            <span className="hud__dot">●</span> 已连接 Connected — 中国学生会
            network
          </span>
          <HudWeather />
        </motion.div>

        <CityStamp
          {...stamps.home}
          className="deco-stamp"
          style={{
            right: "6px",
            bottom: "6%",
            width: "clamp(140px, 14vw, 200px)",
            zIndex: 0,
          }}
        />

        <div className="hero__body">
          <span className="hero__cloud" aria-hidden="true" />
          <div className="hero__main">
            <motion.p
              className="quote"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <span className="cn">万物皆有其美</span>
              Everything has its beauty — but not everyone sees it.
            </motion.p>
            <p className="hero__cn" aria-label="中国学生会">
              {BRUSH.map((ch, i) => (
                <motion.span
                  key={i}
                  style={{ display: "inline-block" }}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + i * 0.09,
                    ease: EASE,
                  }}
                >
                  {ch}
                </motion.span>
              ))}
            </p>

            <motion.h1
              className="hero__en"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Chinese Student Organization
            </motion.h1>
            <motion.p
              className="hero__tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
            >
              Rutgers University&apos;s home for Chinese culture, community, and
              connection. Celebrating our heritage and welcoming everyone to the
              family.
            </motion.p>

            <div className="hero__stickers">
              {[
                { cls: "sticker--red", text: "全员欢迎 · All welcome", d: 1.0 },
                { cls: "sticker--blue", text: "Est. Rutgers", d: 1.12 },
                { cls: "sticker--gold", text: "Free admission", d: 1.24 },
              ].map((s) => (
                <motion.span
                  key={s.text}
                  className={`sticker ${s.cls}`}
                  initial={{ opacity: 0, scale: 1.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 17,
                    delay: s.d,
                  }}
                >
                  {s.text}
                </motion.span>
              ))}
            </div>

            <motion.div
              className="hero__cta"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.05 }}
            >
              <Link className="btn btn--primary" href="/events">
                See Upcoming Events
              </Link>
              <Link className="btn btn--ghost" href="/about">
                Meet the Team
              </Link>
            </motion.div>
          </div>

          <div className="hero__side">
            <motion.div
              className="hero__giant"
              aria-hidden="true"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
            >
              华人之家
            </motion.div>
            <motion.div
              className="chat"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="chat__bar">▶ Now entering 中国学生会</div>
              <div className="chat__body">
                <p className="chat__msg">
                  <span className="cn">嘿，你在吗？</span> Hey, are you there?
                </p>
                <Link className="btn btn--primary chat__reply" href="/contact">
                  Join us →
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="hero__arrow"
              initial={{ opacity: 0, x: 26 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Arrow />
            </motion.div>
          </div>
        </div>

        <div className="scroll-cue">
          <span>Scroll</span>
          <span className="scroll-cue__dot" />
        </div>
      </header>

      <Marquee />
      <Marquee variant="blue" />

      <section
        className="wrap panel panel--tight"
        style={{ paddingTop: "3rem" }}
      >
        <Reveal>
          <Frame no="01">
            <SectionTitle cn="欢迎" en="Welcome to CSO" />
            <div
              className="prose"
              style={{
                maxWidth: "66ch",
                marginInline: "auto",
                textAlign: "center",
              }}
            >
              <p>
                The Chinese Student Organization is a student-run community at
                Rutgers dedicated to celebrating Chinese culture and creating a
                home away from home. From our signature Lunar New Year Gala to
                casual boba socials, we bring students together through food,
                festivals, and friendship — no background required, everyone is
                welcome.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: ".8rem",
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: "1.4rem",
              }}
            >
              <Link className="btn btn--blue" href="/events">
                Upcoming Events
              </Link>
              <Link className="btn btn--ghost" href="/contact">
                Get Involved
              </Link>
            </div>
          </Frame>
        </Reveal>
      </section>

      <div className="wrap divider-strip" aria-hidden="true">
        <span className="divider-strip__rule" />
        <Star />
        <span className="cn">文化 · 社区 · 交流</span>
        <Star />
        <span className="divider-strip__rule" />
      </div>

      <section
        className="wrap panel panel--tight"
        style={{ paddingBottom: "3.5rem" }}
      >
        <SectionTitle cn="精彩" en="Explore CSO" />
        <Reveal>
          <div className="poster-grid">
            {HIGHLIGHTS.map((c) => (
              <div className="poster-cell" key={c.no}>
                <div className="poster-cell__no">
                  <span>No. {c.no}</span>
                  <span className="cn">{c.cn}</span>
                </div>
                <h3 className="poster-cell__title">{c.title}</h3>
                <p className="poster-cell__text">{c.text}</p>
                <Link className="poster-cell__link" href={c.href}>
                  {c.cta} →
                </Link>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
