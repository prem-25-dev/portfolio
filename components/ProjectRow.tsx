import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

const statusStyles: Record<Project["status"], string> = {
  Shipped: "text-accent border-accent-dim",
  "In Production": "text-accent border-accent-dim",
  Building: "text-primary border-line",
  Ongoing: "text-muted border-line",
};

export default function ProjectRow({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block border-b border-line py-8 pl-6 transition-colors duration-300 hover:bg-surface"
    >
      {/* Amber left border that slides in on hover */}
      <span
        className="absolute bottom-0 left-0 top-0 w-[3px] origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-4 pr-6 lg:flex-row lg:items-center lg:gap-8">
        {/* Name + description */}
        <div className="flex-1">
          <h3 className="font-display text-2xl font-semibold text-primary transition-colors group-hover:text-accent">
            {project.name}
          </h3>
          <p className="mt-2 max-w-xl text-body text-muted">{project.description}</p>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 lg:w-64 lg:justify-end">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded border border-line bg-surface px-2 py-1 font-mono text-tag text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Status + arrow */}
        <div className="flex items-center gap-4 lg:w-48 lg:justify-end">
          <span
            className={`rounded-full border px-3 py-1 font-mono text-tag ${statusStyles[project.status]}`}
          >
            {project.status} {project.statusIcon}
          </span>
          <ArrowRight
            size={18}
            className="text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
}
