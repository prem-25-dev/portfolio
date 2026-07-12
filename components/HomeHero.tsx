"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { homeCopy } from "@/lib/translations";

export default function HomeHero() {
  const { lang } = useLanguage();
  const copy = homeCopy[lang];

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-16 sm:pt-24">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
        <div className="order-2 flex-1 lg:order-1">
          <h1 className="font-display text-[clamp(2.5rem,6vw,5.25rem)] font-extrabold uppercase leading-[1.02] tracking-tight text-primary">
            <span className="line-mask">
              <span>
                {copy.line1} <em className="font-serif text-[1.12em] font-normal normal-case italic text-accent">{copy.line2}</em>
              </span>
            </span>
            <span className="line-mask">
              <span>{copy.line3}</span>
            </span>
            <span className="line-mask">
              <span>
                {copy.line4}
              </span>
            </span>
          </h1>
          <div className="hero-stagger">
            <p className="mt-8 font-mono text-tag uppercase tracking-[0.2em] text-accent">{copy.subheading}</p>
            <p className="mt-6 max-w-lg text-body text-muted">{copy.description}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 bg-accent px-6 py-3 font-mono text-tag font-medium text-bg transition-opacity duration-300 hover:opacity-90"
              >
                [ {copy.workLabel} <ArrowRight size={14} aria-hidden="true" /> ]
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 border border-line px-6 py-3 font-mono text-tag text-primary transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                [ {copy.blogLabel} <ArrowRight size={14} aria-hidden="true" /> ]
              </Link>
            </div>
          </div>
        </div>

        <div className="order-1 w-full max-w-sm lg:order-2 lg:w-[380px] lg:pt-2">
          <div className="relative" data-cursor-text="that's me">
            <div className="absolute -inset-6 rounded-full bg-accent-dim opacity-20 blur-3xl" aria-hidden="true" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-line">
              <Image
                src="/photo.jpg"
                alt="D Premsankar smiling in a forest, wearing sunglasses and a striped shirt"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
