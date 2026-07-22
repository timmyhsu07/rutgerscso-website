import ChapterTag from "./ChapterTag";
import Reveal from "./Reveal";

/**
 * Masthead for every page except home, which gets the full-height Hero.
 */
export default function PageHead({ tag, cn, title, children, meta }) {
  return (
    <header className="page-head grid-paper">
      <div className="chapter">
        <ChapterTag>{tag}</ChapterTag>
        <div className="page-head__row">
          <Reveal>
            <p className="page-head__cn">{cn}</p>
            <h1 className="page-head__title">{title}</h1>
          </Reveal>
          <Reveal as="div" className="page-head__deck">
            {children}
          </Reveal>
        </div>
        {meta?.length ? (
          <Reveal as="ul" className="page-head__meta">
            {meta.map((item) => (
              <li key={item.label}>
                <span>{item.label}</span>
                <b>{item.value}</b>
              </li>
            ))}
          </Reveal>
        ) : null}
      </div>
    </header>
  );
}
