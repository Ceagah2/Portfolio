import bio from "./bio.json";
import certificates from "./certificates.json";
import { ITranslationData } from "./data.interface";
import jobExperiences from "./experience.json";
import header from "./header.json";
import messages from "./messages.json";
import projects from './projects.json';
import terms from './terms.json';

export const data: ITranslationData = {
  messages: messages.messages,
  certificates: certificates.certificates,
  bio: {
    eng: bio.BioTextEng,
    pt: bio.BioTextPt,
  },
  header: {
    eng: header.HeaderTextEng,
    pt: header.HeaderTextPt,
  },
  jobExperiences: {
    eng: jobExperiences.JobExperiencesEng.toString(),
    pt: jobExperiences.JobExperiencesPt.toString(),
  },
  terms: {
    eng: terms.eng,
    pt: terms.pt
  },
  projects: {
    eng: projects.ProjectsEng.toString(),
    pt: projects.ProjectsPt.toString()
  },
};
