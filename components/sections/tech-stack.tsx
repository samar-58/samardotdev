"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiNextdotjs,
  SiPrisma,
  SiAmazon,
  SiSolana,
  SiExpo,
  SiSequelize,
  SiNestjs,
  SiExpress,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "Nest.js", icon: SiNestjs, color: "#E0234E" },
  { name: "Postgres", icon: SiPostgresql, color: "#336791" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "Sequelize", icon: SiSequelize, color: "#52B0E7" },
  { name: "Expo", icon: SiExpo, color: "#ffffff" },
  { name: "React Native", icon: SiReact, color: "#61DAFB" },
  { name: "Solana", icon: SiSolana, color: "#9945FF" },
  { name: "AWS S3", icon: SiAmazon, color: "#FF9900" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const TechStack = () => {
  return (
    <section id="skills" className="py-12 border-t border-zinc-800">
      <div className="px-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-lg font-poppins font-semibold mb-8 text-zinc-300 flex items-center gap-2"
        >
          tech stack
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-rows-2 grid-flow-col gap-4 overflow-x-auto pb-4 md:grid-flow-row md:grid-cols-6 md:grid-rows-[auto] md:gap-8 md:overflow-visible scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col items-center gap-3 group min-w-[80px]"
            >
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-900/50 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                <tech.icon
                  className="w-6 h-6 transition-colors duration-300 md:text-zinc-400 md:group-hover:text-[var(--tech-color)] text-[var(--tech-color)]"
                  style={{ "--tech-color": tech.color } as React.CSSProperties}
                />
              </div>
              <span className="text-xs text-zinc-300 md:text-zinc-500 font-poppins md:group-hover:text-zinc-300 transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
