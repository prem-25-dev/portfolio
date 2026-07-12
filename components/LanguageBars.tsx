const languages = [
  { name: "Tamil",   level: "Native",          pct: 100 },
  { name: "English", level: "Fluent",           pct: 92  },
  { name: "Hindi",   level: "Conversational",   pct: 32  },
];

export default function LanguageBars() {
  return (
    <div>
      <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent">
        Languages I Speak
      </h3>
      <ul className="mt-5 flex flex-col gap-4">
        {languages.map((lang) => (
          <li key={lang.name} className="flex items-center gap-4">
            <span className="w-20 shrink-0 text-sm font-medium text-primary">
              {lang.name}
            </span>
            <div className="flex-1 overflow-hidden rounded-full bg-surface">
              <div
                className="h-[3px] rounded-full bg-accent transition-all duration-700"
                style={{ width: `${lang.pct}%` }}
              />
            </div>
            <span className="w-28 text-right font-mono text-tag text-muted">
              {lang.level}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
