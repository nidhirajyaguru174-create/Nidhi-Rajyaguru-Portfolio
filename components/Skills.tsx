import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import { skills } from "@/lib/data";

export default function Skills() {
  return <Section id="skills" title="Skills & Tools" subtitle="Technologies and tools I work with.">
    <div className="skills-grid">{skills.map((group, i) => <div className="skill-card glass-panel" key={group.category}>
      <div className="skill-card-heading"><span className="eyebrow">0{i + 1}</span><h3>{group.category}</h3><ArrowUpRight size={22} aria-hidden="true" /></div>
      <ul className="skill-pills">{group.items.map(item => <li key={item}>{item}</li>)}</ul>
    </div>)}</div>
  </Section>;
}
