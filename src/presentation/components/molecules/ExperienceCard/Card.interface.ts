export interface Skill {
  name: string;
  score: number; 
}
export interface ExperienceCardProps {
  title: string;
  skills: Skill[];
  dateRange: string; 
}
