import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start px-6 py-32">
      <p className="font-mono text-tag text-accent">[ 404 ]</p>
      <h1 className="mt-4 font-display text-5xl font-extrabold text-primary">
        Nothing here yet.
      </h1>
      <p className="mt-4 text-body text-muted">
        This page doesn&apos;t exist — or I haven&apos;t built it yet.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 font-mono text-tag text-accent transition-opacity hover:opacity-80"
      >
        <ArrowLeft size={14} aria-hidden="true" /> Back home
      </Link>
    </div>
  );
}
