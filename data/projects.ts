export type ProjectStatus = "Shipped" | "In Production" | "Building" | "Ongoing";

export interface Project {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  status: ProjectStatus;
  statusIcon: string;
  featured: boolean;
  problem: string;
  built: string[];
  result: string;
}

export const projects: Project[] = [
  {
    slug: "sbgrps-biometric",
    name: "Biometric Attendance Automation",
    description:
      "Automation pipeline that turned raw biometric device data into clean attendance records for Shree Balaji Group of Companies.",
    tech: ["Python", "FastAPI", "PostgreSQL"],
    status: "In Production",
    statusIcon: "✓",
    featured: true,
    problem:
      "Shree Balaji Group of Companies (sbgrps.com) had biometric attendance hardware generating data that wasn't being processed efficiently. Every day meant manual exports and manual entry — slow, repetitive, and error-prone. The hardware worked fine. Everything after it was the bottleneck.",
    built: [
      "An automation pipeline that reads output straight from the biometric devices, processes the raw attendance records, and pushes clean data into their systems.",
      "FastAPI handles the processing layer, PostgreSQL stores the records, and Python glues the device output to the rest of the flow.",
      "The design goal was simple: no human should ever have to touch an export file again. Eliminated manual handling entirely.",
    ],
    result:
      "Running in production at a real company with real employees clocking in every day. The data flows on its own now.",
  },
  {
    slug: "muthu-enterprises",
    name: "Muthu Enterprises Billing App",
    description:
      "Flutter billing app for a local business — invoices, customer records, and a clean workflow simple enough for anyone on staff.",
    tech: ["Flutter", "Dart", "SQLite"],
    status: "Shipped",
    statusIcon: "✓",
    featured: true,
    problem:
      "A local business was managing billing entirely by hand — paper records, no digital trail, and errors piling up month after month. They needed something simple enough for non-technical staff to use every single day, without training sessions or a manual.",
    built: [
      "A Flutter app that runs on both desktop and mobile, backed by SQLite so it works with zero server setup.",
      "Clean login screen, fast billing entry, invoice generation, and customer records — the four things they actually needed, and nothing they didn't.",
      "Responsive layouts so the same codebase feels native on a desktop monitor and a phone screen.",
      "Designed to hand over and walk away: no dependencies to maintain, no cloud bills, no calls at midnight.",
    ],
    result:
      "In daily use at Muthu Enterprises. This was my first paid freelance project — the one that proved I could ship software people rely on.",
  },
  {
    slug: "mrs-agency",
    name: "MRS Agency Billing Software",
    description:
      "Full billing platform with a Flutter frontend and FastAPI + PostgreSQL backend — built for scale, not just for now.",
    tech: ["Flutter", "FastAPI", "Python", "PostgreSQL"],
    status: "Shipped",
    statusIcon: "✓",
    featured: true,
    problem:
      "MRS Agency needed more than a basic billing setup. More clients, more complexity, and data that couldn't live in a single local file — they needed cloud-level reliability with a proper database behind it.",
    built: [
      "A Flutter frontend talking to a FastAPI backend, with PostgreSQL as the source of truth.",
      "Invoice management, client tracking, and multi-record storage — a real step up from the first billing app in both architecture and scope.",
      "Separating the frontend from the backend meant the data layer could grow independently of the UI. That decision paid off fast.",
    ],
    result: "Shipped and in production use.",
  },
  {
    slug: "mun-app",
    name: "MUN Community App",
    description:
      "A purpose-built app for Model UN communities — committees, delegates, and resources in one place instead of twelve group chats.",
    tech: ["Flutter", "Dart", "FastAPI"],
    status: "Building",
    statusIcon: "🔨",
    featured: false,
    problem:
      "Model United Nations communities have no purpose-built app. Communication is scattered across WhatsApp groups and Google Docs. Delegates have no central place for committees, positions, and resources — every conference reinvents its own chaos.",
    built: [
      "A Flutter app for MUN communities: committee listings, delegate profiles, a resource hub, and event schedules.",
      "FastAPI backend to keep everything in sync across a community, not trapped on one device.",
      "This one is personal — I've competed in MUN conferences myself, so I know exactly what's missing because I've felt it missing.",
    ],
    result: "Actively building. Watch this space.",
  },
  {
    slug: "discord-servers",
    name: "Discord Community Management & Bots",
    description:
      "Custom Python bots and server architecture for Discord communities that need to scale without falling apart.",
    tech: ["Python", "discord.py"],
    status: "Ongoing",
    statusIcon: "∞",
    featured: false,
    problem:
      "Large Discord communities are hard to manage at scale. Moderation eats hours, onboarding is chaos, and engagement dies quietly if nobody is tending it. Most servers solve this with more moderators. The better answer is more automation.",
    built: [
      "Managed multiple Discord servers from the ground up — structure, roles, channels, culture.",
      "Custom bots in Python using discord.py: moderation, auto-roles, announcements, and community engagement features.",
      "Server architectures designed to scale — clear channel hierarchies and permission systems that don't break when the member count multiplies.",
    ],
    result: "Multiple communities running. Ongoing work — communities don't ship, they grow.",
  },
  {
    slug: "home-server",
    name: "Self-Hosted Home Server",
    description:
      "A regular PC turned into a live Linux server — hosting real projects, remotely accessible, built to learn what the cloud hides.",
    tech: ["Linux", "Self-hosted", "Networking"],
    status: "Shipped",
    statusIcon: "✓",
    featured: false,
    problem:
      "I needed a server to host and test real projects without paying for cloud. Also — honestly — I just wanted to know if I could do it.",
    built: [
      "Took a regular PC, installed Linux, and configured it as a home server from scratch.",
      "Got it running live with remotely accessible services — real projects, reachable from outside my network.",
      "Learned more about networking, Linux administration, and infrastructure from this one machine than any tutorial could teach. When it's your server, every problem is your problem.",
    ],
    result:
      "Ran successfully. Still the most satisfying thing I've built — because nothing about it was abstract.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);
