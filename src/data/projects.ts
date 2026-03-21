export interface Project {
  title: string;
  description: string;
  learned: string;
  stack: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  status?: "live" | "wip" | "coming-soon";
}

export const projectsData: Project[] = [
  {
    title: "ADEX Connect",
    description:
      "Full-stack advertisement exchange marketplace — designed and built with AI assistance from the ground up. Advertisers and publishers can transact in real time, with Stripe handling the full payment lifecycle including checkout, webhooks, and billing.",
    learned:
      "Navigated Stripe's payment flow end-to-end — checkout sessions, webhook verification, and subscription billing. Learned how to prompt AI effectively to scaffold and debug complex full-stack features quickly, cutting development time significantly.",
    stack: ["Next.js", "Express.js", "MySQL", "Stripe", "Socket.io", "Tailwind CSS", "Radix UI"],
    liveUrl: "https://adexconnect.com/",
    status: "live",
  },
  {
    title: "FitMe",
    description:
      "AI-powered fitness tracking app built solo — native iOS (SwiftUI) with a TypeScript/Fastify backend. Generates personalized workout plans via ChatGPT, tracks sessions with set/rep data, and features a mission-based XP system with tier progression. Syncs with Apple HealthKit and includes an Apple Watch companion app.",
    learned:
      "Built entirely through vibe coding — using AI as a collaborative engineering partner to design architecture, debug Swift concurrency, and ship features I'd never touched before (HealthKit, WatchKit, Firebase Auth). The biggest takeaway was learning how to direct AI effectively: writing precise prompts, catching hallucinations, and iterating fast without losing code quality.",
    stack: ["SwiftUI", "Swift", "Fastify", "TypeScript", "PostgreSQL", "Firebase Auth", "OpenAI API", "HealthKit", "WatchKit"],
    status: "wip",
  },
];
