"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function SocialBar() {
  const socialLinks = [
    {
      name: "Twitter",
      icon: () => (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      url: "https://x.com/samardotdev",
      description: "follow on x",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/samar-sayyad-2641722bb/",
      description: "connect on linkedin",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/samar-58",
      description: "view github",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:sayedsamar58@gmail.com",
      description: "send email",
    },
  ];

  return (
    <TooltipProvider delayDuration={0}>
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-[var(--surface)]/90 backdrop-blur-xl border border-[var(--border)] rounded-full px-4 py-2.5 shadow-lg">
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <Tooltip key={social.name}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full transition-all duration-200 hover:scale-110 hover:bg-transparent"
                      asChild
                    >
                      <a
                        href={social.url}
                        target={
                          social.url.startsWith("mailto:")
                            ? undefined
                            : "_blank"
                        }
                        rel={
                          social.url.startsWith("mailto:")
                            ? undefined
                            : "noopener noreferrer"
                        }
                      >
                        <IconComponent className="h-4 w-4 text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs font-mono">{social.description}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
