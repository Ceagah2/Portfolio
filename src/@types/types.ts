export interface ISectionContainer { 
  children: React.ReactNode
  title: string
  delay: number
  orientation?: 'start' | 'end';
}
export interface ISkills {
  js: number
  css: number
  html: number
  react?: number
  native?: number
  mongo?: number
}
export interface IJobExperiences {
  id: number
  title: string
  skills: ISkills[]
  dateRange: string
}