import { GraduationCap, MapPin } from "lucide-react";
import Section from "./Section";
import { education } from "@/lib/data";

export default function Education() {
  return <Section id="education" title="Education" subtitle="My academic background.">
    <div className="education-timeline">{education.map(edu => <article key={edu.degree} className="education-card glass-panel">
      <div className="education-icon"><GraduationCap size={30} /></div>
      <div className="education-content"><span className="period">{edu.period}</span><h3>{edu.degree}</h3><p className="education-school">{edu.school}<span>{edu.college}</span></p>
        <p className="education-location"><MapPin size={15} />{edu.location}</p><ul>{edu.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
      </div>
    </article>)}</div>
  </Section>;
}
