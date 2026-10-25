import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { personalInfo, skills } from "@/lib/data";

export default function Hero() {
  const nameParts = personalInfo.name.split(" ");
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero-glow" aria-hidden="true" />
      <div className="site-container hero-layout">
        <div className="hero-copy">
          <div className="hero-name">
            <span className="handwritten" aria-hidden="true">I’m</span>
            <h1 id="hero-heading" aria-label={personalInfo.name}>{nameParts[0]}<span className="middle-name">{nameParts.slice(1, -1).join(" ")}</span><span>{nameParts.at(-1)}</span></h1>
          </div>
          <p className="hero-role">{personalInfo.title}</p>
          <p className="hero-tagline">{personalInfo.tagline}</p>
          <div className="hero-actions">
            <a className="metal-button" href="#contact">Hire Me <span className="button-sticker" aria-hidden="true">💼</span></a>
            <a className="metal-button" href="#about">My Story <span className="button-sticker story-sticker" aria-hidden="true">🎤</span></a>
          </div>
          <div className="hero-socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"><GithubIcon size={17} /> GitHub <ArrowUpRight size={13} /></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon size={17} /> LinkedIn <ArrowUpRight size={13} /></a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <Image src="/figma/hero-avatar.png" alt="" width={566} height={566} priority sizes="(max-width: 700px) 251px, (max-width: 1100px) 40vw, 566px" />
        </div>
        <a className="explore-link" href="#projects">Explore my work <ArrowDown size={14} /></a>
      </div>
      <div className="ribbon" aria-label="Featured skills">
        <div className="ribbon-track">
          {[0, 1].map(copy => <div className="ribbon-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>{skills.flatMap(group => group.items).slice(0, 8).map(skill => <span className="ribbon-item" key={skill}>{skill}<Image src="/figma/soft-star.svg" width={42} height={42} alt="" /></span>)}</div>)}
        </div>
      </div>
    </section>
  );
}
