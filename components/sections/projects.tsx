"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-16 border-t border-[var(--border)]"
    >
      <h2 className="section-label">projects</h2>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="project-card group"
          >
            {/* Title row */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
              <h3 className="text-base font-semibold text-[var(--foreground)]">
                {project.title}
              </h3>

              <div className="flex items-center gap-3 shrink-0">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1 text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                  >
                    <span className="text-[var(--accent)] transition-transform duration-200 group-hover/link:translate-x-0.5">
                      →
                    </span>
                    site
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1 text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                  >
                    <span className="text-[var(--accent)] transition-transform duration-200 group-hover/link:translate-x-0.5">
                      →
                    </span>
                    github
                  </a>
                )}
              </div>
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="font-mono text-[10px] text-[var(--muted-foreground)] bg-[var(--muted)] border border-[var(--border)] rounded px-1.5 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* View more */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-8"
      >
        <a
          href="https://github.com/samar-58"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
        >
          view more
          <span className="text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </motion.div>
    </motion.section>
  );
}
