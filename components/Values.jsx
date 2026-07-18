import Reveal from "./Reveal";
import { values } from "@/lib/data";

export default function Values() {
  return (
    <div className="grid grid--values">
      {values.map((v, i) => (
        <Reveal key={i} delay={i * 0.08}>
          <div className="value-card">
            <div className="value-card__cn">{v.cn}</div>
            <h3 className="value-card__title">{v.title}</h3>
            <p className="value-card__text">{v.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
