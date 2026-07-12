import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";
import { getAllPosts, getPost } from "@/lib/blog";
import Reveal from "@/components/Reveal";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} — D Premsankar`,
      description: post.description,
      images: ["/photo.jpg"],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} — D Premsankar`,
      description: post.description,
      images: ["/photo.jpg"],
    },
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Reveal>
        <div className="eyebrow">
          <span className="eyebrow-label">[ BLOG ]</span>
          <span className="eyebrow-rule" />
        </div>
        <h1 className="font-display text-4xl font-extrabold leading-tight text-primary sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 font-mono text-tag text-muted">{post.date}</p>
      </Reveal>

      <Reveal className="prose-dark mt-12">
        <MDXRemote source={post.content} />
      </Reveal>

      <Reveal className="mt-16 border-t border-line pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-tag text-accent transition-opacity hover:opacity-80"
        >
          <ArrowLeft size={14} aria-hidden="true" /> Back to Blog
        </Link>
      </Reveal>
    </article>
  );
}
