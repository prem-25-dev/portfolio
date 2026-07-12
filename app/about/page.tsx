import type { Metadata } from "next";
import AboutBody from "@/components/AboutBody";

export const metadata: Metadata = {
  title: "About",
  description:
    "D Premsankar — builder, leader, founder. Head Boy turned full-stack developer, now building Ikaruz while studying at Kalvium at SJU.",
  openGraph: {
    title: "About — D Premsankar",
    description:
      "Builder, leader, founder. Head Boy turned full-stack developer, now building Ikaruz.",
    images: ["/photo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About — D Premsankar",
    description:
      "Builder, leader, founder. Head Boy turned full-stack developer, now building Ikaruz.",
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
