export default function Frame({
  children,
  featured = false,
  lotus = false,
  no,
  className = "",
}) {
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
