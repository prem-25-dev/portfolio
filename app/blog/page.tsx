import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogRow from "@/components/BlogRow";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on building, leading, and shipping software — by D Premsankar.",
  openGraph: {
    title: "Blog — D Premsankar",
    description: "Thoughts on building, leading, and shipping software.",
    images: ["/photo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — D Premsankar",
    description: "Thoughts on building, leading, and shipping software.",
    images: ["/photo.jpg"],
  },
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <Reveal>
        <div className="eyebrow">
          <span className="eyebrow-label">[ BLOG ]</span>
          <span className="eyebrow-rule" />
        </div>
        <h1 className="font-display text-5xl font-extrabold text-primary sm:text-6xl">
          Blog
        </h1>
        <p className="mt-4 text-body text-muted">
          Thoughts on building, leading, and shipping software.
        </p>
      </Reveal>

      <div className="mt-14 border-t border-line">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 60}>
            <BlogRow post={post} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
