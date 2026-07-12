"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Clock from "./Clock";
import { useLanguage } from "@/contexts/LanguageContext";
import { navLabels } from "@/lib/translations";

const links = [
  { href: "/work", key: "work" },
  { href: "/about", key: "about" },
  { href: "/blog", key: "blog" },
  { href: "/contact", key: "contact" },
] as const;

type LinkKey = (typeof links)[number]["key"];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the overlay whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const { lang, toggle } = useLanguage();
  const labels = navLabels[lang];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-line bg-bg/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary transition-colors hover:text-accent"
        >
          D Premsankar
        </Link>

        {/* Live clock, desktop only */}
        <div className="hidden lg:block" aria-hidden="true">
          <Clock />
        </div>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm transition-colors hover:text-accent ${
                  pathname.startsWith(link.href) ? "text-accent" : "text-muted"
                }`}
              >
                {labels[link.key as LinkKey]}
              </Link>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={toggle}
              className="rounded border border-line px-3 py-2 text-sm text-primary transition-colors hover:border-accent hover:text-accent"
            >
              {labels.toggle}
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-primary md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Full-screen mobile overlay */}
      {open && (
        <div className="fixed inset-x-0 top-16 z-40 flex h-[calc(100dvh-4rem)] flex-col bg-bg md:hidden">
          <ul className="flex flex-1 flex-col items-center justify-center gap-10">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-display text-3xl font-semibold text-primary transition-colors hover:text-accent"
                >
                  {labels[link.key as LinkKey]}
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-line px-6 py-5">
            <button
              type="button"
              onClick={toggle}
              className="w-full rounded border border-line px-4 py-3 text-left font-mono text-sm text-primary transition-colors hover:border-accent hover:text-accent"
            >
              {labels.toggle}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
