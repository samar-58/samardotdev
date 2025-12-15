"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors hover:bg-muted hover:text-foreground text-muted-foreground h-8 w-8 ml-1">
        <div className="h-4 w-4 animate-pulse bg-muted rounded" />
      </div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-muted hover:text-foreground text-muted-foreground h-8 w-8 ml-1"
      aria-label="Toggle theme"
      title={`Current theme: ${theme}. Click to switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </button>
  );
}


