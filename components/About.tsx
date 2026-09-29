import { Code2, Palette, Sparkles } from "lucide-react";
import Section from "./Section";
import { personalInfo } from "@/lib/data";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive, user-friendly interfaces with modern web technologies.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating thoughtful, clean designs that prioritize the user experience.",
  },
  {
    icon: Sparkles,
    title: "Practical Projects",
    description: "Applying classroom knowledge to real-world web development projects.",
  },
];

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
        {/* Bio */}
        <div className="flex-1 space-y-4">
          {personalInfo.about.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-warm-gray sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Highlight cards */}
        <div className="flex flex-col gap-4 lg:w-80">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 rounded-xl border border-warm-border bg-white p-4 sm:gap-4 sm:p-5"
            >
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-light/50 sm:h-10 sm:w-10">
                <item.icon size={18} className="text-terracotta" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-plum">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-warm-gray">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
