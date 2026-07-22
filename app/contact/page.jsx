import ContactSection from "@/components/ContactSection";
import PageHead from "@/components/PageHead";
import PartnersNote from "@/components/PartnersNote";
import { org } from "@/lib/data";

export const metadata = {
  title: "Contact",
  description: `Reach the ${org.name} at ${org.school} — questions, collaborations, event ideas, or a first gathering to come to.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHead
        tag="01 / Come say hello / 联系我们"
        cn="联系我们"
        title="Contact."
        meta={[
          { label: "Email", value: org.email },
          { label: "Instagram", value: org.instagramHandle },
          { label: "Reply time", value: "A few days" },
        ]}
      >
        <p>
          Questions, collaborations, event ideas, or just looking for your first
          CSO gathering — all of it lands in the same inbox.
        </p>
      </PageHead>

      <section className="night">
        <ContactSection tag="02 / Send a note / 给我们留言">
          <p>
            This form opens your own email app with the details already filled
            in — nothing is stored on the site, and nothing is sent until you
            press send.
          </p>
        </ContactSection>

        <div className="chapter" style={{ paddingTop: 0 }}>
          <PartnersNote
            label="Sponsors + partners"
            href={`mailto:${org.email}?subject=CSO%20Partnership`}
            cta="Start a conversation"
            external
          >
            Interested in supporting a CSO event or campus collaboration?
          </PartnersNote>
        </div>
      </section>
    </>
  );
}
