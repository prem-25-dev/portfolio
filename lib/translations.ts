import type { Lang } from "@/contexts/LanguageContext";

export type NavLabels = {
  work: string;
  about: string;
  blog: string;
  contact: string;
  toggle: string;
};

export type SkillHeadings = {
  shipWith: string;
  vibeCoding: string;
  also: string;
};

export type TimelineEntry = {
  year: string;
  event: string;
};

export type HomeCopy = {
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  subheading: string;
  description: string;
  workLabel: string;
  blogLabel: string;
};

export type AboutSnippetCopy = {
  title: string;
  description: string;
  linkLabel: string;
};

export type AboutBodyCopy = {
  title: string;
  sections: {
    heading: string;
    content: string;
  }[];
  timelineLabel: string;
  skillsLabel: string;
};

export const navLabels: Record<Lang, NavLabels> = {
  en: {
    work: "Work",
    about: "About",
    blog: "Blog",
    contact: "Contact",
    toggle: "தமிழ்",
  },
  ta: {
    work: "பணிகள்",
    about: "என்னை பற்றி",
    blog: "வலைப்பதிவு",
    contact: "தொடர்பு",
    toggle: "EN",
  },
};

export const skillHeadings: Record<Lang, SkillHeadings> = {
  en: {
    shipWith: "I ship with",
    vibeCoding: "Vibe coding",
    also: "Also",
  },
  ta: {
    shipWith: "நான் அனுப்புவது",
    vibeCoding: "வைப் கோடிங்",
    also: "மேலும்",
  },
};

export const timelineEvents: Record<Lang, TimelineEntry[]> = {
  en: [
    { year: "2024", event: "Raspberry Pi, home server, and the rabbit hole that followed" },
    { year: "2024", event: "Built biometric automation for Shree Balaji Group of Companies" },
    { year: "2025", event: "MRS Agency billing software shipped" },
    { year: "2025", event: "Founded Ikaruz" },
    { year: "2026", event: "First freelance client — Muthu Enterprises billing app" },
    { year: "2026", event: "Joined Kalvium at SJU" },
    { year: "Now", event: "Building the MUN Community App + growing Ikaruz" },
  ],
  ta: [
    { year: "2024", event: "Raspberry Pi, வீட்டு சர்வர் — தொழில்நுட்பம் என் வாழ்வில் நுழைந்தது" },
    { year: "2024", event: "Shree Balaji குழுமத்திற்காக biometric தானியக்க மென்பொருள்" },
    { year: "2025", event: "MRS Agency billing மென்பொருள் வெளியிட்டேன்" },
    { year: "2025", event: "Ikaruz நிறுவினேன்" },
    { year: "2026", event: "முதல் freelance கிளையன்ட் — Muthu Enterprises billing app" },
    { year: "2026", event: "Kalvium at SJU-ல் சேர்ந்தேன்" },
    { year: "Now", event: "MUN Community App + Ikaruz வளர்ச்சி" },
  ],
};

export const homeCopy: Record<Lang, HomeCopy> = {
  en: {
    line1: "I build",
    line2: "real software",
    line3: "for real businesses,",
    line4: "and I'm just getting started.",
    subheading: "D Premsankar — Full-Stack Developer & Founder of Ikaruz",
    description:
      "Started freelancing at 16 with a billing app for a local business. Then came Raspberry Pi, a Linux home server, biometric automation for a manufacturing group. Now I run Ikaruz and study at Kalvium at SJU — building while everyone else is still figuring out what to build.",
    workLabel: "See My Work",
    blogLabel: "Read the Blog",
  },
  ta: {
    line1: "நான் கட்டுகிறேன்",
    line2: "உண்மையான மென்பொருள்",
    line3: "வணிகங்களுக்காக —",
    line4: "இது தொடக்கம் மட்டுமே.",
    subheading: "D பிரேம்சங்கர் — Full-Stack டெவலப்பர் & Ikaruz நிறுவனர்",
    description:
      "16 வயதில் freelancing தொடங்கினேன் — உள்ளூர் நிறுவனத்திற்கு billing app. பிறகு Raspberry Pi, Linux home server, biometric automation. இப்போது Ikaruz நடத்துகிறேன், Kalvium at SJU-வில் படிக்கிறேன்.",
    workLabel: "என் பணிகளை பாருங்கள்",
    blogLabel: "வலைப்பதிவு படிக்க",
  },
};

export const aboutSnippetCopy: Record<Lang, AboutSnippetCopy> = {
  en: {
    title:
      "I've been shipping code for real clients since I was 16 — billing systems, automation, servers. Started with curiosity and a Raspberry Pi, and never really stopped.",
    description: "Now I'm at Kalvium at SJU, building Ikaruz.",
    linkLabel: "Full story",
  },
  ta: {
    title:
      "16 வயதிலிருந்து உண்மையான கிளையன்ட்களுக்கு மென்பொருள் வழங்கி வருகிறேன் — billing, automation, servers. Raspberry Pi-யிலிருந்து தொடங்கியது, நிறுத்தவே இல்லை.",
    description: "இப்போது Kalvium at SJU-வில், Ikaruz கட்டுகிறேன்.",
    linkLabel: "முழு கதை",
  },
};

export const aboutBodyCopy: Record<Lang, AboutBodyCopy> = {
  en: {
    title: "The full story.",
    sections: [
      {
        heading: "The builder",
        content:
          "I'm Prem. The first time code felt real was a billing app I built for Muthu Enterprises — a local business, an actual deadline, money changing hands at the end. After that: Raspberry Pi, a home server on an old PC, biometric attendance automation for a manufacturing group. Flutter is my daily driver. FastAPI for backends. Linux because I don't like black boxes.",
      },
      {
        heading: "The extrovert",
        content:
          "I can spend six hours debugging alone and then walk straight into a full auditorium and talk. Both feel natural. I've done MUN conferences, appeared on Puthiya Thalaimurai's 'Veetukoru Vignyani' (a Tamil TV show about young innovators), and I have a habit of ending up in charge of things I didn't plan to run. Not because I sought it out — it keeps happening.",
      },
      {
        heading: "The founder",
        content:
          "Ikaruz is an AI-powered software company I started in 2025. The idea: businesses need real software but can't afford enterprise prices, and I've been building exactly that for years. Now I'm at Kalvium at SJU. I'm 18. I have time.",
      },
    ],
    timelineLabel: "TIMELINE",
    skillsLabel: "SKILLS",
  },
  ta: {
    title: "முழு கதை.",
    sections: [
      {
        heading: "கட்டுபவர்",
        content:
          "நான் பிரேம். Muthu Enterprises-க்கு billing app கட்டியபோதுதான் code உண்மையாக உணர்ந்தேன் — உண்மையான deadline, உண்மையான பணம். பிறகு Raspberry Pi, பழைய PC-இல் Linux server, Shree Balaji குழுமத்திற்கு biometric automation. Flutter எனது daily driver. FastAPI backends-க்கு. Linux — black boxes பிடிக்காது.",
      },
      {
        heading: "பிறரிடம் திறந்தவர்",
        content:
          "ஆறு மணி நேரம் தனியாக debug செய்துவிட்டு, நேரடியாக அரங்கில் பேசலாம் — இரண்டும் இயல்பு. MUN மாநாடுகளில் கலந்துகொண்டேன், புதிய தலைமுறை தொலைக்காட்சியின் 'வீட்டுக்கோர் விஞ்ஞானி' நிகழ்ச்சியில் தோன்றினேன். திட்டமிடாமல் பொறுப்பு ஏற்கும் பழக்கம் உண்டு — தேடவில்லை, தானாக நடக்கிறது.",
      },
      {
        heading: "நிறுவனர்",
        content:
          "Ikaruz — 2025-ல் நான் தொடங்கிய AI-powered software நிறுவனம். நிறுவனங்களுக்கு உண்மையான மென்பொருள் வேண்டும், enterprise விலை கட்ட முடியாது — நான் வருடங்களாக அதையே கட்டுகிறேன். இப்போது Kalvium at SJU-வில். வயது 18. நேரம் இருக்கிறது.",
      },
    ],
    timelineLabel: "காலவரிசை",
    skillsLabel: "திறன்கள்",
  },
};
