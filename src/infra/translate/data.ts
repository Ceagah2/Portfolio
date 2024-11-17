import bio from "./bio.json";
import { ITranslationData } from "./data.interface";
import jobExperiences from "./experience.json";
import header from "./header.json";
import messages from "./messages.json";
import terms from './terms.json';

export const data: ITranslationData = {
  messages: messages.messages,
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
  }
};
