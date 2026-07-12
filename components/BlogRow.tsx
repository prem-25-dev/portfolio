import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PostMeta } from "@/lib/blog";

export default function BlogRow({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative block border-b border-line py-7 pl-6 transition-colors duration-300 hover:bg-surface"
    >
      <span
        className="absolute bottom-0 left-0 top-0 w-[3px] origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-2 pr-6 sm:flex-row sm:items-center sm:gap-8">
        <div className="flex-1">
          <h3 className="font-display text-xl font-semibold text-primary transition-colors group-hover:text-accent">
            {post.title}
          </h3>
          <p className="mt-1 text-body text-muted">{post.description}</p>
        </div>

        <div className="flex items-center gap-4 sm:w-52 sm:justify-end">
          <span className="font-mono text-tag text-muted">{post.date}</span>
          <span className="flex items-center gap-1 text-sm text-muted transition-colors group-hover:text-accent">
            Read
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
