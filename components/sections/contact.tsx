import { siteConfig, socials } from "@/lib/data";
import { SocialIcon } from "@/components/site/social-icon";

export function Contact() {
  return (
    <section id="contact" className="py-14 border-t border-border">
      <h2 className="section-label mb-8 block">contact</h2>

      <p className="font-display text-2xl sm:text-3xl leading-snug text-foreground max-w-prose">
        have an idea that keeps you awake? let&apos;s talk about it.
      </p>

      <a
        href={`mailto:${siteConfig.email}`}
        className="mt-6 inline-block font-mono text-sm text-accent link-hover"
      >
        {siteConfig.email}
      </a>

      <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
        {socials
          .filter((social) => social.icon !== "mail")
          .map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <SocialIcon name={social.icon} className="w-3.5 h-3.5" />
              <span className="link-hover">{social.label}</span>
            </a>
          ))}
      </div>

      <footer className="mt-16 pt-8 border-t border-border">
        <p className="text-xs text-muted-foreground leading-relaxed max-w-prose">
          if you made it this far, thank you. i&apos;m still learning, still
          building, and trying to do honest work that helps real people.
        </p>
        <p className="mt-4 font-mono text-[11px] text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <a
            href={siteConfig.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-foreground transition-colors"
          >
            samardotdev
          </a>
        </p>
      </footer>
    </section>
  );
}
