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
  learning: string;
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
  accent: string;
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
    work: "வேலை",
    about: "பற்றி",
    blog: "வலைப்பதிவு",
    contact: "தொடர்பு",
    toggle: "EN",
  },
};

export const skillHeadings: Record<Lang, SkillHeadings> = {
  en: {
    shipWith: "I ship with",
    learning: "Currently learning",
    also: "Also",
  },
  ta: {
    shipWith: "நான் இவற்றுடன் தொடர்கிறேன்",
    learning: "தற்காலிகமாகக் கற்றுக்கொண்டால்",
    also: "மேலும்",
  },
};

export const timelineEvents: Record<Lang, TimelineEntry[]> = {
  en: [
    { year: "2023", event: "First freelance client — Muthu Enterprises billing app" },
    { year: "2024", event: "Started Raspberry Pi projects and home server experiments" },
    { year: "2024", event: "Built biometric automation for Shree Balaji Group of Companies" },
    { year: "2025", event: "Founded Ikaruz" },
    { year: "2025", event: "MRS Agency billing software shipped" },
    { year: "2026", event: "Joined Kalvium at SJU" },
    { year: "Now", event: "Building MUN community apps and growing Ikaruz" },
  ],
  ta: [
    { year: "2023", event: "முதலாவது ஃப்ரீலான்ஸ் கிளையன்ட் — மuthu எண்டர்பிரைசஸ் பில்லிங் ஆப்" },
    { year: "2024", event: "ராஸ்பெர்ரி பை திட்டங்கள் மற்றும் ஹோம் சர்வர் அனுபவங்கள்" },
    { year: "2024", event: "ச்ரீ பாலாஜி குழுமத்திற்கான பைமெட்ரிக் ஆட்டோமேஷன்" },
    { year: "2025", event: "ஐகரூஸ் நிறுவப்பட்டது" },
    { year: "2025", event: "MRS ஏஜென்சி பில்லிங் மென்பொருள் வெளியிடப்பட்டது" },
    { year: "2026", event: "கால்வியம் at SJU சேர்வு" },
    { year: "Now", event: "MUN சமூக செயலிகள் மற்றும் ஐகரூஸ் வளரிப்பு" },
  ],
};

export const homeCopy: Record<Lang, HomeCopy> = {
  en: {
    line1: "I build",
    line2: "real software",
    line3: "for real businesses,",
    line4: "and I’m just getting started.",
    accent: "real software",
    subheading: "D Premsankar — Full-Stack Developer & Founder of Ikaruz",
    description:
      "Most people my age are picking a major. I’m shipping billing systems, running servers, and building a company. Real clients, real production, real stakes — and this is just the warm-up.",
    workLabel: "See My Work",
    blogLabel: "Read the Blog",
  },
  ta: {
    line1: "நான் உருவாக்குகிறேன்",
    line2: "உண்மையான மென்பொருள்",
    line3: "உண்மையான வணிகங்களுக்கு,",
    line4: "இப்போது நான் தலைமுறையாக தொடங்குகிறேன்.",
    accent: "உண்மையான மென்பொருள்",
    subheading: "டீ. பிரேம்சங்கர் — முழு-ஸ்டாக் டெவலப்பர் மற்றும் ஐகரூஸ் நிறுவனர்",
    description:
      "என் வயதிலுள்ள பலர் ஒரு முக்கிய பாடத்தைத் தேர்ந்தெடுக்கிறார்கள். நான் பில்லிங் அமைப்புகளை அனுப்புகிறேன், சர்வர்களை இயக்குகிறேன் மற்றும் ஒரு நிறுவனத்தை உருவாக்குகிறேன். உண்மையான கிளையன்டுகள், உண்மையான தயாரிப்பு, உண்மையான பொறுப்புகள் — இதுவே ஆரம்பமே.",
    workLabel: "என் வேலை பார்க்க",
    blogLabel: "வலைப்பதிவு படிக்க",
  },
};

export const aboutSnippetCopy: Record<Lang, AboutSnippetCopy> = {
  en: {
    title:
      "I write code that runs in production for real companies. It started with curiosity — a Raspberry Pi, a home server, a first client — and got out of hand in the best way.",
    description: "Now I’m at Kalvium at SJU, building Ikaruz.",
    linkLabel: "Full story",
  },
  ta: {
    title:
      "உண்மையான நிறுவனங்களுக்கு இயங்கும் மென்பொருள் உருவாக்குகிறேன். இது ஆர்வத்தால் தொடங்கியது — ராஸ்பெர்ரி பை, ஒரு ஹோம் சர்வர், ஒரு முதல் கிளையன்ட் — மற்றும் இது சிறந்த வழியில் வளர்ந்து விட்டது.",
    description: "இப்போது நான் கால்வியம் at SJU-இல் இருக்கிறேன், ஐகரூஸை உருவாக்குகிறேன்.",
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
          "I’m D Premsankar. I write code that runs in production for real companies. I’ve built billing systems that businesses use every single day, automated attendance pipelines that replaced hours of manual work, managed infrastructure, and shipped software for clients who needed it to actually work — not just look good in a demo. Flutter is where I live; FastAPI is how I think about backends; and I’ve been known to turn a regular PC into a Linux server just to see if I could.",
      },
      {
        heading: "The extrovert",
        content:
          "I’m an extrovert who happens to love sitting alone writing code. Both things are true, and I’ve stopped trying to pick one. I’ve competed in MUN conferences, given speeches to full auditoriums, and appeared on Puthiya Thalaimurai’s “Veetukoru Vignyani” — a Tamil TV show that profiles young innovators. If there’s an event to run or a community to build, I usually end up in the middle of it — not because anyone assigned it, but because it’s fun.",
      },
      {
        heading: "The founder",
        content:
          "I’m now at Kalvium at SJU, building Ikaruz — an AI-powered software company that helps businesses get real software without the enterprise price tag. I might be younger than most people doing this. I don’t think that’s a disadvantage. I think it means I have more to prove and more time to do it.",
      },
    ],
    timelineLabel: "TIMELINE",
    skillsLabel: "SKILLS",
  },
  ta: {
    title: "முழு கதை.",
    sections: [
      {
        heading: "கட்டுமானம்",
        content:
          "நான் டீ. பிரேம்சங்கர். உண்மையான நிறுவனங்களுக்கு இயங்கும் மென்பொருள் எழுதுகிறேன். தினமும் பயன்படுத்தப்படும் பில்லிங் அமைப்புகளை நான் கட்டி வந்தேன், பல மணித்தியால் மனுக்குப் பதிலாக நேரத்தை மீட்டமைக்கும் ஹாஜர் செயலிகளை தானியக்கமாக செய்தேன், நேரடியான கட்டமைப்புகளை நிர்வகித்தேன், மற்றும் உண்மையாகவே வேலை செய்யவேண்டிய கிளையன்ட்களுக்கான மென்பொருளை வெளியிட்டேன் — டெமோக்காக நல்லது அப்படியே அல்ல. Flutter எனக்கு வீடு; FastAPI எனது பின்தள உயர்வுகளைத் தெரியச் செய்கிறது.",
      },
      {
        heading: "பொருத்தமானவர்",
        content:
          "தனியாகக் அமர்ந்து குறியீடு எழுதும்போது மகிழ்கிறேன், அதே நேரத்தில் வெளியே சென்று மொழி பேசவும் விரும்புகிறேன். இது இரண்டும் உண்மையாகும், மற்றும் ஒன்றைத் தேர்ந்தெடுக்க முயற்சித்ததை நிறுத்தி விட்டேன். MUN மாநாடுகளில் போட்டியெடுத்தேன், முழு அரங்கிற்கு உரையாற்றினேன், மற்றும் புதிது தலையமரையின் “வீட்டுக்கோர் விஞ்ஞானி” நிகழ்ச்சியில் தோன்றினேன். நிகழ்ச்சி நடத்த அல்லது சமூகத்தை உருவாக்க விருந்துண்டால், நான் பொதுவாக அதில் நடுவில் இருப்பேன்.",
      },
      {
        heading: "நிறுவனர்",
        content:
          "இப்போது நான் கால்வியம் at SJU-இல் இருக்கிறேன், ஐகரூஸை உருவாக்குகிறேன் — வணிகங்களுக்கு உண்மையான மென்பொருளைப் பெற உதவும் AIயால் இயக்கப்படும் நிறுவனம். நான் இதை செய்யும் பெரும்பாலானவர்களைவிட இளம் இருக்கலாம். இது குறைசா என்று நான் எண்ணவில்லை. மாறாக, இது காட்டுகிறது நான் நிரூபிக்க ரொம்பவே இருக்கிறேன் மற்றும் செய்ய இன்னும் அதிக நேரம் உள்ளது.",
      },
    ],
    timelineLabel: "காலவரிசை",
    skillsLabel: "திறன்கள்",
  },
};
