"use client";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  {
    year: "Age 5–7",
    title: "First computer",
    description: "White dabba PC. Games. The beginning of an obsession.",
  },
  {
    year: "Grade 7",
    title: "The ₹20,000 moment",
    description: "Overheard billing software quoted at ₹20,000. Something clicked.",
  },
  {
    year: "Grade 11",
    title: "Raspberry Pi expo — and Python",
    description: "Hardware broke the night before. Pivoted to software. Never looked back.",
  },
  {
    year: "Grade 11–12",
    title: "First paid project",
    description: "Built a billing app for a family friend. Still running. 5,000+ bills generated.",
  },
  {
    year: "2025",
    title: "Founded Ikaruz",
    description: "AI-powered software company. Real software at prices businesses can actually afford.",
  },
  {
    year: "2025–26",
    title: "SBE Automation + ShiftSync + Muthu Enterprises",
    description: "Three client projects shipped. Real impact. Real businesses using them daily.",
  },
  {
    year: "Now",
    title: "Kalvium @ SJU + building Ikaruz",
    description: "Student by day. Founder every other hour. 18 years old. Plenty of time.",
  },
];

export default function Timeline() {
  return (
    <ol className="relative ml-3 border-l border-accent-dim">
      {events.map((item, i) => (
        <li key={i} className="relative pb-10 pl-8 last:pb-0">
          <span
            className={`absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-accent ${
              item.year === "Now" ? "shadow-[0_0_12px_var(--accent)]" : ""
            }`}
            aria-hidden="true"
          />
          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-tag text-accent">{item.year}</span>
            <span className="font-display text-base font-semibold text-primary">
              {item.title}
            </span>
            <span className="text-sm text-muted">{item.description}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}
