import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import Section from "./Section";
import { projects } from "@/lib/data";

const accents = [
  { bg: "bg-terracotta/10", border: "border-terracotta/20", dot: "bg-terracotta" },
  { bg: "bg-sage/15", border: "border-sage/25", dot: "bg-sage" },
  { bg: "bg-rose/20", border: "border-rose/30", dot: "bg-rose" },
  { bg: "bg-plum/8", border: "border-plum/15", dot: "bg-plum" },
];

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Things I've built or contributed to.">
      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {projects.map((project, i) => {
          const accent = accents[i % accents.length];
          return (
            <div
              key={project.title}
              className="group flex flex-col rounded-xl border border-warm-border bg-white p-5 transition-all duration-200 hover:border-sage/40 hover:shadow-md sm:p-6"
            >
              {/* CSS visual accent */}
              <div
                className={`mb-5 flex h-24 items-center justify-center rounded-lg border sm:mb-6 sm:h-32 ${accent.bg} ${accent.border}`}
              >
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <span className={`h-2 w-2 rounded-full sm:h-2.5 sm:w-2.5 ${accent.dot}`} />
                  <span className="text-xs font-medium tracking-widest text-warm-gray uppercase">
                    {project.title}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-semibold text-plum sm:mb-3 sm:text-xl">
                {project.title}
              </h3>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-warm-gray sm:mb-6">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="mb-5 flex flex-wrap gap-1.5 sm:mb-6 sm:gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-rose-light/40 px-2 py-0.5 text-xs font-medium text-plum sm:px-2.5 sm:py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 border-t border-warm-border pt-4 sm:gap-5 sm:pt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-warm-gray transition-colors hover:text-terracotta focus-visible:ring-2 focus-visible:ring-terracotta/30 focus-visible:outline-none"
                >
                  <GithubIcon size={15} />
                  Code
                </a>
                {project.live && project.live.startsWith("http") && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-warm-gray transition-colors hover:text-terracotta focus-visible:ring-2 focus-visible:ring-terracotta/30 focus-visible:outline-none"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
