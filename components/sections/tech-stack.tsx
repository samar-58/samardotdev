import { skills } from "@/lib/data";

export function TechStack() {
  return (
    <section id="skills" className="py-14 border-t border-border">
      <h2 className="section-label mb-8 block">stack</h2>

      <dl className="divide-y divide-border">
        {skills.map((group) => (
          <div
            key={group.category}
            className="py-4 first:pt-0 last:pb-0 sm:grid sm:grid-cols-[9rem_1fr] sm:gap-6"
          >
            <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground pt-0.5">
              {group.category}
            </dt>
            <dd className="mt-2 sm:mt-0 text-sm text-foreground/85 leading-relaxed">
              {group.items.join(", ")}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
