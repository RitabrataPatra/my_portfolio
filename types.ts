
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export interface Skill {
  name: string;
  value: number;
  category: 'frontend' | 'backend' | 'devops' | 'ai';
}

export interface Message {
  role: 'user' | 'assistant';
  text: string;
}
