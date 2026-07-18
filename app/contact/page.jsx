import Frame from "@/components/Frame";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Sponsors from "@/components/Sponsors";
import { CityStamp } from "@/components/Deco";
import { org, stamps } from "@/lib/data";

export const metadata = { title: "Contact Us · Rutgers CSO" };

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
const IgIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const PinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 21s-7-5.3-7-11a7 7 0 0 1 14 0c0 5.7-7 11-7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
const CalIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="17" rx="1" />
    <path d="M3 9h18M8 2v4M16 2v4" />
  </svg>
);

export default function ContactPage() {
  return (
    <>
      <PageHero cn="联系我们" en="Contact Us">
        Questions, collaborations, or just want to say hi? We&apos;d love to
        hear from you.
      </PageHero>

      <section className="section wrap" style={{ paddingTop: "1rem" }}>
        <Reveal>
          <Frame no="01">
            <div className="contact-grid">
              <div className="contact-info">
                <div
                  className="sec-title"
                  style={{ textAlign: "left", marginBottom: "1rem" }}
                >
                  <p className="sec-title__cn" style={{ margin: 0 }}>
                    联系方式
                  </p>
                  <h2 className="sec-title__en" style={{ margin: ".1rem 0" }}>
                    Get in Touch
                  </h2>
                </div>

                <div className="contact-line">
                  <div className="ic">
                    <MailIcon />
                  </div>
                  <div>
                    <h4>Email Us</h4>
                    <p>
                      <a href={`mailto:${org.email}`}>{org.email}</a>
                    </p>
                  </div>
                </div>
                <div className="contact-line">
                  <div className="ic">
                    <IgIcon />
                  </div>
                  <div>
                    <h4>Follow Us</h4>
                    <p>
                      <a href={org.instagram} target="_blank" rel="noopener">
                        {org.instagramHandle}
                      </a>{" "}
                      — DMs open!
                    </p>
                  </div>
                </div>
                <div className="contact-line">
                  <div className="ic">
                    <PinIcon />
                  </div>
                  <div>
                    <h4>Where to Find Us</h4>
                    <p>{org.location}</p>
                  </div>
                </div>
                <div className="contact-line">
                  <div className="ic">
                    <CalIcon />
                  </div>
                  <div>
                    <h4>Meetings</h4>
                    <p>{org.meetingInfo}</p>
                  </div>
                </div>

                <div className="social-row" style={{ marginTop: ".4rem" }}>
                  <a
                    className="social-pill"
                    href={org.instagram}
                    target="_blank"
                    rel="noopener"
                  >
                    <IgIcon /> Follow on Instagram
                  </a>
                  <a className="social-pill" href={`mailto:${org.email}`}>
                    <MailIcon /> Email Us
                  </a>
                </div>
              </div>

              <div>
                <div
                  className="sec-title"
                  style={{ textAlign: "left", marginBottom: "1rem" }}
                >
                  <p className="sec-title__cn" style={{ margin: 0 }}>
                    给我们留言
                  </p>
                  <h2 className="sec-title__en" style={{ margin: ".1rem 0" }}>
                    Send a Message
                  </h2>
                </div>
                <ContactForm />
              </div>
            </div>
          </Frame>
        </Reveal>
      </section>

      <section className="section wrap" style={{ paddingTop: 0 }}>
        <Reveal>
          <Frame lotus no="02">
            <span
              className="wash"
              style={{ left: -42, top: "22%", width: 185, height: 108 }}
              aria-hidden="true"
            />
            <span
              className="wash"
              style={{ right: "18%", bottom: -32, width: 225, height: 118 }}
              aria-hidden="true"
            />
            <CityStamp
              {...stamps.contact}
              className="deco-stamp"
              style={{ right: -14, bottom: 18, width: 170 }}
            />
            <SectionTitle
              cn="赞助商"
              en="Our Sponsors & Partners"
              lede="Thank you to the organizations that make our events possible."
            />
            <Sponsors />
          </Frame>
        </Reveal>
      </section>
    </>
  );
}
