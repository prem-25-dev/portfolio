"use client";

/* eslint-disable @next/next/no-img-element */

import { useLanguage } from "@/contexts/LanguageContext";
import { skillHeadings } from "@/lib/translations";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

interface Skill {
  name: string;
  icon?: string;
}

const shipWith: Skill[] = [
  { name: "HTML", icon: `${DEVICON}/html5/html5-original.svg` },
  { name: "CSS", icon: `${DEVICON}/css3/css3-original.svg` },
  { name: "JavaScript", icon: `${DEVICON}/javascript/javascript-original.svg` },
  { name: "FastAPI", icon: `${DEVICON}/fastapi/fastapi-original.svg` },
  { name: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-original.svg` },
  { name: "Python", icon: `${DEVICON}/python/python-original.svg` },
  { name: "SQLite", icon: `${DEVICON}/sqlite/sqlite-original.svg` },
];

const vibeCoding: Skill[] = [
  { name: "Flutter", icon: `${DEVICON}/flutter/flutter-original.svg` },
  { name: "Java", icon: `${DEVICON}/java/java-original.svg` },
];

const also: Skill[] = [
  { name: "Discord Bots" },
  { name: "Linux Server Admin", icon: `${DEVICON}/linux/linux-original.svg` },
  { name: "Community Management" },
];

function SkillList({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <div>
      <h3 className="font-mono text-tag uppercase tracking-[0.15em] text-accent">
        {title}
      </h3>
      <ul className="mt-4 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex items-center gap-2 rounded border border-line bg-surface px-3 py-2 font-mono text-tag text-primary"
          >
            {skill.icon && (
              <img
                src={skill.icon}
                alt=""
                width={16}
                height={16}
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
  const { lang } = useLanguage();
  const headings = skillHeadings[lang];

  return (
    <div className="flex flex-col gap-10">
      <SkillList title={headings.shipWith} skills={shipWith} />
      <SkillList title={headings.vibeCoding} skills={vibeCoding} />
      <SkillList title={headings.also} skills={also} />
    </div>
  );
}
