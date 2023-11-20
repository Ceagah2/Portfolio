export interface ISectionContainer { 
  children: React.ReactNode
  title: string
  delay: number
  orientation?: 'start' | 'end';
}
export interface ISkills {
  name: string
  score: number
}
export interface IJobExperiences {
  id: number
  title: string
  description: string
  skills: ISkills[]
  dateRange: string
}