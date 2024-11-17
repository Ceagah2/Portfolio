import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { data } from "./data";

const resources = {
  en: {
    translation: {
      bio: data.bio.eng,
      header: data.header.eng,
      jobExperiences: data.jobExperiences.eng,
      messages: data.messages,
      terms: data.terms.eng,
    },
  },
  pt: {
    translation: {
      bio: data.bio.pt,
      header: data.header.pt,
      jobExperiences: data.jobExperiences.pt,
      terms: data.terms.pt,
    },
  },
};


i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: "en", 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
