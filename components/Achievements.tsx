import { Sparkles } from "lucide-react";
import Section from "./Section";
import { achievementsMessage } from "@/lib/data";

export default function Achievements() {
  return (
    <Section
      id="achievements"
      title="Achievements & Certifications"
      subtitle="Certifications, hackathons, courses, and other accomplishments."
    >
      <div className="flex flex-col items-center justify-center rounded-xl border border-warm-border bg-white px-5 py-16 text-center sm:px-6 sm:py-20 md:py-24">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-light/50 sm:mb-5 sm:h-14 sm:w-14">
          <Sparkles size={24} className="text-terracotta" />
        </div>
        <p className="max-w-md text-base leading-relaxed text-warm-gray sm:text-lg">
          {achievementsMessage}
        </p>
      </div>
    </Section>
  );
}
