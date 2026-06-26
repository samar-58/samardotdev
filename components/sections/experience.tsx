"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-16 border-t border-[var(--border)]"
    >
      <h2 className="section-label">experience</h2>

      <div className="space-y-10">
        {experience.map((entry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative pl-4 border-l-2 border-transparent hover:border-[var(--accent)] transition-colors duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h3 className="text-base font-semibold text-[var(--foreground)]">
                {entry.role}
              </h3>
              <span className="font-mono text-xs text-[var(--muted-foreground)] tabular-nums shrink-0">
                {entry.period}
              </span>
            </div>

            <p className="text-sm text-[var(--muted-foreground)] mb-3">
              {entry.company}
            </p>

            <ul className="space-y-1.5">
              {entry.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="text-sm text-[var(--muted-foreground)] leading-relaxed flex gap-2"
                >
                  <span className="text-[var(--accent)] mt-1.5 shrink-0 text-xs">
                    ▸
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
