/* eslint-disable @next/next/no-img-element */
"use client";

interface Skill { name: string; icon?: string }

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const categories = [
  {
    heading: "Languages",
    skills: [
      { name: "Python", icon: `${DEVICON}/python/python-original.svg` },
      { name: "HTML", icon: `${DEVICON}/html5/html5-original.svg` },
      { name: "CSS", icon: `${DEVICON}/css3/css3-original.svg` },
      { name: "JavaScript", icon: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Dart / Flutter", icon: `${DEVICON}/dart/dart-original.svg` },
    ],
  },
  {
    heading: "Frameworks & Libraries",
    skills: [
      { name: "FastAPI", icon: `${DEVICON}/fastapi/fastapi-original.svg` },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Openpyxl" },
    ],
  },
  {
    heading: "Databases",
    skills: [
      { name: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MySQL", icon: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "SQLite", icon: `${DEVICON}/sqlite/sqlite-original.svg` },
    ],
  },
  {
    heading: "Currently Learning",
    skills: [
      { name: "TypeScript", icon: `${DEVICON}/typescript/typescript-original.svg` },
      { name: "React", icon: `${DEVICON}/react/react-original.svg` },
      { name: "Java", icon: `${DEVICON}/java/java-original.svg` },
      { name: "Rust", icon: `${DEVICON}/rust/rust-original.svg` },
    ],
    muted: true,
  },
];

function SkillCard({
  heading,
  skills,
  muted,
}: {
  heading: string;
  skills: Skill[];
  muted?: boolean;
}) {
  return (
    <div className="rounded-lg border border-line bg-surface p-6">
      <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent">
        {heading}
      </h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className={`flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[0.75rem] ${
              muted
                ? "border-line text-muted"
                : "border-line text-primary"
            }`}
          >
            {skill.icon && (
              <img
                src={skill.icon}
                alt=""
                width={13}
                height={13}
                loading="lazy"
                aria-hidden="true"
              />
            )}
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SkillGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {categories.map((cat) => (
        <SkillCard
          key={cat.heading}
          heading={cat.heading}
          skills={cat.skills}
          muted={cat.muted}
        />
      ))}
    </div>
  );
}
