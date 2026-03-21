export type SkillCategory =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Cloud & Infra"
  | "Data & Messaging"
  | "Monitoring & DevOps";

export interface Skill {
  name: string;
  category: SkillCategory;
  context?: string;
}

export const skills: Skill[] = [
  { name: "Java", category: "Languages", context: "Primary language at both Capital One and BNSF. Built the CRM integration platform and cargo claim system end-to-end." },
  { name: "Python", category: "Languages", context: "Used to build analytics pipelines for the dealer recommendation engine at Capital One — data aggregation and scoring logic." },
  { name: "TypeScript", category: "Languages", context: "Wrote the webhook component for the email notification system at Capital One, handling customer data injection into Pinpoint templates." },
  { name: "JavaScript", category: "Languages", context: "Used across frontend work and Lambda function scripting throughout my time at Capital One." },
  { name: "SQL", category: "Languages", context: "Heavily used at BNSF for cargo claim data — writing complex queries to support claims inspectors and reporting." },

  { name: "React", category: "Frontend", context: "Built the analytics dashboard UI for the dealer recommendation engine at Capital One." },
  { name: "Angular", category: "Frontend", context: "Developed the cargo claim management frontend at BNSF Railway — the main interface for claims inspectors." },
  { name: "GraphQL", category: "Frontend", context: "Used as the API layer for the recommendation engine at Capital One, allowing flexible querying across dealer data." },

  { name: "Spring Boot", category: "Backend", context: "Core framework for building the CRM integration platform and cargo claim system — REST APIs, service layers, and Kafka consumers." },
  { name: "REST API", category: "Backend", context: "At BNSF, built a REST API to consume and route Kafka stream messages for the cargo claim workflow." },
  { name: "Hibernate", category: "Backend", context: "Used as the ORM layer in Spring Boot services for database interactions at BNSF Railway." },

  { name: "AWS Lambda", category: "Cloud & Infra", context: "Serverless compute for the CRM integration platform and email notification system at Capital One." },
  { name: "AWS Pinpoint", category: "Cloud & Infra", context: "Core service for the bulk email notification system — built the workflow and webhook to deliver customer data into Pinpoint templates." },
  { name: "CloudFormation", category: "Cloud & Infra", context: "Managed infrastructure as code for the CRM platform at Capital One — stacks for Lambda, DynamoDB, and IAM." },
  { name: "CDK", category: "Cloud & Infra", context: "Used alongside CloudFormation to define and provision AWS infrastructure programmatically at Capital One." },
  { name: "Terraform", category: "Cloud & Infra", context: "Used for infrastructure provisioning across multi-environment deployments." },
  { name: "Docker", category: "Cloud & Infra", context: "Containerized services for consistent local development and deployment pipelines." },
  { name: "Kubernetes", category: "Cloud & Infra", context: "Orchestrated containerized workloads across services in production environments." },
  { name: "YAML", category: "Cloud & Infra", context: "Configuration language used extensively in CloudFormation templates, CDK constructs, and Kubernetes manifests." },

  { name: "Kafka", category: "Data & Messaging", context: "At BNSF, built a REST API to consume and route Kafka stream messages as part of an end-to-end claims processing pipeline. Also used in Capital One's notification system." },
  { name: "DynamoDB", category: "Data & Messaging", context: "Primary data store for the CRM integration platform and recommendation engine at Capital One — low-latency access at scale." },
  { name: "PostgreSQL", category: "Data & Messaging", context: "Used for relational data needs in side projects and service integrations." },
  { name: "Redis", category: "Data & Messaging", context: "Caching layer to reduce latency for frequently accessed data in high-throughput services." },

  { name: "Splunk", category: "Monitoring & DevOps", context: "Built real-time monitoring dashboards at Capital One that cut incident resolution time by 90% for the CRM platform." },
  { name: "New Relic", category: "Monitoring & DevOps", context: "Observability and performance monitoring for the dealer recommendation engine at Capital One." },
  { name: "PagerDuty", category: "Monitoring & DevOps", context: "Integrated with Splunk dashboards for alerting and on-call incident management at Capital One." },
  { name: "Jenkins", category: "Monitoring & DevOps", context: "Used for CI/CD pipelines — build, test, and deployment automation across services." },
  { name: "Git", category: "Monitoring & DevOps", context: "Used daily across all projects for version control, code reviews, and branching strategies." },
];

export const categoryColors: Record<SkillCategory, string> = {
  "Languages":           "bg-amber-50   text-amber-800  border-amber-200",
  "Frontend":            "bg-sky-50     text-sky-800    border-sky-200",
  "Backend":             "bg-teal-50    text-teal-800   border-teal-200",
  "Cloud & Infra":       "bg-green-50   text-green-800  border-green-200",
  "Data & Messaging":    "bg-orange-50  text-orange-800 border-orange-200",
  "Monitoring & DevOps": "bg-slate-100  text-slate-700  border-slate-300",
};

export const categoryDot: Record<SkillCategory, string> = {
  "Languages":           "bg-amber-400",
  "Frontend":            "bg-sky-400",
  "Backend":             "bg-teal-400",
  "Cloud & Infra":       "bg-green-500",
  "Data & Messaging":    "bg-orange-400",
  "Monitoring & DevOps": "bg-slate-400",
};
