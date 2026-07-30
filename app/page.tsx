import { Navigation } from "@/components/site/navigation";
import { Hero } from "@/components/sections/hero";
import { Contributions } from "@/components/sections/contributions";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { TechStack } from "@/components/sections/tech-stack";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="grain min-h-screen overflow-x-clip">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-surface focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

      <div className="mx-auto flex w-full max-w-5xl flex-col px-6 sm:px-8 lg:flex-row lg:gap-16 lg:px-10">
        <Navigation />

        <main className="w-full min-w-0 py-16 lg:max-w-2xl lg:py-24">
          <Hero />
          <Contributions />
          <Projects />
          <Experience />
          <TechStack />
          <Contact />
        </main>
      </div>
    </div>
  );
}
