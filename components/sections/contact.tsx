"use client";

import { motion } from "framer-motion";

export function Contact() {
  const links = [
    { label: "email", href: "mailto:sayedsamar58@gmail.com" },
    { label: "twitter", href: "https://x.com/samardotdev" },
    {
      label: "linkedin",
      href: "https://www.linkedin.com/in/samar-sayyad-2641722bb/",
    },
    { label: "github", href: "https://github.com/samar-58" },
  ];

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-16 border-t border-[var(--border)]"
    >
      <h2 className="section-label">contact</h2>

      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-6">
        have an idea that keeps you awake? let&apos;s talk about it.
      </p>

      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={
              link.href.startsWith("mailto:")
                ? undefined
                : "noopener noreferrer"
            }
            className="group inline-flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            <span className="text-[var(--accent)] transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
            <span className="link-hover">{link.label}</span>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-[var(--border)]">
        <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
          if you made it this far, thank you. i&apos;m still learning, still
          building, and trying to do honest work that helps real people.
        </p>
        <p className="text-xs text-[var(--muted-foreground)] mt-4">
          © 2026{" "}
          <a
            href="https://x.com/samardotdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:text-[var(--foreground)] transition-colors"
          >
            samardotdev
          </a>
        </p>
      </div>
    </motion.section>
  );
}
