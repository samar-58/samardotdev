import { SocialBar } from "@/components/site/social-bar";
import { Hero } from "@/components/sections/hero";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <main className="max-w-screen overflow-x-hidden px-2 flex justify-center">
        <div className="w-full max-w-4xl mx-auto space-y-8 py-8">
          <Hero />
          <Projects />
        </div>
      </main>

      {/* Minimal Floating Bar with Social Links & Theme Toggle */}
      <SocialBar />
    </div>
  );
}
