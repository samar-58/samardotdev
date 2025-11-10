"use client";

import { Github, Linkedin, Mail, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";

export function SocialBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/shujanshaikh",
      description: "View my GitHub profile",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/shujanshaikh/",
      description: "Connect on LinkedIn",
    },
    {
      name: "Twitter",
      icon: X,
      url: "https://x.com/shujanshaikh",
      description: "Follow me on X",
    },
    {
      name: "Email",
      icon: Mail,
      action: "copy",
      description: "Copy email address",
    },
  ];

  const handleEmailClick = async () => {
    const email = "shaikhshujan@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <TooltipProvider delayDuration={0}>
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-background/95 backdrop-blur-xl border-border rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;

              return (
                <Tooltip key={social.name}>
                  <TooltipTrigger asChild>
                    {social.action === "copy" ? (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full transition-all duration-200 hover:scale-110 hover:bg-transparent"
                        onClick={handleEmailClick}
                      >
                        <IconComponent
                          className={`h-5 w-5 transition-colors ${
                            emailCopied
                              ? "text-green-500"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        />
                        {emailCopied && (
                          <span className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 bg-green-500 rounded-full animate-ping" />
                        )}
                      </Button>
                    ) : (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full transition-all duration-200 hover:scale-110 hover:bg-transparent"
                        asChild
                      >
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconComponent className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                        </a>
                      </Button>
                    )}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm">
                      {social.name === "Email" && emailCopied ? "Copied!" : social.description}
                    </p>
                  </TooltipContent>
                </Tooltip>
              );
            })}

            <Separator orientation="vertical" className="h-6 mx-1" />

            {mounted ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    className="h-8 w-8 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 hover:bg-transparent"
                  >
                    <Sun
                      className={`h-5 w-5 transition-all duration-300 absolute ${
                        theme === "dark"
                          ? "opacity-100 scale-100 rotate-0"
                          : "opacity-0 scale-50 rotate-90"
                      } text-muted-foreground`}
                    />
                    <Moon
                      className={`h-5 w-5 transition-all duration-300 ${
                        theme === "light"
                          ? "opacity-100 scale-100 rotate-0"
                          : "opacity-0 scale-50 -rotate-90"
                      } text-muted-foreground`}
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">
                    {theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
                  </p>
                </TooltipContent>
              </Tooltip>
            ) : (
              <div className="h-8 w-8 flex items-center justify-center">
                <div className="h-5 w-5 bg-muted rounded-full animate-pulse" />
              </div>
            )}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
