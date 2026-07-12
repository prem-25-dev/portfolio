import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import Reveal from "@/components/Reveal";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: `${project.name} — D Premsankar`,
      description: project.description,
      images: ["/photo.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — D Premsankar`,
      description: project.description,
      images: ["/photo.jpg"],
    },
    alternates: { canonical: `/work/${project.slug}` },
  };
}

function Eyebrow({ label }: { label: string }) {
  return (
    <div className="eyebrow">
      <span className="eyebrow-label">[ {label} ]</span>
      <span className="eyebrow-rule" />
    </div>
  );
}

export default function CaseStudyPage({ params }: Props) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <Reveal>
        <Eyebrow label="CASE STUDY" />
        <h1 className="font-display text-4xl font-extrabold text-primary sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-4 text-body text-muted">{project.description}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-accent-dim px-3 py-1 font-mono text-tag text-accent">
            {project.status} {project.statusIcon}
          </span>
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded border border-line bg-surface px-2 py-1 font-mono text-tag text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-16">
        <h2 className="font-display text-2xl font-semibold text-accent">
          The Problem
        </h2>
        <p className="mt-4 text-body text-primary">{project.problem}</p>
      </Reveal>

      <Reveal className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-accent">
          What I Built
        </h2>
        <ul className="mt-4 flex flex-col gap-4">
          {project.built.map((item, i) => (
            <li key={i} className="flex gap-4 text-body text-primary">
              <span className="mt-[0.7em] h-[6px] w-[6px] shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-accent">
          Result
        </h2>
        <p className="mt-4 text-body text-primary">{project.result}</p>
      </Reveal>

      <Reveal className="mt-16">
        <div className="border-t border-line pt-8">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded border border-line bg-surface px-3 py-1.5 font-mono text-tag text-primary"
              >
                {t}
              </span>
            ))}
          </div>
          <Link
            href="/work"
            className="mt-10 inline-flex items-center gap-2 font-mono text-tag text-accent transition-opacity hover:opacity-80"
          >
            <ArrowLeft size={14} aria-hidden="true" /> Back to Work
          </Link>
        </div>
      </Reveal>
    </article>
  );
}
