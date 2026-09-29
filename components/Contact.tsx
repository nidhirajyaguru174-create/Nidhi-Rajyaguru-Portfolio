"use client";

import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import Section from "./Section";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Let's Connect"
      subtitle="Feel free to reach out — I'm always open to new opportunities and conversations."
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
        {/* Left — info */}
        <div className="flex-1 space-y-6 sm:space-y-8">
          <p className="text-base leading-relaxed text-warm-gray sm:text-lg">
            Whether you have a question, an opportunity, or just want to say
            hello — my inbox is always open. I&apos;ll do my best to get back to you
            soon.
          </p>

          <div className="space-y-4 sm:space-y-5">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 text-sm text-warm-gray transition-colors hover:text-terracotta focus-visible:ring-2 focus-visible:ring-terracotta/30 focus-visible:outline-none sm:gap-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-light/50 sm:h-11 sm:w-11">
                <Mail size={18} className="text-terracotta" />
              </span>
              <span className="break-all">{personalInfo.email}</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-warm-gray transition-colors hover:text-terracotta focus-visible:ring-2 focus-visible:ring-terracotta/30 focus-visible:outline-none sm:gap-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sage/15 sm:h-11 sm:w-11">
                <LinkedinIcon size={18} className="text-sage" />
              </span>
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-warm-gray transition-colors hover:text-terracotta focus-visible:ring-2 focus-visible:ring-terracotta/30 focus-visible:outline-none sm:gap-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-plum/8 sm:h-11 sm:w-11">
                <GithubIcon size={18} className="text-plum" />
              </span>
              GitHub
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div className="w-full lg:w-96">
          <form
            className="space-y-4 rounded-xl border border-warm-border bg-white p-5 sm:space-y-5 sm:p-7"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                htmlFor="contact-name"
                className="mb-1.5 block text-sm font-medium text-plum sm:mb-2"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-warm-border bg-ivory px-3.5 py-2.5 text-sm text-charcoal placeholder:text-warm-gray/60 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 focus:outline-none sm:px-4 sm:py-3"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="mb-1.5 block text-sm font-medium text-plum sm:mb-2"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-lg border border-warm-border bg-ivory px-3.5 py-2.5 text-sm text-charcoal placeholder:text-warm-gray/60 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 focus:outline-none sm:px-4 sm:py-3"
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="mb-1.5 block text-sm font-medium text-plum sm:mb-2"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="Your message..."
                className="w-full resize-none rounded-lg border border-warm-border bg-ivory px-3.5 py-2.5 text-sm text-charcoal placeholder:text-warm-gray/60 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 focus:outline-none sm:px-4 sm:py-3"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-terracotta px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-terracotta-dark focus:ring-2 focus:ring-terracotta/30 focus:outline-none sm:py-3"
            >
              <Send size={16} />
              Send Message
            </button>
            <p className="text-center text-xs text-warm-gray/70">
              This form is a UI placeholder — connect functionality coming soon.
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
}
