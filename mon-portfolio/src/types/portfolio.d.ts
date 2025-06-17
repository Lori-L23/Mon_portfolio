export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  github: string;
  demo: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}