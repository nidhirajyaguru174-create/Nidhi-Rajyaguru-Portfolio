import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="w-full border-t border-warm-border py-20 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold tracking-tight text-plum sm:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base text-warm-gray">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
