export interface Skill {
  name: string;
  score: number;
}

export interface JobExperience {
  id: number;
  title: string;
  description: string;
  skills: Skill[];
  dateRange: string;
}
