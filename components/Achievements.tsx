import { ArrowUpRight, FileText, Sparkles, Trophy } from "lucide-react";
import Section from "./Section";
import { achievements, achievementsMessage } from "@/lib/data";

export default function Achievements() {
  return <Section id="achievements" title="Achievements & Certifications" subtitle="Certifications, hackathons, courses, and other accomplishments.">
    {achievements.map(item => <div className="achievement-grid" key={item.title}>
      <article className="winner-card glass-panel" aria-labelledby="agnitia-achievement-title">
        <div className="winner-card-top"><span className="eyebrow">Hackathon achievement</span><Trophy size={27} aria-hidden="true" /></div>
        <span className="winner-position">01<span>First Position — Winner</span></span>
        <h3 id="agnitia-achievement-title">{item.title}</h3>
        <p>{item.description}</p>
        <span className="winner-event-type">{item.eventType}</span>
      </article>
      <article className="certificate-card glass-panel" aria-labelledby="agnitia-certificate-title">
        <div className="certificate-heading"><span className="eyebrow">Certificate</span><span className="certificate-format">PDF</span></div>
        <div className="certificate-symbol" aria-hidden="true"><FileText size={52} strokeWidth={1} /></div>
        <h3 id="agnitia-certificate-title">{item.event}</h3>
        <p className="certificate-award">{item.achievement}</p>
        <p className="certificate-detail">{item.eventType}</p>
        <a className="metal-button certificate-button" href={item.certificate} target="_blank" rel="noopener noreferrer" aria-label={`View ${item.event} First Position certificate (PDF, opens in a new tab)`}>View Certificate <ArrowUpRight size={18} aria-hidden="true" /></a>
      </article>
    </div>)}
    <div className="achievement-panel glass-panel"><Sparkles size={36} aria-hidden="true" /><p>{achievementsMessage}</p><span className="eyebrow">A journey in progress</span></div>
  </Section>;
}
