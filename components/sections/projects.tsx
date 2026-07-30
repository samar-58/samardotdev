import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, siteConfig } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="py-14 border-t border-border">
      <div className="flex items-baseline justify-between gap-4 mb-8">
        <h2 className="section-label">projects</h2>
        <p className="font-mono text-xs text-muted-foreground tabular-nums">
          {projects.length}
        </p>
      </div>

      <ul className="divide-y divide-border">
        {projects.map((project, index) => (
          <li key={project.title} className="group py-6 first:pt-0 last:pb-0">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[10px] text-muted-foreground tabular-nums pt-1 shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-xl leading-snug text-foreground">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-4 shrink-0">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground hover:text-accent transition-colors"
                      >
                        site
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground hover:text-accent transition-colors"
                      >
                        <Github className="w-3 h-3" />
                        code
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-prose">
                  {project.description}
                </p>

                <p className="mt-3 font-mono text-[10px] text-muted-foreground">
                  {project.tech.join("  ·  ")}
                </p>

                {project.image && (
                  <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-lg border border-border bg-surface">
                    <Image
                      src={project.image}
                      alt={`${project.title} interface`}
                      fill
                      sizes="(max-width: 640px) 100vw, 640px"
                      placeholder="blur"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <a
        href={siteConfig.github}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-8 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        <Github className="w-3.5 h-3.5 text-accent" />
        more on github
        <ArrowUpRight className="w-3 h-3 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </section>
  );
}
