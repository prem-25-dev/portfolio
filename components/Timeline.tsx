"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { timelineEvents } from "@/lib/translations";

interface TimelineEvent {
  year: string;
  event: string;
}

export default function Timeline() {
  const { lang } = useLanguage();
  const events = timelineEvents[lang];

  return (
    <ol className="relative ml-3 border-l border-accent-dim">
      {events.map((item, i) => (
        <li key={i} className="relative pb-8 pl-8 last:pb-0">
          {/* Accent dot on the line */}
          <span
            className={`absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full ${
              item.year === "Now" ? "bg-accent shadow-[0_0_12px_var(--accent)]" : "bg-accent"
            }`}
            aria-hidden="true"
          />
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
            <span className="w-12 shrink-0 font-mono text-tag text-accent">
              {item.year}
            </span>
            <span className="text-body text-primary">{item.event}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}
