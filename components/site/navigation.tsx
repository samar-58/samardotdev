"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { SocialIcon } from "@/components/site/social-icon";
import { socials } from "@/lib/data";

const NAV_ITEMS = [
  { label: "intro", id: "home" },
  { label: "proof of work", id: "pow" },
  { label: "projects", id: "projects" },
  { label: "experience", id: "experience" },
  { label: "stack", id: "skills" },
  { label: "contact", id: "contact" },
];

export function Navigation() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          );
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile: slim sticky bar */}
      <div className="lg:hidden sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <nav
            aria-label="Sections"
            className="flex min-w-0 flex-1 items-center gap-4 overflow-x-auto py-3"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeId === item.id ? "true" : undefined}
                className={`font-mono text-[11px] whitespace-nowrap transition-colors ${
                  activeId === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <span className="shrink-0">
            <ThemeToggle />
          </span>
        </div>
      </div>

      {/* Desktop: sticky rail */}
      <aside className="hidden lg:flex lg:flex-col lg:sticky lg:top-0 lg:h-screen lg:py-24">
        <nav aria-label="Sections" className="flex flex-col gap-3">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className="group inline-flex items-center gap-3"
              >
                <span
                  className={`h-px transition-all duration-300 ${
                    isActive
                      ? "w-8 bg-accent"
                      : "w-4 bg-border group-hover:w-8 group-hover:bg-muted-foreground"
                  }`}
                />
                <span
                  className={`font-mono text-[11px] uppercase tracking-[0.1em] transition-colors ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>

        <div className="mt-auto flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              {...(social.href.startsWith("mailto:")
                ? {}
                : { target: "_blank", rel: "noopener noreferrer" })}
              aria-label={social.label}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <SocialIcon name={social.icon} className="w-4 h-4" />
            </a>
          ))}
          <span className="ml-auto">
            <ThemeToggle />
          </span>
        </div>
      </aside>
    </>
  );
}
