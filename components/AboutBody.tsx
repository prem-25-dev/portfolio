"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Timeline from "@/components/Timeline";
import SkillGrid from "@/components/SkillGrid";

function Eyebrow({ label }: { label: string }) {
  return (
    <div className="eyebrow">
      <span className="eyebrow-label">[ {label} ]</span>
      <span className="eyebrow-rule" />
    </div>
  );
}

export default function AboutBody() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <Reveal>
        <Eyebrow label="ABOUT" />
        <h1 className="font-display text-5xl font-extrabold text-primary sm:text-6xl">
          The full story.
        </h1>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_380px]">
        {/* Text column */}
        <div className="flex flex-col gap-10">

          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-accent">
              Starting journey
            </h2>
            <p className="mt-4 text-body text-primary">
              I was 15 when I got my first Raspberry Pi. Not for a school project —
              I just wanted to know how servers actually worked. I broke my home
              network twice in the first week. Then I fixed it. A few months later,
              a family friend asked if I could build a billing app for his business.
              I said yes before I knew how to do it. Six weeks in, Muthu Enterprises
              was using it every day. That was the moment it clicked: this wasn&apos;t
              a hobby anymore.
            </p>
            <p className="mt-4 text-body text-primary">
              I kept going — FastAPI for backends, Flutter because I wanted the apps to
              actually look good, a proper Linux server on an old desktop that&apos;s
              still running. At 17, I automated attendance for Shree Balaji Group using
              biometric hardware and shipped billing software for MRS Agency. By then
              I&apos;d written more production code than I expected to at that age.
              Flutter is home. FastAPI is how I think about backends. Linux because I
              don&apos;t like black boxes.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-accent">
              The extrovert
            </h2>
            <p className="mt-4 text-body text-primary">
              I can spend six hours debugging alone and then walk straight into
              a full auditorium and talk. Both feel natural. I&apos;ve competed
              in MUN conferences, given speeches to packed rooms, and appeared
              on Puthiya Thalaimurai&apos;s{" "}
              <em>&ldquo;Veetukoru Vignyani&rdquo;</em> — a Tamil TV show that
              profiles young innovators. I have a habit of ending up in charge
              of things I didn&apos;t plan to run. Not because I look for it.
              It just keeps happening.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-accent">
              The founder
            </h2>
            <p className="mt-4 text-body text-primary">
              Ikaruz came out of a frustration I kept running into with clients.
              They needed real software — something that would actually work in
              their business, not a template dressed up in their brand colours.
              But they couldn&apos;t afford what agencies were charging. By 2025
              I&apos;d already built that kind of software three times over, so
              I made it official.{" "}
              <a
                href="https://ikaruz.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent underline underline-offset-4 hover:opacity-80"
              >
                Ikaruz <ArrowUpRight size={14} aria-hidden="true" />
              </a>{" "}
              is an AI-powered software company for businesses that need the real
              thing without the enterprise price tag. I&apos;m now at Kalvium at
              SJU — a university built around building. I&apos;m 18. I have time.
            </p>
          </Reveal>

          {/* Timeline */}
          <Reveal className="mt-4">
            <Eyebrow label="TIMELINE" />
            <Timeline />
          </Reveal>

          {/* Skills */}
          <Reveal className="mt-4">
            <Eyebrow label="SKILLS" />
            <SkillGrid />
          </Reveal>
        </div>

        {/* Photo column */}
        <div className="flex flex-col gap-10 lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <div className="relative" data-cursor-text="that's me">
              <div
                className="absolute -inset-4 rounded-full bg-accent-dim opacity-20 blur-3xl"
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
          </Reveal>

          <Reveal>
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-lg border border-line"
              data-cursor-text="also me"
            >
              <Image
                src="/speech.jpg"
                alt="D Premsankar — another portrait"
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
