"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { aboutSnippetCopy } from "@/lib/translations";

export default function AboutSnippet() {
  const { lang } = useLanguage();
  const copy = aboutSnippetCopy[lang];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="border-t border-line pt-16">
        <div className="max-w-3xl">
          <p className="font-display text-2xl font-semibold leading-relaxed text-primary sm:text-3xl">
            {copy.title}
          </p>
          <p className="mt-6 text-body text-muted">{copy.description}</p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 font-mono text-tag text-accent transition-opacity hover:opacity-80"
          >
            [ {copy.linkLabel} <ArrowRight size={14} aria-hidden="true" /> ]
          </Link>
        </div>
      </div>
    </section>
  );
}
