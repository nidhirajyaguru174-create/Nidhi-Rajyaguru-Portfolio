import Section from "./Section";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies and tools I work with.">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-xl border border-warm-border bg-white p-5 sm:p-6"
          >
            <h3 className="mb-4 text-xs font-semibold tracking-widest text-terracotta uppercase sm:mb-5">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2 sm:gap-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="cursor-default rounded-lg border border-warm-border bg-ivory px-3 py-2 text-sm font-medium text-plum transition-colors hover:border-sage hover:bg-sage/10 sm:px-4 sm:py-2.5"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
