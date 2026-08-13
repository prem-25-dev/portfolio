import Link from "next/link";
import { Github, Linkedin, Instagram, Mail, MessageCircle } from "lucide-react";

const pages = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Connect" },
];

const socials = [
  { href: "https://github.com/prem-25-dev", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/premsankar25", label: "LinkedIn", icon: Linkedin },
  { href: "https://www.instagram.com/premsankar.dev", label: "Instagram", icon: Instagram },
  { href: "mailto:d.premsankar25@gmail.com", label: "Email", icon: Mail },
  { href: "https://wa.me/919361037036", label: "WhatsApp", icon: MessageCircle },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      {/* CTA block */}
      <div className="mx-auto max-w-6xl px-6 pb-0 pt-20">
        <p className="font-mono text-tag uppercase tracking-[0.2em] text-accent">
          Available for freelance &amp; collabs
        </p>
        <h2 className="mt-4 font-display text-[clamp(2.8rem,8vw,6rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-primary">
          Let&apos;s build<br />
          <span className="text-accent">something</span> real.
        </h2>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent px-6 py-3 font-mono text-tag font-medium text-bg transition-opacity hover:opacity-90"
          >
            [ Get in touch → ]
          </Link>
          <a
            href="mailto:d.premsankar25@gmail.com"
            className="font-mono text-tag text-muted transition-colors hover:text-accent"
          >
            d.premsankar25@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-16 max-w-6xl border-t border-line px-6 py-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Pages */}
          <nav aria-label="Footer pages" className="flex flex-wrap gap-x-6 gap-y-2">
            {pages.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="font-mono text-tag text-muted transition-colors hover:text-accent"
              >
                {p.label}
              </Link>
            ))}
            <a
              href="https://ikaruz.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-tag text-muted transition-colors hover:text-accent"
            >
              Ikaruz ↗
            </a>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="text-muted transition-colors hover:text-accent"
              >
                <s.icon size={17} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Large name + copyright */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <p className="font-calligraphy text-[clamp(2.4rem,7vw,5.5rem)] font-bold italic leading-none text-primary/10 select-none">
            D Premsankar
          </p>
          <p className="font-mono text-tag text-muted">
            © {new Date().getFullYear()} D Premsankar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
