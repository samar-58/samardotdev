import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/60 backdrop-blur">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="#" className="font-semibold text-foreground">
          shujju.dev
        </Link>
        <nav className="hidden gap-6 text-sm md:flex">
          <Link href="#projects" className="text-muted-foreground hover:text-foreground">
            Projects
          </Link>
          <Link href="#expertise" className="text-muted-foreground hover:text-foreground">
            Expertise
          </Link>
          <Link href="#github" className="text-muted-foreground hover:text-foreground">
            GitHub
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}


