import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono, Instrument_Serif, Noto_Sans_Tamil } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
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

const notoSansTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-tamil",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://premsankar.dev"),
  title: {
    default: "D Premsankar — Full-Stack Developer & Founder",
    template: "%s — D Premsankar",
  },
  description:
    "Full-Stack Developer and Founder of Ikaruz. I ship production software for real clients — billing systems, automation pipelines, and more.",
  openGraph: {
    title: "D Premsankar — Full-Stack Developer & Founder",
    description:
      "Full-Stack Developer and Founder of Ikaruz. I ship production software for real clients.",
    images: ["/photo.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "D Premsankar — Full-Stack Developer & Founder",
    description:
      "Full-Stack Developer and Founder of Ikaruz. I ship production software for real clients.",
    images: ["/photo.jpg"],
  },
  alternates: {
    canonical: "/",
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
      className={`${sora.variable} ${inter.variable} ${jetbrains.variable} ${instrumentSerif.variable} ${notoSansTamil.variable}`}
    >
      <body className="font-body">
        <Providers>
          <CustomCursor />
          <Nav />
          <main className="pt-16">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
