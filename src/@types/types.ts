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

export interface IProjectCard{
  id: number
  title: string
  description: string
  html_url: string
}

export interface IKonami {
  setSecretCode: (code: boolean) => void
  startAnimation: () => void
}