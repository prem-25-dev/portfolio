"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Timeline from "@/components/Timeline";
import SkillGrid from "@/components/SkillGrid";
import LanguageBars from "@/components/LanguageBars";

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
      {/* Page hero */}
      <Reveal>
        <Eyebrow label="ABOUT" />
        <h1 className="font-display text-5xl font-extrabold leading-tight text-primary sm:text-6xl">
          I&apos;m Prem.{" "}
          <em className="font-calligraphy text-[1.15em] font-bold italic not-italic text-accent">I build things</em>{" "}
          that do real work.
        </h1>
        <p className="mt-6 max-w-2xl text-body text-muted">
          I grew up watching a supermarket owner get quoted ₹20,000 for billing
          software. I was in Grade 7. I thought, I could build that. That one
          moment has basically been the engine behind everything since.
        </p>
      </Reveal>

      <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_360px]">
        {/* Text column */}
        <div className="flex flex-col gap-12">

          {/* Story 1 */}
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-primary">
              It started with games
            </h2>
            <p className="mt-4 text-body text-primary/80">
              Age five. White dabba PC. The kind with a monitor that weighed as
              much as a small TV. I didn&apos;t know what programming was — I
              just knew that pressing certain keys made things happen on screen.
              I spent hours figuring out what each key did. My parents thought
              I was playing. I was, kind of — but I was also quietly obsessing
              over how the machine worked. That obsession never went away.
            </p>
          </Reveal>

          {/* Story 2 */}
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-primary">
              The ₹20,000 moment
            </h2>
            <p className="mt-4 text-body text-primary/80">
              Grade 7. I was at a supermarket with my dad when I overheard the
              owner talking to a software salesman. The quote: ₹20,000 for basic
              billing software. The owner looked defeated. I remember thinking —
              that&apos;s just a program. It keeps track of numbers and prints
              receipts. I can do that. I didn&apos;t know Python yet. I barely
              knew what a database was. But the thought stuck. It never left.
            </p>
          </Reveal>

          {/* Story 3 */}
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-primary">
              The night everything broke
            </h2>
            <p className="mt-4 text-body text-primary/80">
              Grade 11. Inter-school tech expo. I had a Raspberry Pi project
              ready — hardware, circuits, the full thing. The night before the
              event, it stopped working. Completely dead. No time to fix it. So
              I scrapped the hardware and rewrote the entire thing as a Python
              software demo overnight. It won. More importantly, I realized
              something: software is faster, more reliable, and you can fix it
              at 2 AM without soldering anything. Python became my tool. That
              night decided everything.
            </p>
          </Reveal>

          {/* Story 4 */}
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-primary">
              From classroom to client
            </h2>
            <p className="mt-4 text-body text-primary/80">
              A family friend needed billing software for his shop. I said yes
              before I fully knew how to build it. Six weeks later, the app was
              running on his counter. It&apos;s still running. Over 5,000 bills
              generated and counting. That was my first paid project — and my
              first real proof that I wasn&apos;t just someone who could code.
              I was someone who could build something people actually use.
            </p>
          </Reveal>

          {/* Story 5 */}
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-primary">
              Building for real businesses
            </h2>
            <p className="mt-4 text-body text-primary/80">
              In 2025 I founded{" "}
              <a
                href="https://ikaruz.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                Ikaruz <ArrowUpRight size={13} aria-hidden="true" />
              </a>
              . The idea was simple: real software, at prices real businesses
              can afford, without the enterprise runaround. Not templates. Not
              subscriptions to tools that half-solve the problem. Actual custom
              software that fits how a business actually works. SBE Automation,
              ShiftSync, Muthu Enterprises — three clients, three live systems,
              all running. I&apos;m 18, studying at Kalvium @ SJU, and building
              Ikaruz in every hour between.
            </p>
          </Reveal>

          {/* Punchline */}
          <Reveal>
            <blockquote className="border-l-2 border-accent pl-6 text-body italic text-primary/70">
              &ldquo;When you search Ratan Tata, the first word isn&apos;t
              businessman — it&apos;s philanthropist. That&apos;s the title I
              want. Ikaruz is how I get there.&rdquo;
            </blockquote>
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

          {/* Languages */}
          <Reveal className="mt-4">
            <LanguageBars />
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
                  sizes="(max-width: 1024px) 100vw, 360px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </div>
  );
}
