import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectRow from "@/components/ProjectRow";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Billing systems, biometric automation, community apps, and self-hosted infrastructure — production software by D Premsankar.",
  openGraph: {
    title: "Work — D Premsankar",
    description:
      "Billing systems, biometric automation, community apps, and self-hosted infrastructure.",
    images: ["/photo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work — D Premsankar",
    description:
      "Billing systems, biometric automation, community apps, and self-hosted infrastructure.",
    images: ["/photo.jpg"],
  },
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <Reveal>
        <div className="eyebrow">
          <span className="eyebrow-label">[ WORK ]</span>
          <span className="eyebrow-rule" />
        </div>
        <h1 className="font-display text-5xl font-extrabold text-primary sm:text-6xl">
          Work
        </h1>
        <p className="mt-4 text-body text-muted">
          Real software. Real clients. Real production.
        </p>
      </Reveal>

      <div className="mt-14 border-t border-line">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 60}>
            <ProjectRow project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
