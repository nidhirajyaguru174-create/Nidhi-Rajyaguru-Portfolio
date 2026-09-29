import { GraduationCap, Building2, Calendar } from "lucide-react";
import Section from "./Section";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <Section id="education" title="Education" subtitle="My academic background.">
      <div className="relative space-y-6 sm:space-y-8">
        {/* Timeline line */}
        <div className="absolute top-2 bottom-2 left-[19px] hidden w-px bg-warm-border sm:block" />

        {education.map((edu, i) => (
          <div key={i} className="relative flex gap-4 sm:gap-7">
            {/* Timeline dot */}
            <div className="hidden sm:flex sm:flex-col sm:items-center">
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-warm-border bg-white">
                <GraduationCap size={18} className="text-terracotta" />
              </div>
            </div>

            {/* Card */}
            <div className="flex-1 rounded-xl border border-warm-border bg-white p-5 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-2 sm:gap-3">
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-plum sm:text-lg">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-charcoal sm:mt-1.5">
                    <Building2 size={14} className="shrink-0 text-sage" />
                    <span className="truncate">{edu.school}</span>
                    {edu.college && (
                      <span className="truncate text-warm-gray">· {edu.college}</span>
                    )}
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-rose-light/40 px-3 py-1 text-xs font-medium text-plum sm:px-3.5 sm:py-1.5">
                  <Calendar size={12} />
                  {edu.period}
                </span>
              </div>

              <p className="mt-1.5 text-sm text-warm-gray sm:mt-2">{edu.location}</p>

              <ul className="mt-4 space-y-2 sm:mt-5 sm:space-y-2.5">
                {edu.details.map((detail, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-warm-gray sm:gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
