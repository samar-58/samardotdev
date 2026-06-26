"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export const TechStack = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-16 border-t border-[var(--border)]"
    >
      <h2 className="section-label">stack</h2>

      <div className="space-y-6">
        {skills.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.06 }}
          >
            <h3 className="text-xs font-medium text-[var(--foreground)] mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item, i) => (
                <span
                  key={i}
                  className="font-mono text-xs text-[var(--muted-foreground)] bg-[var(--surface)] border border-[var(--border)] rounded-md px-2.5 py-1 hover:border-[var(--accent)] hover:text-[var(--foreground)] transition-all duration-200 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
