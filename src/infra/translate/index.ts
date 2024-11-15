import bio from "./bio.json";
import jobExperiences from "./experience.json";
import header from "./header.json";
import messages from "./messages.json";

export const data = {
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
    eng: jobExperiences.JobExperiencesEng,
    pt: jobExperiences.JobExperiencesPt,
  },
};
