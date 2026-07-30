import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-14 border-t border-border">
      <h2 className="section-label mb-8 block">experience</h2>

      <ul className="space-y-10">
        {experience.map((entry) => (
          <li key={`${entry.company}-${entry.role}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-xl leading-snug text-foreground">
                {entry.role}
              </h3>
              <span className="font-mono text-[11px] text-muted-foreground tabular-nums shrink-0">
                {entry.period}
              </span>
            </div>

            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-accent">
              {entry.company}
            </p>

            <ul className="mt-4 space-y-2.5 border-l border-border pl-4">
              {entry.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground leading-relaxed max-w-prose"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
