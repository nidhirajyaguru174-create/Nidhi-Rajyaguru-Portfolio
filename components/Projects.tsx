import { ArrowUpRight, BookOpen, Bug, Code2, Layers } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import Section from "./Section";
import { projects } from "@/lib/data";

const icons = [BookOpen, Layers, Bug, Code2];

export default function Projects() {
  return <Section id="projects" title="Projects" subtitle="Things I've built or contributed to.">
    <div className="projects-grid">{projects.map((project, i) => {
      const Icon = icons[i % icons.length];
      const hasGithub = /^https?:\/\//.test(project.github);
      const preview = <>
        <span className="project-number">SELECTED WORK / 0{i + 1}</span>
        <div className="project-placeholder"><Icon aria-hidden="true" /><span>{project.title}</span><small>{hasGithub ? "Project preview coming soon" : "Screenshot not available"}</small></div>
        {hasGithub && <span className="project-open"><ArrowUpRight size={22} /></span>}
      </>;
      return <article className={`project-card project-${i}`} key={project.title}>
        {hasGithub ? <a className="project-visual" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source code on GitHub`}>{preview}</a> : <div className="project-visual">{preview}</div>}
        <div className="project-content"><h3>{project.title}</h3><p>{project.description}</p>
          <ul className="tech-tags">{project.tech.map(t => <li key={t}>{t}</li>)}</ul>
          <div className="project-links">{hasGithub && <a href={project.github} target="_blank" rel="noopener noreferrer"><GithubIcon size={17} /> View Code <ArrowUpRight size={15} /></a>}
            {!hasGithub && !project.live && <span className="text-xs text-neutral-400">Project links not available</span>}
            {project.live && project.live.startsWith("http") && <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo <ArrowUpRight size={15} /></a>}
          </div>
        </div>
      </article>;
    })}</div>
  </Section>;
}
