import { Star } from "./Deco";

/* Ticker strip. The sequence renders twice so the -50% keyframe loops
   seamlessly. `variant="blue"` runs the opposite direction on print blue. */
const RED_ITEMS = [
  { cn: "中国学生会" },
  { text: "Rutgers CSO" },
  { text: "New Brunswick · NJ" },
  { cn: "文化 · 社区 · 交流" },
  { text: "Everyone welcome" },
];
const BLUE_ITEMS = [
  { text: "Now boarding" },
  { cn: "下一站 · 中国学生会" },
  { text: "Follow @rutgerscso" },
  { text: "Free admission" },
  { cn: "全员欢迎" },
];

function Seq({ items }) {
  return (
    <div className="marquee__seq" aria-hidden="true">
      {items.map((it, i) => (
        <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "2.4rem" }}>
          <span className={it.cn ? "cn" : undefined}>{it.cn || it.text}</span>
          <Star />
        </span>
      ))}
    </div>
  );
}

export default function Marquee({ variant = "red" }) {
  const items = variant === "blue" ? BLUE_ITEMS : RED_ITEMS;
  return (
    <div className={"marquee" + (variant === "blue" ? " marquee--blue" : "")}>
      <div className="marquee__track">
        <Seq items={items} />
        <Seq items={items} />
      </div>
    </div>
  );
}
