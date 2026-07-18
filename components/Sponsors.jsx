import Reveal from "./Reveal";
import { sponsorTiers } from "@/lib/data";

export default function Sponsors() {
  const total = sponsorTiers.reduce(
    (n, t) => n + ((t.sponsors && t.sponsors.length) || 0),
    0,
  );
  if (!total) {
    return (
      <p className="empty-note">
        We’re grateful to our supporters — sponsor logos will be featured here.
        Interested in partnering with us? Say hello above!
      </p>
    );
  }
  return (
    <>
      {sponsorTiers.map((t, ti) =>
        t.sponsors && t.sponsors.length ? (
          <div key={ti}>
            <div className="sponsor-tier">{t.tier}</div>
            <div className="grid grid--sponsors">
              {t.sponsors.map((s, i) => {
                const inner = s.logo ? (
                  <img src={s.logo} alt={s.name} />
                ) : (
                  <span className="sponsor-card__name">{s.name}</span>
                );
                return (
                  <Reveal key={i} delay={(i % 5) * 0.06}>
                    {s.url ? (
                      <a
                        className="sponsor-card"
                        href={s.url}
                        target="_blank"
                        rel="noopener"
                        title={s.name}
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="sponsor-card" title={s.name}>
                        {inner}
                      </div>
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        ) : null,
      )}
    </>
  );
}
