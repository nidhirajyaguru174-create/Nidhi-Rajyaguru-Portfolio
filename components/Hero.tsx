import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden py-24 sm:py-32 md:py-40"
    >
      {/* Decorative CSS shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full border-[28px] border-rose-light/30 sm:h-96 sm:w-96 sm:border-[40px]" />
        <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-sage/8 sm:-bottom-32 sm:-left-24 sm:h-72 sm:w-72" />
        <div className="absolute top-1/3 right-1/4 h-3 w-3 rounded-full bg-terracotta/20" />
        <div className="absolute bottom-1/3 left-1/4 h-2 w-2 rounded-full bg-sage/25" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Intro label */}
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-warm-border bg-white px-4 py-1.5 text-xs font-medium tracking-widest text-terracotta uppercase sm:mb-8 sm:gap-2.5 sm:px-5 sm:py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
            {personalInfo.title}
          </p>

          {/* Main heading */}
          <h1 className="max-w-3xl text-4xl leading-[1.12] font-bold tracking-tight text-plum sm:text-6xl md:text-7xl">
            {personalInfo.name}
          </h1>

          {/* Introduction */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-warm-gray sm:mt-8 sm:text-lg md:text-xl">
            {personalInfo.tagline}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-12 sm:gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-terracotta px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-terracotta-dark focus-visible:ring-2 focus-visible:ring-terracotta/30 focus-visible:outline-none sm:px-7 sm:py-3.5"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-warm-border bg-white px-6 py-3 text-sm font-medium text-plum transition-colors hover:border-sage hover:bg-sage/10 focus-visible:ring-2 focus-visible:ring-terracotta/30 focus-visible:outline-none sm:px-7 sm:py-3.5"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-5 sm:mt-12 sm:gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-warm-gray transition-colors hover:text-terracotta focus-visible:ring-2 focus-visible:ring-terracotta/30 focus-visible:outline-none"
            >
              <GithubIcon size={18} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <span className="h-4 w-px bg-warm-border" />
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-warm-gray transition-colors hover:text-terracotta focus-visible:ring-2 focus-visible:ring-terracotta/30 focus-visible:outline-none"
            >
              <LinkedinIcon size={18} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
