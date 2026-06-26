"use client";

import { useEffect } from "react";
import { SocialBar } from "@/components/site/social-bar";
import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import { TechStack } from "@/components/sections/tech-stack";
import { GithubSection } from "@/components/sections/github";
import { Contact } from "@/components/sections/contact";
import { Navigation } from "@/components/site/navigation";

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative grain">
      {/* Cursor spotlight — desktop only */}
      <div className="spotlight hidden md:block" />

      <Navigation />

      {/* Dot-grid side gutters — visible on desktop */}
      <div className="hidden lg:block fixed inset-0 z-0 pointer-events-none">
        <div className="h-full max-w-3xl mx-auto relative">
          {/* Left gutter pattern */}
          <div
            className="absolute right-full top-0 bottom-0 w-[calc((100vw-768px)/2)]"
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--border) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              opacity: 0.4,
              maskImage:
                "linear-gradient(to right, transparent, transparent 40%, rgba(0,0,0,0.5) 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, transparent 40%, rgba(0,0,0,0.5) 100%)",
            }}
          />
          {/* Right gutter pattern */}
          <div
            className="absolute left-full top-0 bottom-0 w-[calc((100vw-768px)/2)]"
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--border) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              opacity: 0.4,
              maskImage:
                "linear-gradient(to left, transparent, transparent 40%, rgba(0,0,0,0.5) 100%)",
              WebkitMaskImage:
                "linear-gradient(to left, transparent, transparent 40%, rgba(0,0,0,0.5) 100%)",
            }}
          />
        </div>
      </div>

      <main className="relative z-10 max-w-screen overflow-x-hidden flex justify-center">
        {/* Content column with side borders */}
        <div className="w-full max-w-3xl mx-auto border-x border-[var(--border)] min-h-screen">
          <div className="px-6 sm:px-10 py-20 sm:py-28">
            <Hero />
            <Experience />
            <Projects />
            <GithubSection username="samar-58" />
            <TechStack />
            <Contact />
          </div>
        </div>
      </main>

      <SocialBar />
    </div>
  );
}
