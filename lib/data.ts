import type { StaticImageData } from "next/image";

import aryventoryImg from "@/assets/aryventory.png";
import crowdmintImg from "@/assets/crowdmint.png";
import vestingImg from "@/assets/vesting.png";
import avatarImg from "@/assets/samar_pfp.jpeg";

export const siteConfig = {
  name: "Samar",
  title: "Full Stack Developer",
  description:
    "Full stack developer building across web, mobile, blockchain, and AI. TypeScript, Rust, Solidity.",
  url: "https://samardev.xyz",
  email: "sayedsamar58@gmail.com",
  github: "https://github.com/samar-58",
  linkedin: "https://www.linkedin.com/in/samar-sayyad-2641722bb/",
  twitter: "https://x.com/samardotdev",
  twitterHandle: "@samardotdev",
  githubUsername: "samar-58",
  available: true,
  availableLabel: "open to opportunities",
  avatar: avatarImg,
} as const;

export const bio: string[] = [
  "i'm samar, and i like building software across the full stack — web, mobile, blockchain, and AI.",
  "i work with TypeScript, Rust, and Solidity, and i care about the small details that make a product feel right.",
  "if you're building something meaningful, i'd love to help.",
];

export type SocialLink = {
  label: string;
  href: string;
  icon: "mail" | "github" | "linkedin" | "twitter";
};

export const socials: SocialLink[] = [
  { label: "email", href: `mailto:${siteConfig.email}`, icon: "mail" },
  { label: "github", href: siteConfig.github, icon: "github" },
  { label: "twitter", href: siteConfig.twitter, icon: "twitter" },
  { label: "linkedin", href: siteConfig.linkedin, icon: "linkedin" },
];

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
  image: StaticImageData | null;
};

export const projects: Project[] = [
  {
    title: "HausPet",
    description:
      "full-stack + genAI veterinary care platform connecting pet owners, clinics, and vets through web and mobile",
    tech: ["TypeScript", "Next.js", "React Native", "Node.js", "PostgreSQL", "AI"],
    link: "https://helpmehauspet.net",
    github: null,
    image: null,
  },
  {
    title: "Crowdmint",
    description:
      "data labelling platform with Solana-based reward distribution for workers",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Solana", "AWS"],
    link: "https://crowdmint.samardev.xyz",
    github: null,
    image: crowdmintImg,
  },
  {
    title: "Aryventory",
    description:
      "GST billing and inventory management for mobile-store businesses — stock tracking, billing flows, and owner dashboards",
    tech: ["TypeScript", "React Native", "Node.js", "PostgreSQL"],
    link: null,
    github: null,
    image: aryventoryImg,
  },
  {
    title: "Token Vesting",
    description:
      "onchain token vesting with cliff and linear release schedules, upgradeable via beacon proxy",
    tech: ["Solidity", "Foundry", "Beacon Proxy"],
    link: null,
    github: null,
    image: vestingImg,
  },
  {
    title: "CLOB Matching Engine",
    description:
      "central limit order book in Rust with price-time priority matching and stateful execution engine",
    tech: ["Rust", "Axum"],
    link: null,
    github: "https://github.com/samar-58/clob",
    image: null,
  },
  {
    title: "CLMM",
    description:
      "Uniswap V3 style concentrated liquidity market maker for Solana using Anchor",
    tech: ["Rust", "Anchor", "Solana"],
    link: null,
    github: "https://github.com/samar-58/clmm",
    image: null,
  },
  {
    title: "SolGuard",
    description:
      "onchain RBAC protocol — composable role-based access control for Solana programs",
    tech: ["TypeScript", "Solana", "Anchor"],
    link: "https://solguard.samardev.xyz",
    github: "https://github.com/samar-58/solguard",
    image: null,
  },
  {
    title: "MCP Intent Firewall",
    description:
      "runtime policy enforcement and validation for MCP tool-using AI agents",
    tech: ["TypeScript", "MCP"],
    link: null,
    github: "https://github.com/samar-58/mcp-intent-firewall",
    image: null,
  },
];
