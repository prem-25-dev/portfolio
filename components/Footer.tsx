import Link from "next/link";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em]">
            D Premsankar
          </p>
          <p className="mt-1 text-tag text-muted">
            Full-Stack Developer & Founder of{" "}
            <a
              href="https://ikaruz.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Ikaruz
            </a>
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/prem-25-dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-accent"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/premsankar25"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://www.instagram.com/d_premsankar_08"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted transition-colors hover:text-accent"
          >
            <Instagram size={18} />
          </a>
          <a
            href="mailto:d.premsankar25@gmail.com"
            aria-label="Email"
            className="text-muted transition-colors hover:text-accent"
          >
            <Mail size={18} />
          </a>
        </div>

        <nav aria-label="Footer navigation" className="flex gap-6 text-tag text-muted">
          <Link href="/work" className="transition-colors hover:text-accent">
            Work
          </Link>
          <Link href="/blog" className="transition-colors hover:text-accent">
            Blog
          </Link>
          <Link href="/contact" className="transition-colors hover:text-accent">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
