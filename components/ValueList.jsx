import { values } from "@/lib/data";

export default function ValueList() {
  return (
    <ul className="value-list" aria-label="Our values">
      {values.map((value) => (
        <li key={value.no}>
          <b>{value.glyph}</b>
          <span>{value.label}</span>
          <span>{value.no} →</span>
        </li>
      ))}
    </ul>
  );
}
