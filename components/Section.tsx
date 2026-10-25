import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className={`portfolio-section section-${id}`} aria-labelledby={`${id}-heading`}>
      <div className="site-container">
        <div className="section-heading">
          <h2 id={`${id}-heading`}>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
