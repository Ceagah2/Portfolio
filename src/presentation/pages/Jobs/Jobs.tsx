import { useTranslation } from "react-i18next";
import { Container, Content, Section, Sidebar } from "../../components/atoms";
import { Header } from "../../components/molecules";
import * as S from './Jobs.styles';


export default function Jobs() {
  const { t }= useTranslation()
  return (
    <Container>
      <Header />
      <Content>
        <Section title={t("terms.job")} height="100%">
          <S.JobSection>
            <S.JobTitle>{t("terms.jobsDescriptions")}</S.JobTitle>
          </S.JobSection>
        </Section>
        <Sidebar />
      </Content>
    </Container>
  );
}