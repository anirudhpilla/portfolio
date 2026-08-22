export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: 'Backend & Microservices' | 'Full-Stack' | 'Distributed Systems' | 'AI & Computer Vision';
  techStack: string[];
  metrics: { label: string; value: string }[];
  architectureHighlights: string[];
  features: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  systemDiagramSnippet?: string;
}

export interface ExperienceSubProduct {
  name: string;
  period: string;
  description: string;
  points: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Remote';
  summary: string;
  achievements: string[];
  technologies: string[];
  subProducts?: ExperienceSubProduct[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  grade: string;
  period: string;
  location: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // 1-100
    experience: string;
    useCase: string;
    isPrimary: boolean;
  }[];
}

export interface PersonalInfo {
  name: string;
  profession: string;
  experienceYears: string;
  email: string;
  phone: string;
  githubUrl: string;
  linkedinUrl: string;
  hackerrankUrl?: string;
  bio: string;
  location: string;
  status: string;
  coreSkills: string[];
  education: EducationItem;
}

export interface ArchitectureSimulationResult {
  endpoint: string;
  method: string;
  redisEnabled: boolean;
  steps: {
    component: 'Client' | 'API Gateway (NestJS)' | 'Redis / Lua Locks' | 'RabbitMQ Worker' | 'Dual DB (SQL + Mongo)';
    status: 'hit' | 'miss' | 'processed' | 'queried';
    durationMs: number;
    description: string;
  }[];
  totalLatencyMs: number;
  dbLoadSavedPercentage: number;
}

