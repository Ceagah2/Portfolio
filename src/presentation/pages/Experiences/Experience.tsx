import { useTranslation } from "react-i18next";
import SideProjects from "../../../infra/translate/projects.json";
import { Container, Content, Sidebar } from "../../components/atoms";
import { Header, ProjectCard } from "../../components/molecules";

import * as S from './Experience.styles';


export default function Experience() {
  const { t }= useTranslation()
  const currentLanguage = localStorage.getItem("language") || "en";
  return (
    <Container>
      <Header />
      <Content>
        <S.JobSection>
          <S.JobTitle>{t("terms.projects")}</S.JobTitle>
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
        </S.JobSection>
        <Sidebar />
      </Content>
    </Container>
  );
}