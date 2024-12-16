
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IJobExperiences } from "validation/@types/types";
import Experiences from '../../../infra/translate/experience.json';
import { Container, Content, Section, Sidebar } from "../../components/atoms";
import { ExperienceCard, Header } from "../../components/molecules";

export default function Home() {
   const currentLanguage = localStorage.getItem("language") || "en";
  const [latestExperiencesEng, setLatestExperiencesEng] =
    useState<IJobExperiences[]>([]);
  const [latestExperiencesPt, setLatestExperiencesPt] =
    useState<IJobExperiences[]>([]);
  const { t } = useTranslation();


  useEffect(() => {
    const getLatestExperiences = () => {
      const sortedExperiencesEng = Experiences.JobExperiencesEng.sort(
        (a, b) => {
          const dateA = new Date(a.dateRange.split(" to ")[0]);
          const dateB = new Date(b.dateRange.split(" to ")[0]);
          return dateB.getTime() - dateA.getTime();
        }
      ).slice(4, 7); 

      const sortedExperiencesPt = Experiences.JobExperiencesPt.sort((a, b) => {
        const dateA = new Date(a.dateRange.split(" to ")[0]);
        const dateB = new Date(b.dateRange.split(" to ")[0]);
        return dateB.getTime() - dateA.getTime();
      }).slice(4, 7); 

      setLatestExperiencesEng(sortedExperiencesEng);
      setLatestExperiencesPt(sortedExperiencesPt);

    };
    getLatestExperiences();
  }, []);



  return (
    <Container>
      <Header />
      <Content>
        <Section title={t("terms.job")} redirectLink="/" height="40vh">
          {currentLanguage === "en"
            ? latestExperiencesEng.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  title={exp.title}
                  skills={exp.skills}
                  dateRange={exp.dateRange}
                />
              ))
            : latestExperiencesPt.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  title={exp.title}
                  skills={exp.skills}
                  dateRange={exp.dateRange}
                />
              ))}
        </Section>
        <Section title={t("terms.projects")}> </Section>
        <Section title={t("terms.certificates")} height="15vh">
          {" "}
        </Section>
        <Sidebar />
      </Content>
    </Container>
  );
}