import { IJobExperiences } from "../@types/types";

export const messages = [
  'What happens when you enter the Konami Code?',
  'Have you unlocked the secret with the Konami Code?',
  'Try entering the Konami Code and see the magic happen!',
  'Konami Code: Up, Up, Down, Down, Left, Right, Left, Right, B, A, Start!',
  'You might want to try a classic gaming move to unlock something special...',
  'Think retro! What gaming code could reveal a hidden surprise?'
];

export const BioText = `
  My name is Carlos Henrique, and I am originally from Taubaté, a small city in the interior of the State of São Paulo. 
  In my free time, I'm a gamer and amateur speedrunner of Resident Evil 3.
  I've been working as a front-end developer since 2020. I decided to leave college, where I was studying Systems Analysis and Development, 
  in the last period of 2020. This decision was influenced by my entry into the workforce, and I chose to focus on my professional career.
  Before becoming a developer, I worked in commerce and also served as a public servant.
  I came close to becoming a professional chef because I have a great passion for that field. 
  I was on the verge of leaving everything at the time and enrolling in a gastronomy college. 
  It took very little for me not to be here now, sharing my portfolio with you.
`
export const JobExperiences: IJobExperiences[] = [
  {
    id: 1,
    title: 'Front-end Developer @ Oceaning Marketing and Training',
    description: `
      Develop the online menu application called KiosksFoods. This app was made with React Native, Expo and Node.js.
      Develop the personal coaching web application called 'Metodo You'. This app was made with React and Node.js.
    `,
    skills: [
      { name: 'Javascript', score: 3 },
      { name: 'CSS', score: 5 },
      { name: 'HTML', score: 5 },
      { name: 'React', score: 2 },
      { name: 'React Native', score: 2 },
    ],
    dateRange: '09/2020 to 03/2021'
  },
  {
    id: 2,
    title: 'Mobile Developer @ WT2 Blockchain and software',
    description: `Develop the mobile application called 'Smart Houses'. This app was made with React Native, Expo and PHP.`,
    skills: [
      { name: 'Javascript', score: 3 },
      { name: 'CSS', score: 5 },
      { name: 'HTML', score: 5 },
      { name: 'React Native', score: 3 },
    ],
    dateRange: '03/2021 to 04/2021'
  },
  {
    id: 3,
    title: 'Mobile Developer @ LKS Health and Wellness technologies',
    description: `Develop new features to the mobile application called 'Posto7'. This app was made with React Native and Google Firebase`,
    skills: [
      { name: 'Javascript', score: 3 },
      { name: 'CSS', score: 5 },
      { name: 'HTML', score: 5 },
      { name: 'React Native', score: 3 },
      { name: 'TypeScript', score: 3 },
      {name: 'Firebase', score: 2},
    ],
    dateRange: '04/2021 to 11/2021'
  },
  {
    id: 4,
    title: 'Front-end Developer @ Tecla T software solutions',
    description: `Develop new features to third party companies. This are mostly web applications, developed with React + Typescript`,
    skills: [
      { name: 'Javascript', score: 3 },
      { name: 'CSS', score: 5 },
      { name: 'HTML', score: 5 },
      { name: 'React', score: 3 },
      { name: 'TypeScript', score: 3 },
    ],
    dateRange: '12/2021 to 04/2022'
  },
  {
    id: 5,
    title: 'Software Engineer @ Evolved Technologies',
    description: `Develop new features to the mobile and web application 'Showingly'. This application was developed with React, React native, Typescript and MongoDb with MongoRealm.`,
    skills: [
      { name: 'Javascript', score: 4 },
      { name: 'CSS', score: 5 },
      { name: 'HTML', score: 5 },
      { name: 'React', score: 4 },
      { name: 'React Native', score: 4 },
      { name: 'TypeScript', score: 3 },
      { name: 'MongoDB', score: 2 },
    ],
    dateRange: '04/2022 to 11/2022'
  },
  {
    id: 6,
    title: 'Front end developer @ Hero 99',
    description: `Develop new applications to third party companies. These applications are 50/50 web and mobile. The web applications can be developed with React, Next.js or Vue.js. The mobile app can be developed in React native with or without Expo Framework, added with Typescript.`,
    skills: [
      { name: 'Javascript', score: 4 },
      { name: 'CSS', score: 5 },
      { name: 'HTML', score: 5 },
      { name: 'React', score: 4 },
      { name: 'React Native', score: 4 },
      { name: 'Next Js', score: 4 },
      { name: 'TypeScript', score: 3 },
      { name: 'MongoDB', score: 2 },
      { name: 'Wordpress', score: 2 },
    ],
    dateRange: '12/2022 to Present days'
  },
];

export const PersonalProjects = [
  {
    id: 1,
    title: 'Portfolio',
    description: 'Personal website made with React and Typescript.',
    image: null,
    url: null
  },
  {
    id: 2,
    title: 'Wise Tasks (under development)',
    description: 'A simple task manager, developed to other freelancers to help then to manage their projects easily and quick.',
    image: null,
    url: null
  }
]