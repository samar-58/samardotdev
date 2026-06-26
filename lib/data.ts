export const siteConfig = {
  name: "Samar",
  title: "Full Stack Developer",
  email: "sayedsamar58@gmail.com",
  github: "https://github.com/samar-58",
  linkedin: "https://www.linkedin.com/in/samar-sayyad-2641722bb/",
  twitter: "https://x.com/samardotdev",
  githubUsername: "samar-58",
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "languages",
    items: ["TypeScript", "Rust", "Solidity", "JavaScript", "Python"],
  },
  {
    category: "frontend",
    items: [
      "React Native",
      "Expo",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "TanStack",
      "Redux",
      "Zustand",
    ],
  },
  {
    category: "backend",
    items: [
      "Node.js",
      "Bun.js",
      "Express.js",
      "Hono.js",
      "Axum",
      "WebSockets",
      "Redis",
    ],
  },
  {
    category: "databases & ORMs",
    items: ["PostgreSQL", "Prisma", "Drizzle", "MongoDB", "Mongoose", "Neon"],
  },
  {
    category: "web3 / blockchain",
    items: [
      "Solidity",
      "Anchor",
      "Web3.js",
      "Ethers.js",
      "Wagmi",
      "Privy",
      "Foundry",
      "EIP-712",
      "UUPS",
      "EIP-1167",
      "Beacon Proxy",
    ],
  },
  {
    category: "genAI / AI",
    items: [
      "LLMs",
      "RAG",
      "Embeddings",
      "Vector DBs",
      "Weaviate",
      "Qdrant",
      "Agents",
      "Tool Calling",
      "MCP",
    ],
  },
  {
    category: "infrastructure",
    items: [
      "AWS",
      "Docker",
      "Git",
      "GitHub",
      "GitLab",
      "API Gateway",
      "Lambda",
      "ECR",
      "ECS",
    ],
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "full stack developer",
    company: "arysoft global services",
    period: "2025",
    bullets: [
      "built and maintained full-stack product features using TypeScript across frontend, backend APIs, database workflows, admin dashboards, and production states",
      "GoSchoolify: contributed to school ERP workflows — attendance, scheduling, communication, role-based access, and parent / staff journeys",
      "Aryventory: contributed to GST billing and inventory management for mobile-store businesses — tracking, billing flows, and dashboards",
    ],
  },
  {
    role: "freelance app developer",
    company: "upwork",
    period: "project-based",
    bullets: [
      "delivered client-facing mobile and full-stack features from requirements to deployable UI, APIs, and release-ready iterations",
      "MealMeal: AI meal-tracking with mobile meal capture, tracking flows, and AI-assisted insights",
      "HSL: service-commerce and appointment experience for hair-system customers with polished UI",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string | null;
  github: string | null;
};

export const projects: Project[] = [
  {
    title: "HausPet",
    description:
      "full-stack + genAI veterinary care platform connecting pet owners, clinics, and vets through web and mobile",
    tech: ["TypeScript", "Next.js", "React Native", "Node.js", "PostgreSQL", "AI"],
    link: "https://helpmehauspet.net",
    github: null,
  },
  {
    title: "CLOB Matching Engine",
    description:
      "central limit order book in Rust with price-time priority matching and stateful execution engine",
    tech: ["Rust", "Axum"],
    link: null,
    github: "https://github.com/samar-58/clob",
  },
  {
    title: "CLMM",
    description:
      "Uniswap V3 style concentrated liquidity market maker for Solana using Anchor",
    tech: ["Rust", "Anchor", "Solana"],
    link: null,
    github: "https://github.com/samar-58/clmm",
  },
  {
    title: "SolGuard",
    description:
      "onchain RBAC protocol — composable role-based access control for Solana programs",
    tech: ["TypeScript", "Solana", "Anchor"],
    link: "https://solguard.samardev.xyz",
    github: "https://github.com/samar-58/solguard",
  },
  {
    title: "Crowdmint",
    description:
      "data labelling platform with Solana-based reward distribution for workers",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Solana", "AWS"],
    link: "https://crowdmint.samardev.xyz",
    github: null,
  },
  {
    title: "MCP Intent Firewall",
    description:
      "runtime policy enforcement and validation for MCP tool-using AI agents",
    tech: ["TypeScript", "MCP"],
    link: null,
    github: "https://github.com/samar-58/mcp-intent-firewall",
  },
];
