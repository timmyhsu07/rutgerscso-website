import ChapterTag from "./ChapterTag";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";
import { contactChannels } from "@/lib/data";

export default function ContactSection({ tag, children }) {
  return (
    <section
      className="chapter contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-layout">
        <Reveal className="contact-copy">
          {tag ? <p className="chapter-tag">{tag}</p> : null}
          <h2 id="contact-title">
            Join the
            <br />
            signal.
          </h2>
          {children}
          <ul className="contact-list">
            {contactChannels.map((channel) => (
              <li key={channel.label}>
                <span>{channel.label}</span>
                {channel.href ? (
                  <a
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener" : undefined}
                  >
                    {channel.value}
                  </a>
                ) : (
                  <span className="contact-list__plain">{channel.value}</span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="div">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
