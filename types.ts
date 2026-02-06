export interface Project {
  title: string;
  problem: string;
  approach: string;
  result: string;
  tech: string[];
  link?: string;
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}