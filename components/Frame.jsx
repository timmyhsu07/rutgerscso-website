/* Poster sheet: hard 2px border, offset block shadow, and a mono catalog
   strip across the top (like a print-spec label). `lotus` flips the sheet
   to the front page's charcoal LOTUS ground (same in both themes). */
export default function Frame({ children, featured = false, lotus = false, no, className = "" }) {
  const cls =
    "poster" +
    (featured ? " poster--featured" : "") +
    (lotus ? " poster--lotus" : "") +
    (className ? " " + className : "");
  return (
    <div className={cls}>
      <div className="poster__meta">
        <span>Rutgers · 中国学生会</span>
        <span className="no">{no ? `No. ${no}` : "Est. New Brunswick"}</span>
      </div>
      {children}
    </div>
  );
}
