import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { getAllPosts } from "@/lib/blog";
import ProjectRow from "@/components/ProjectRow";
import BlogRow from "@/components/BlogRow";
import IkaruzBanner from "@/components/IkaruzBanner";
import Reveal from "@/components/Reveal";
import HomeHero from "@/components/HomeHero";
import AboutSnippet from "@/components/AboutSnippet";
import { Github, Linkedin, Instagram, Mail, MessageCircle, Twitter } from "lucide-react";

export const metadata: Metadata = {
  title: "D Premsankar — Full-Stack Developer & Founder",
  description:
    "I build production software people actually use. Full-Stack Developer, Founder of Ikaruz, student at Kalvium at SJU.",
  alternates: { canonical: "/" },
};

function Eyebrow({ label }: { label: string }) {
  return (
    <div className="eyebrow">
      <span className="eyebrow-label">[ {label} ]</span>
      <span className="eyebrow-rule" />
    </div>
  );
}

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* ---------- HERO ---------- */}
      <HomeHero />

      {/* ---------- FEATURED WORK ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <Eyebrow label="WORK" />
          <h2 className="font-display text-4xl font-bold text-primary">
            Featured work
          </h2>
          <p className="mt-3 text-body text-muted">
            Real software. Real clients. Real production.
          </p>
        </Reveal>

        <div className="mt-12 border-t border-line">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <ProjectRow project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-tag text-accent transition-opacity hover:opacity-80"
          >
            [ View all projects <ArrowRight size={14} aria-hidden="true" /> ]
          </Link>
        </Reveal>
      </section>

      {/* ---------- ABOUT SNIPPET ---------- */}
      <AboutSnippet />

      {/* ---------- IKARUZ CALLOUT ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <IkaruzBanner />
        </Reveal>
      </section>

      {/* ---------- BLOG PREVIEW ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <Eyebrow label="BLOG" />
          <h2 className="font-display text-4xl font-bold text-primary">
            Latest writing
          </h2>
        </Reveal>

        <div className="mt-12 border-t border-line">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <BlogRow post={post} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-tag text-accent transition-opacity hover:opacity-80"
          >
            [ All posts <ArrowRight size={14} aria-hidden="true" /> ]
          </Link>
        </Reveal>
      </section>

      {/* ---------- CONTACT STRIP ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <Eyebrow label="CONTACT" />
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <p className="font-display text-2xl font-semibold text-primary sm:text-3xl">
              Open to freelance, collabs & conversations.
            </p>
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/prem-25-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted transition-colors hover:text-accent"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/premsankar25"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted transition-colors hover:text-accent"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://www.instagram.com/d_premsankar_08"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted transition-colors hover:text-accent"
              >
                <Instagram size={22} />
              </a>
              <a
                href="mailto:d.premsankar25@gmail.com"
                aria-label="Email"
                className="text-muted transition-colors hover:text-accent"
              >
                <Mail size={22} />
              </a>
              <a
                href="https://wa.me/919361037036"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-muted transition-colors hover:text-accent"
              >
                <MessageCircle size={22} />
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="text-muted transition-colors hover:text-accent"
              >
                <Twitter size={22} />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
