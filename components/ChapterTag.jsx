import Reveal from "./Reveal";

/** The numbered rule-and-caption that opens every section. */
export default function ChapterTag({ children, className = "" }) {
  return (
    <Reveal as="p" className={`chapter-tag ${className}`.trim()}>
      {children}
    </Reveal>
  );
}
