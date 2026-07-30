import Image from "next/image";
import { bio, siteConfig, socials } from "@/lib/data";
import { SocialIcon } from "@/components/site/social-icon";

export function Hero() {
  return (
    <section id="home" className="pb-14">
      <div
        className="reveal flex items-start justify-between gap-6"
        style={{ animationDelay: "0ms" }}
      >
        <div>
          <h1 className="font-display text-5xl sm:text-6xl leading-[1.05] tracking-tight text-foreground">
            {siteConfig.name}
          </h1>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            {siteConfig.title}
          </p>
        </div>

        <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full overflow-hidden ring-1 ring-border">
          <Image
            src={siteConfig.avatar}
            alt={`${siteConfig.name}'s portrait`}
            fill
            sizes="80px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {siteConfig.available && (
        <div className="reveal mt-6" style={{ animationDelay: "80ms" }}>
          <span className="inline-flex items-center gap-2 font-mono text-[11px] text-muted-foreground border border-border rounded-full px-3 py-1.5">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-600" />
            </span>
            {siteConfig.availableLabel}
          </span>
        </div>
      )}

      <div
        className="reveal mt-8 space-y-4 text-[0.9375rem] text-muted-foreground max-w-prose"
        style={{ animationDelay: "160ms" }}
      >
        {bio.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      <div
        className="reveal mt-8 flex flex-wrap items-center gap-x-5 gap-y-3"
        style={{ animationDelay: "240ms" }}
      >
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            {...(social.href.startsWith("mailto:")
              ? {}
              : { target: "_blank", rel: "noopener noreferrer" })}
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <SocialIcon
              name={social.icon}
              className="w-3.5 h-3.5 text-accent"
            />
            <span className="link-hover">{social.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
