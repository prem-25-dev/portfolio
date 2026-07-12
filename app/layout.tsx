import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono, Instrument_Serif, Cormorant_Garamond } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SplashScreen from "@/components/SplashScreen";
import Providers from "@/components/Providers";
import "@/styles/globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-calligraphy",
  display: "swap",
});

const siteUrl = "https://premsankar.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "D Premsankar — Full-Stack Developer, AI Builder & Founder of Ikaruz",
    template: "%s — D Premsankar",
  },
  description:
    "D Premsankar (Prem Sankar) is a full-stack developer, AI builder, and founder of Ikaruz. Python, Flutter & FastAPI developer from Chennai. Vibe coder building real software for real businesses.",
  keywords: [
    "D Premsankar",
    "Premsankar",
    "Prem Sankar",
    "Prem developer",
    "D Premsankar developer",
    "Ikaruz",
    "Ikaruz founder",
    "founder of Ikaruz",
    "Ikaruz co-founder",
    "full stack developer",
    "full-stack developer India",
    "Python developer",
    "Flutter developer",
    "FastAPI developer",
    "AI developer",
    "AI builder",
    "vibe coder",
    "web developer Chennai",
    "desktop developer",
    "software developer India",
    "freelance developer India",
    "Kalvium",
    "SJU developer",
    "young developer India",
  ],
  authors: [{ name: "D Premsankar", url: siteUrl }],
  creator: "D Premsankar",
  openGraph: {
    title: "D Premsankar — Full-Stack Developer, AI Builder & Founder of Ikaruz",
    description:
      "Full-stack developer and founder of Ikaruz. Python, Flutter & FastAPI. Building real software for real businesses.",
    images: [{ url: "/photo.jpg", width: 1200, height: 630, alt: "D Premsankar" }],
    type: "website",
    url: siteUrl,
    siteName: "D Premsankar",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "D Premsankar — Full-Stack Developer, AI Builder & Founder of Ikaruz",
    description:
      "Full-stack developer and founder of Ikaruz. Python, Flutter & FastAPI. Building real software.",
    images: ["/photo.jpg"],
  },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "D Premsankar",
  alternateName: ["Premsankar", "Prem Sankar", "D. Premsankar", "Prem"],
  url: siteUrl,
  image: `${siteUrl}/photo.jpg`,
  jobTitle: ["Full-Stack Developer", "AI Builder", "Founder", "Vibe Coder"],
  description:
    "D Premsankar is a full-stack developer, AI builder, Python developer, Flutter developer, and the founder of Ikaruz — an AI-powered software company.",
  knowsAbout: [
    "Python",
    "Flutter",
    "FastAPI",
    "Dart",
    "JavaScript",
    "Web Development",
    "AI Development",
    "Vibe Coding",
    "Full-Stack Development",
    "Desktop Development",
    "Linux Server Administration",
    "Software Engineering",
  ],
  founder: {
    "@type": "Organization",
    name: "Ikaruz",
    url: "https://ikaruz.in",
    description:
      "Ikaruz is an AI-powered software company that builds real software for businesses without the enterprise price tag, founded by D Premsankar.",
  },
  sameAs: [
    "https://github.com/prem-25-dev",
    "https://www.linkedin.com/in/premsankar25",
    "https://www.instagram.com/d_premsankar_08",
    "https://ikaruz.in",
  ],
  email: "d.premsankar25@gmail.com",
  nationality: "Indian",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "SJU — Kalvium",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetbrains.variable} ${instrumentSerif.variable} ${cormorant.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="font-body">
        <Providers>
          <SplashScreen />
          <CustomCursor />
          <Nav />
          <main className="pt-16">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
