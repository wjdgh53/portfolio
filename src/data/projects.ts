export interface Project {
  title: string;
  description: string;
  learned: string;
  stack: string[];
  image?: string;
  images?: string[];
  githubUrl?: string;
  liveUrl?: string;
  status?: "live" | "wip" | "coming-soon";
}

export const projectsData: Project[] = [
  {
    title: "ADEX Connect",
    description:
      "Full-stack ad exchange marketplace where advertisers and publishers transact in real time. Stripe handles the full payment lifecycle — checkout, webhooks, and billing.",
    learned:
      "Navigated Stripe end-to-end and learned to prompt AI effectively to scaffold and debug complex features fast, cutting development time significantly.",
    stack: ["Next.js", "Express.js", "MySQL", "Stripe", "Socket.io", "Tailwind CSS", "Radix UI"],
    image: "/images/projects/adex.png",
    liveUrl: "https://adexconnect.com/",
    status: "live",
  },
  {
    title: "FitMe",
    description:
      "AI-powered iOS fitness app with personalized workout plans via ChatGPT, set/rep tracking, XP tier progression, and an Apple Watch companion app synced with HealthKit.",
    learned:
      "Shipped native iOS features (HealthKit, WatchKit, Firebase Auth) through vibe coding — directing AI as a collaborative partner to move fast without losing code quality.",
    stack: ["SwiftUI", "Swift", "Fastify", "TypeScript", "PostgreSQL", "Firebase Auth", "OpenAI API", "HealthKit", "WatchKit"],
    images: [
      "/images/projects/fitme.png",
      "/images/projects/fitme-2.png",
      "/images/projects/fitme-3.png",
    ],
    status: "wip",
  },
];
