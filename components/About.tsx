import Image from "next/image";
import { Code2, Palette, Sparkles } from "lucide-react";
import Section from "./Section";
import { personalInfo, projects, skills } from "@/lib/data";

const highlights = [
  { icon: Code2, title: "Frontend Development", description: "Building responsive, user-friendly interfaces with modern web technologies." },
  { icon: Palette, title: "UI/UX Design", description: "Creating thoughtful, clean designs that prioritize the user experience." },
  { icon: Sparkles, title: "Practical Projects", description: "Applying classroom knowledge to real-world web development projects." },
];

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="about-layout">
        <div className="about-art" aria-hidden="true">
          {[0, 1, 2].map(i => <div key={i} className={`orbit orbit-${i}`}><Image src="/figma/orbit.svg" width={403} height={87} alt="" /></div>)}
          <div className="about-avatar-crop"><Image src="/figma/about-avatar.png" width={529} height={529} alt="" sizes="(max-width: 700px) 270px, 450px" /></div>
          <div className="about-star"><Image src="/figma/star.svg" width={61} height={61} alt="" /></div>
        </div>
        <div className="about-copy">{personalInfo.about.map(p => <p key={p}>{p}</p>)}</div>
      </div>
      <div className="about-highlights">{highlights.map(item => <div key={item.title}><item.icon size={20} /><h3>{item.title}</h3><p>{item.description}</p></div>)}</div>
      <dl className="stats">
        <div><dt>Portfolio projects</dt><dd>{String(projects.length).padStart(2, "0")}</dd></div>
        <div><dt>Skills & technologies</dt><dd>{skills.reduce((count, group) => count + group.items.length, 0)}</dd></div>
        <div><dt>Areas of learning</dt><dd>{String(skills.length).padStart(2, "0")}</dd></div>
      </dl>
    </Section>
  );
}
