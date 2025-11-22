"use client";

import { SocialBar } from "@/components/site/social-bar";
import { Hero } from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import { TechStack } from "@/components/sections/tech-stack";
import { Terminal } from "@/components/terminal/terminal";
import { Navigation } from "@/components/site/navigation";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-background text-foreground selection:bg-muted-foreground selection:text-background">
      <Navigation />

      <main className="max-w-screen overflow-x-hidden px-4 flex justify-center">
        <div className="w-full max-w-3xl mx-auto space-y-0 py-12 sm:py-20">
          <motion.div
            id="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
          </motion.div>

          <motion.div
            id="terminal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Terminal />
          </motion.div>

          <motion.div
            id="skills"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TechStack />
          </motion.div>

          <motion.div
            id="projects"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Projects />
          </motion.div>
        </div>
      </main>

      <SocialBar />
    </div>
  );
}
