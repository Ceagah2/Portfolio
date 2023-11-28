import { IJobExperiences } from "../@types/types";

export const messages = [
  'What happens when you enter the Konami Code?',
  'Have you unlocked the secret with the Konami Code?',
  'Try entering the Konami Code and see the magic happen!',
  'Konami Code: Up, Up, Down, Down, Left, Right, Left, Right, B, A, Start!',
  'You might want to try a classic gaming move to unlock something special...',
  'Think retro! What gaming code could reveal a hidden surprise?'
];

export const BioTextEng = `
  My name is Carlos Henrique, and I am originally from Taubaté, a small city in the interior of the State of São Paulo. 
  In my free time, I'm a gamer and amateur speedrunner of Resident Evil 3.
  I've been working as a front-end developer since 2020. I decided to leave college, where I was studying Systems Analysis and Development, 
  in the last period of 2020. This decision was influenced by my entry into the workforce, and I chose to focus on my professional career.
  Before becoming a developer, I worked in commerce and also served as a public servant.
  I came close to becoming a professional chef because I have a great passion for that field. 
  I was on the verge of leaving everything at the time and enrolling in a gastronomy college. 
  It took very little for me not to be here now, sharing my portfolio with you.
`

export const BioTextPt = `
 Meu nome é Carlos Henrique, e sou natural de Taubaté, uma pequena cidade no interior do estado de São Paulo.
No meu tempo livre, sou um jogador e speedrunner amador do Resident Evil 3.
Trabalho como desenvolvedor front-end desde 2020. Decidi sair da faculdade, onde cursava Análise e Desenvolvimento de Sistemas, no último período de 2020. Essa decisão foi influenciada pela minha entrada no mercado de trabalho, e optei por focar na minha carreira profissional.
Antes de me tornar um desenvolvedor, trabalhei no comércio e também como servidor público.
Cheguei perto de me tornar um chef profissional porque tenho uma grande paixão por essa área.
Estive prestes a largar tudo na época e me matricular em uma faculdade de gastronomia.
Foi muito pouco para eu não estar aqui agora, compartilhando meu portfólio com você.
`

export const HeaderTextEng = `I'm specialized in creating digital experiences with precision and passion, where the blend of innovation and imagination flourishes.`
export const HeaderTextPt = `Sou especializado em criar experiências digitais com precisão e paixão, onde a mistura de inovação e imaginação floresce.`

export const JobExperiencesEng: IJobExperiences[] = [
  {
    id: 1,
    title: 'Front-end Developer @ Oceaning Marketing and Training',
    description: `
      Develop the online menu application called KiosksFoods. This app was made with React Native, Expo and Node.js, integrated with 
      GetNet gateway API. The user scan the QR code in the table, make the order and pay for it, without call the waiter. KiosksFoods
      was developed in the peak of the pandemic.s
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
    description: `Develop the mobile application called 'Smart Houses'. This app was made with React Native, Expo and PHP.
     Smart homes have come to make the client's life easier. When the client hires the construction company to build their home,
     they don't need to go to the site to monitor the progress of the work, as they have all of this in the palm of their hand,
     with weekly updates. `,
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
    description: `Develop new features to the mobile application called 'Posto7'. This app was made with React Native and Google Firebase.
    Posto7 is here to show the world that dieting isn't boring at all. 
    Through proposed challenges, fun menus, and 24/7 chat support, users discover that dieting can be a fun and healthy experience.`,
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
      { name: 'React', score: 4 },
      { name: 'React Native', score: 4 },
      { name: 'Next Js', score: 4 },
      { name: 'TypeScript', score: 4 },
      { name: 'MongoDB', score: 2 },
      { name: 'Wordpress', score: 2 },
    ],
    dateRange: '12/2022 to Present days'
  },
];


export const JobExperiencesPT: IJobExperiences[] = [
  {
    id: 1,
    title: 'Desenvolvedor Front-end @ Oceaning Marketing e Treinamentos',
    description: `
      Desenvolvi o aplicativo de cardápio online chamado KiosksFoods. Este app foi feito com React Native, Expo e Node.js, integrado com a API do gateway GetNet. O usuário escaneia o QR code na mesa, faz o pedido e paga por ele, sem chamar o garçom. O KiosksFoods foi desenvolvido no auge da pandemia.
      Desenvolvi o aplicativo web de coaching pessoal chamado 'Método You'. Este app foi feito com React e Node.js.
    `,
    skills: [
      { name: 'Javascript', score: 3 },
      { name: 'CSS', score: 5 },
      { name: 'HTML', score: 5 },
      { name: 'React', score: 2 },
      { name: 'React Native', score: 2 },
    ],
    dateRange: '09/2020 a 03/2021'
  },
  {
    id: 2,
    title: 'Desenvolvedor Mobile @ WT2 Blockchain and Software',
    description: `Desenvolvi o aplicativo mobile chamado 'Smart Houses'. Este app foi feito com React Native, Expo e PHP.
     As casas inteligentes vieram para facilitar a vida do cliente. Quando o cliente contrata a empreiteira para construir a sua casa,
     ele não precisa ir até o local para acompanhar o andamento da obra, pois ele tem tudo isso na palma da sua mão, com atualizações semanais.`,
    skills: [
      { name: 'Javascript', score: 3 },
      { name: 'CSS', score: 5 },
      { name: 'HTML', score: 5 },
      { name: 'React Native', score: 3 },
    ],
    dateRange: '03/2021 a 04/2021'
  },
  {
    id: 3,
    title: 'Desenvolvedor Mobile @ LKS Health and Wellness Technologies',
    description: `Desenvolvi novas funcionalidades para o aplicativo mobile 'Posto7'. Este app foi feito com React Native e Google Firebase.
    O Posto7 veio para mostrar ao mundo que fazer dieta não é nada chato.
    Através de desafios propostos, cardápios divertidos e suporte de chat 24/7, os usuários descobrem que fazer dieta pode ser uma experiência divertida e saudável.`,
    skills: [
      { name: 'Javascript', score: 3 },
      { name: 'CSS', score: 5 },
      { name: 'HTML', score: 5 },
      { name: 'React Native', score: 3 },
      { name: 'TypeScript', score: 3 },
      { name: 'Firebase', score: 2 },
    ],
    dateRange: '04/2021 a 11/2021'
  },
  {
    id: 4,
    title: 'Desenvolvedor Front-end @ Tecla T Software Solutions',
    description: `Desenvolvi novas funcionalidades para empresas terceiras. Estas são principalmente aplicações web, desenvolvidas com React + Typescript.`,
    skills: [
      { name: 'Javascript', score: 3 },
      { name: 'CSS', score: 5 },
      { name: 'HTML', score: 5 },
      { name: 'React', score: 3 },
      { name: 'TypeScript', score: 3 },
    ],
    dateRange: '12/2021 a 04/2022'
  },
  {
    id: 5,
    title: 'Engenheiro de Software @ Evolved Technologies',
    description: `Desenvolvi novas funcionalidades para o aplicativo mobile e web 'Showingly'. Este aplicativo foi desenvolvido com React, React Native, Typescript e MongoDB com MongoRealm.`,
    skills: [
      { name: 'Javascript', score: 4 },
      { name: 'CSS', score: 5 },
      { name: 'HTML', score: 5 },
      { name: 'React', score: 4 },
      { name: 'React Native', score: 4 },
      { name: 'TypeScript', score: 3 },
      { name: 'MongoDB', score: 2 },
    ],
    dateRange: '04/2022 a 11/2022'
  },
  {
    id: 6,
    title: 'Desenvolvedor Front-end @ Hero 99',
    description: `Desenvolvo novas aplicações para empresas terceirizadas. Essas aplicações são 50% para web e 50% para dispositivos móveis. As aplicações web podem ser desenvolvidas com React, Next.js ou Vue.js. O aplicativo móvel pode ser desenvolvido em React Native, com ou sem o Framework Expo, e com o uso de Typescript.`,
    skills: [
      { name: 'Javascript', score: 4 },
      { name: 'React', score: 4 },
      { name: 'React Native', score: 4 },
      { name: 'Next Js', score: 4 },
      { name: 'TypeScript', score: 4 },
      { name: 'MongoDB', score: 2 },
      { name: 'Wordpress', score: 2 },
    ],
    dateRange: '12/2022 até o momento'
  },
]


export const USER_NAME = 'Ceagah2'
export const AVATAR_URL = 'https://avatars.githubusercontent.com/u/133968337?s=400&u=ce1be67a31e9bc490c9d532419554ab9508d8537&v=4'
