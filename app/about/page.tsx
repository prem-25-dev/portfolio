import type { Metadata } from "next";
import AboutBody from "@/components/AboutBody";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind D Premsankar — how a ₹20,000 software quote at age 13 led to founding Ikaruz, shipping real software for real businesses.",
  openGraph: {
    title: "About — D Premsankar",
    description:
      "Developer, builder, founder. Shipping real software since 16, now building Ikaruz.",
    images: ["/photo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About — D Premsankar",
    description:
      "Developer, builder, founder. Shipping real software since 16, now building Ikaruz.",
    images: ["/photo.jpg"],
  },
  alternates: { canonical: "/about" },
};

function Eyebrow({ label }: { label: string }) {
  return (
    <div className="eyebrow">
      <span className="eyebrow-label">[ {label} ]</span>
      <span className="eyebrow-rule" />
    </div>
  );
}

export default function AboutPage() {
  return <AboutBody />;
}
