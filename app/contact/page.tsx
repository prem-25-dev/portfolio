import type { Metadata } from "next";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  MessageCircle,
  Twitter,
} from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with D Premsankar — open to freelance projects, collaborations, and conversations.",
  openGraph: {
    title: "Contact — D Premsankar",
    description:
      "Open to freelance projects, collaborations, and conversations.",
    images: ["/photo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — D Premsankar",
    description:
      "Open to freelance projects, collaborations, and conversations.",
    images: ["/photo.jpg"],
  },
  alternates: { canonical: "/contact" },
};

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/prem-25-dev",
    icon: Github,
    handle: "prem-25-dev",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/premsankar25",
    icon: Linkedin,
    handle: "premsankar25",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/d_premsankar_08",
    icon: Instagram,
    handle: "d_premsankar_08",
  },
  {
    label: "Email",
    href: "mailto:d.premsankar25@gmail.com",
    icon: Mail,
    handle: "d.premsankar25@gmail.com",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919361037036",
    icon: MessageCircle,
    handle: "Message me",
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: Twitter,
    handle: "Coming soon",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <Reveal>
        <div className="eyebrow">
          <span className="eyebrow-label">[ CONTACT ]</span>
          <span className="eyebrow-rule" />
        </div>
        <h1 className="font-display text-5xl font-extrabold text-primary sm:text-7xl">
          Let&apos;s build something.
        </h1>
        <p className="mt-6 max-w-2xl text-body text-muted">
          I&apos;m open to freelance projects, collaborations, and
          conversations. If you&apos;ve got something real to build, let&apos;s
          talk.
        </p>
      </Reveal>

      {/* Emails */}
      <Reveal className="mt-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <a
            href="mailto:d.premsankar25@gmail.com"
            className="group border border-line bg-surface p-8 transition-colors duration-300 hover:border-accent"
          >
            <p className="font-mono text-tag uppercase tracking-[0.15em] text-muted">
              Personal
            </p>
            <p className="mt-3 break-all font-display text-xl font-semibold text-primary transition-colors group-hover:text-accent">
              d.premsankar25@gmail.com
            </p>
          </a>
          <a
            href="mailto:prem@ikaruz.in"
            className="group border border-line bg-surface p-8 transition-colors duration-300 hover:border-accent"
          >
            <p className="font-mono text-tag uppercase tracking-[0.15em] text-muted">
              Company — Ikaruz
            </p>
            <p className="mt-3 break-all font-display text-xl font-semibold text-primary transition-colors group-hover:text-accent">
              prem@ikaruz.in
            </p>
          </a>
        </div>
      </Reveal>

      {/* Socials */}
      <Reveal className="mt-16">
        <div className="eyebrow">
          <span className="eyebrow-label">[ ELSEWHERE ]</span>
          <span className="eyebrow-rule" />
        </div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={social.label}
                className="group flex items-center gap-4 border border-line p-5 transition-colors duration-300 hover:border-accent hover:bg-surface"
              >
                <social.icon
                  size={22}
                  className="text-muted transition-colors group-hover:text-accent"
                  aria-hidden="true"
                />
                <span>
                  <span className="block text-sm font-medium text-primary">
                    {social.label}
                  </span>
                  <span className="block break-all font-mono text-tag text-muted">
                    {social.handle}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
