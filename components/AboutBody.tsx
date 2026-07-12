"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { aboutBodyCopy } from "@/lib/translations";
import Reveal from "@/components/Reveal";
import Timeline from "@/components/Timeline";
import SkillGrid from "@/components/SkillGrid";

export default function AboutBody() {
  const { lang } = useLanguage();
  const copy = aboutBodyCopy[lang];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <Reveal>
        <div className="eyebrow">
          <span className="eyebrow-label">[ ABOUT ]</span>
          <span className="eyebrow-rule" />
        </div>
        <h1 className="font-display text-5xl font-extrabold text-primary sm:text-6xl">
          {copy.title}
        </h1>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_380px]">
        <div className="flex flex-col gap-8">
          {copy.sections.map((section) => (
            <Reveal key={section.heading}>
              <div>
                <h2 className="font-display text-2xl font-semibold text-accent">
                  {section.heading}
                </h2>
                <p className="mt-4 text-body text-primary">{section.content}</p>
              </div>
            </Reveal>
          ))}

          <Reveal className="mt-8">
            <div className="eyebrow">
              <span className="eyebrow-label">[ {copy.timelineLabel} ]</span>
              <span className="eyebrow-rule" />
            </div>
            <Timeline />
          </Reveal>

          <Reveal className="mt-8">
            <div className="eyebrow">
              <span className="eyebrow-label">[ {copy.skillsLabel} ]</span>
              <span className="eyebrow-rule" />
            </div>
            <SkillGrid />
          </Reveal>
        </div>

        <div className="flex flex-col gap-10 lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <div className="relative" data-cursor-text="that's me">
              <div className="absolute -inset-4 rounded-full bg-accent-dim opacity-20 blur-3xl" aria-hidden="true" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-line">
                <Image
                  src="/photo.jpg"
                  alt="D Premsankar smiling in a forest, wearing sunglasses and a striped shirt"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-line" data-cursor-text="also me">
              <Image
                src="/speech.jpg"
                alt="D Premsankar speaking on stage with a microphone"
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
