import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="w-full border-t border-warm-border bg-ivory py-10 sm:py-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-4 sm:gap-7 sm:px-6">
        {/* Brand */}
        <div className="flex flex-col items-center gap-2 text-center sm:gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-plum text-sm font-semibold text-ivory sm:h-10 sm:w-10">
            {personalInfo.name.charAt(0)}
          </span>
          <p className="text-base font-semibold text-plum sm:text-lg">
            {personalInfo.name}
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-warm-gray">
            {personalInfo.tagline}
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-warm-border text-warm-gray transition-colors hover:border-terracotta hover:text-terracotta focus-visible:ring-2 focus-visible:ring-terracotta/30 focus-visible:outline-none"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-warm-border text-warm-gray transition-colors hover:border-terracotta hover:text-terracotta focus-visible:ring-2 focus-visible:ring-terracotta/30 focus-visible:outline-none"
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-warm-border text-warm-gray transition-colors hover:border-terracotta hover:text-terracotta focus-visible:ring-2 focus-visible:ring-terracotta/30 focus-visible:outline-none"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-warm-gray">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
