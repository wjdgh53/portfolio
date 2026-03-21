export interface CareerProject {
  name: string;
  description: string;
  bullets: string[];
  stack: string[];
}

export interface CareerItem {
  company: string;
  logo: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  projects: CareerProject[];
}

export const careerData: CareerItem[] = [
  {
    company: "Capital One",
    logo: "https://logo.clearbit.com/capitalone.com",
    role: "Senior Associate Software Developer",
    period: "Jan 2021 – Feb 2026",
    location: "Chantilly, VA",
    summary:
      "As a Senior Associate Software Developer, I owned the full lifecycle of enterprise integration platforms — from architecture and cross-team API alignment to production monitoring and infrastructure as code. I worked closely with product, data, and four engineering teams to ship systems at scale.",
    projects: [
      {
        name: "CRM Integration Platform",
        description:
          "Architected an enterprise integration platform that processed 500 leads per minute across the national dealer network.",
        bullets: [
          "Coordinated with 4 engineering teams to align data mapping and API specifications",
          "Built real-time monitoring dashboards, cutting incident resolution time by 90%",
          "Managed infrastructure as code using AWS CloudFormation & CDK",
        ],
        stack: ["Java", "Spring Boot", "AWS Lambda", "CloudFormation", "CDK", "DynamoDB", "Splunk"],
      },
      {
        name: "Email Notification System",
        description:
          "Architected a scalable bulk email delivery workflow powered by AWS Pinpoint.",
        bullets: [
          "Built a webhook component to inject customer data into Pinpoint templates",
          "Produced technical guides and system documentation to improve team alignment",
        ],
        stack: ["AWS Pinpoint", "Lambda", "TypeScript", "Kafka"],
      },
      {
        name: "Dealer Recommendation Engine",
        description:
          "Redesigned the recommendation engine to support multi-dealer options, improving selection diversity and system capability.",
        bullets: [
          "Developed robust analytics systems supporting data-driven decisions across multiple departments",
          "Improved recommendation diversity metrics measurably across the dealer network",
        ],
        stack: ["Python", "GraphQL", "React", "DynamoDB", "New Relic"],
      },
    ],
  },
  {
    company: "InfoSys — BNSF Railway",
    logo: "https://logo.clearbit.com/infosys.com",
    role: "Senior Associate Software Engineer",
    period: "May 2018 – Dec 2020",
    location: "Fort Worth, TX",
    summary:
      "As a Senior Associate Software Engineer, I was embedded with BNSF Railway's team to design and build mission-critical freight logistics software — translating complex business requirements from claims inspectors directly into backend architecture and tested, production-ready code.",
    projects: [
      {
        name: "Cargo Claim System",
        description:
          "Built a full-stack claims management system enabling compliant cargo claim processing across the national freight network.",
        bullets: [
          "Translated business requirements to technical specs, collaborating directly with claims inspectors",
          "Built a REST API to consume and route Kafka stream messages for end-to-end stream processing",
          "Implemented integration tests using WireMock to ensure reliability under production conditions",
        ],
        stack: ["Java", "Spring Boot", "Kafka", "REST API", "WireMock", "Angular", "SQL"],
      },
      {
        name: "Internal Train Policy Portal",
        description:
          "Designed and shipped a responsive internal web portal for managing and distributing BNSF train operation policies — replacing scattered static documents with a searchable, role-based system accessible to field staff across the network.",
        bullets: [
          "Built a responsive React frontend with a reusable component library, ensuring consistent UX across desktop and tablet",
          "Developed a Spring Boot REST API for policy CRUD operations, versioning, and role-based access control",
          "Designed a normalized SQL schema supporting policy versioning, audit trails, and department-level filtering",
          "Reduced policy lookup time significantly by replacing email-distributed PDFs with a live searchable interface",
        ],
        stack: ["React", "Angular", "Spring Boot", "Java", "SQL", "REST API"],
      },
    ],
  },
];
