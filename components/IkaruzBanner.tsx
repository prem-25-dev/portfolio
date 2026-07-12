import { ArrowUpRight } from "lucide-react";

export default function IkaruzBanner() {
  return (
    <div className="border-l-[3px] border-accent bg-surface px-8 py-12 sm:px-12">
      <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
        Building something bigger.
      </h2>
      <p className="mt-4 max-w-2xl text-body text-muted">
        Ikaruz is my AI-powered software company — real products, real impact,
        without breaking the bank.
      </p>
      <a
        href="https://ikaruz.in"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 border border-accent px-6 py-3 font-mono text-tag text-accent transition-colors duration-300 hover:bg-accent hover:text-bg"
      >
        [ Visit Ikaruz <ArrowUpRight size={14} aria-hidden="true" /> ]
      </a>
    </div>
  );
}
