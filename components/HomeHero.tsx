"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-16 sm:pt-24">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
        {/* Text */}
        <div className="order-2 flex-1 lg:order-1">
          <h1 className="font-display text-[clamp(2.5rem,6vw,5.25rem)] font-extrabold uppercase leading-[1.02] tracking-tight text-primary">
            <span className="line-mask">
              <span>
                I Build{" "}
                <em className="font-serif text-[1.12em] font-normal normal-case italic text-accent">
                  real software
                </em>
              </span>
            </span>
            <span className="line-mask">
              <span>
                for real{" "}
                <mark className="bg-accent px-2 text-bg not-italic">
                  businesses,
                </mark>
              </span>
            </span>
            <span className="line-mask">
              <span>and I&apos;m just</span>
            </span>
            <span className="line-mask">
              <span>
                getting <span className="text-accent">started.</span>
              </span>
            </span>
          </h1>

          <div className="hero-stagger">
            <p className="mt-8 font-mono text-tag uppercase tracking-[0.2em] text-accent">
              D Premsankar — Full-Stack Developer &amp; Founder of Ikaruz
            </p>
            <p className="mt-6 max-w-lg text-body text-muted">
              Started freelancing at 16 with a billing app for a local business.
              Then came Raspberry Pi, a Linux home server, biometric automation
              for a manufacturing group. Now I run Ikaruz and study at Kalvium
              at SJU — building while everyone else is still figuring out what
              to build.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 bg-accent px-6 py-3 font-mono text-tag font-medium text-bg transition-opacity duration-300 hover:opacity-90"
              >
                [ See My Work <ArrowRight size={14} aria-hidden="true" /> ]
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 border border-line px-6 py-3 font-mono text-tag text-primary transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                [ Read the Blog <ArrowRight size={14} aria-hidden="true" /> ]
              </Link>
            </div>
          </div>
        </div>

        {/* Photo */}
        <div className="order-1 w-full max-w-sm lg:order-2 lg:w-[380px] lg:pt-2">
          <div className="relative" data-cursor-text="that's me">
            <div
              className="absolute -inset-6 rounded-full bg-accent-dim opacity-20 blur-3xl"
              aria-hidden="true"
            />
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
