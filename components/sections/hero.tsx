"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import samarPfp from "../../assets/samar_pfp.jpeg";

export function Hero() {
  return (
    <section id="home" className="pb-16">
      {/* Name + Photo */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-start justify-between gap-6"
      >
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            Samar
          </h1>
          <p className="text-base text-[var(--muted-foreground)] mt-1">
            Full Stack Developer
          </p>
        </div>

        <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-full overflow-hidden ring-2 ring-[var(--border)]">
          <Image
            src={samarPfp}
            alt="Samar"
            fill
            sizes="64px"
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-5"
      >
        <span className="inline-flex items-center gap-2 text-xs text-[var(--muted-foreground)] border border-[var(--border)] rounded-full px-3 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          open to opportunities
        </span>
      </motion.div>

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 space-y-4 text-sm text-[var(--muted-foreground)] leading-relaxed"
      >
        <p>
          i&apos;m samar, and i like building software across the full stack —
          web, mobile, blockchain, and AI.
        </p>
        <p>
          i work with TypeScript, Rust, and Solidity, and i care about the small
          details that make a product feel right.
        </p>
        <p>
          if you&apos;re building something meaningful, i&apos;d love to help.
        </p>
      </motion.div>

      {/* Contact links — text style, no buttons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mt-8 space-y-2.5"
      >
        <div>
          <a
            href="mailto:sayedsamar58@gmail.com"
            className="group inline-flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            <span>say hello</span>
            <span className="inline-block text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
            <span className="font-mono text-xs">sayedsamar58@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] flex-wrap">
          <span>find me on</span>
          <span className="text-[var(--accent)]">→</span>
          <a
            href="https://x.com/samardotdev"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover hover:text-[var(--foreground)] transition-colors"
          >
            twitter
          </a>
          <span className="text-[var(--border)]">·</span>
          <a
            href="https://www.linkedin.com/in/samar-sayyad-2641722bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover hover:text-[var(--foreground)] transition-colors"
          >
            linkedin
          </a>
          <span className="text-[var(--border)]">·</span>
          <a
            href="https://github.com/samar-58"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover hover:text-[var(--foreground)] transition-colors"
          >
            github
          </a>
        </div>
      </motion.div>
    </section>
  );
}
