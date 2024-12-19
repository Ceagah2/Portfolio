import { useTranslation } from "react-i18next";
import jobExperience from '../../../infra/translate/experience.json';
import { Container, Content, Sidebar } from "../../components/atoms";
import { ExperienceCard, Header } from "../../components/molecules";
import * as S from './Jobs.styles';


export default function Jobs() {
  const { t }= useTranslation()
  const currentLanguage = localStorage.getItem("language") || "en";
  return (
    <Container>
      <Header />
      <Content>
        <S.JobSection>
          <S.JobTitle>{t("terms.jobsDescriptions")}</S.JobTitle>
          <S.ExperienceContainer>
            {currentLanguage === "en"
              ? jobExperience.JobExperiencesEng.map((experience, index) => (
                  <ExperienceCard
                    key={index}
                    title={experience.title}
                    skills={experience.skills}
                    dateRange={experience.dateRange}
                  />
                ))
              : jobExperience.JobExperiencesPt.map((experience, index) => (
                  <ExperienceCard
                    key={index}
                    title={experience.title}
                    skills={experience.skills}
                    dateRange={experience.dateRange}
                  />
                ))}
          </S.ExperienceContainer>
        </S.JobSection>
        <Sidebar />
      </Content>
    </Container>
  );
}