
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IJobExperiences } from "validation/@types/types";
import Experiences from '../../../infra/translate/experience.json';
import SideProjects from '../../../infra/translate/projects.json';
import { Container, Content, Section, Sidebar } from "../../components/atoms";
import {
  Certificates,
  ExperienceCard,
  Header,
  ProjectCard,
} from "../../components/molecules";


export default function Home() {
  const currentLanguage = localStorage.getItem("language") || "en";
  const [columns, setColumns] = useState<number>(3)
  const [latestExperiencesEng, setLatestExperiencesEng] = useState<
    IJobExperiences[]
  >([]);
  const [latestExperiencesPt, setLatestExperiencesPt] = useState<
    IJobExperiences[]
  >([]);
  const { t } = useTranslation();

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth <= 1100) {
        setColumns(2); 
      } else {
        setColumns(3); 
      }
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => {
      window.removeEventListener("resize", updateColumns);
    };
  }, []);

  useEffect(() => {
    const getLatestExperiences = () => {
      const sortedExperiencesEng = Experiences.JobExperiencesEng.sort(
        (a, b) => {
          const dateA = new Date(a.dateRange.split(" to ")[0]);
          const dateB = new Date(b.dateRange.split(" to ")[0]);
          return dateA.getTime() + dateB.getTime();
        }
      ).slice(-columns); 

      const sortedExperiencesPt = Experiences.JobExperiencesPt.sort((a, b) => {
        const dateA = new Date(a.dateRange.split(" to ")[0]);
        const dateB = new Date(b.dateRange.split(" to ")[0]);
        return dateB.getTime() - dateA.getTime();
      }).slice(-columns);

      setLatestExperiencesEng(sortedExperiencesEng);
      setLatestExperiencesPt(sortedExperiencesPt);
    };

    getLatestExperiences();
  }, [columns]); 

  return (
    <Container>
      <Header />
      <Content>
        <Section title={t("terms.job")} redirectLink="/jobs" height="40vh">
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
        <Section title={t("terms.projects")} height="35vh" redirectLink="/experiences">
          {currentLanguage === "en"
            ? SideProjects.ProjectsEng.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  techsUsed={project.techsUsed}
                  link={project.link ?? ""}
                />
              ))
            : SideProjects.ProjectsPt.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  techsUsed={project.techsUsed}
                  link={project.link ?? ""}
                />
              ))}
        </Section>
        <Section title={t("terms.certificates")} height="15vh">
          <Certificates />
        </Section>
        <Sidebar />
      </Content>
    </Container>
  );
}