
import { useTranslation } from "react-i18next";
import { Container, Content, Section, Sidebar } from "../../components/atoms";
import { Header } from "../../components/molecules";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Container>
      <Header />
      <Content>
        <Section title={t("terms.job")} redirectLink="/">
          {" "}
        </Section>
        <Section title={t("terms.projects")} redirectLink="/">
          {" "}
        </Section>
        <Section title={t("terms.certificates")} height="15vh">
          {" "}
        </Section>
        <Sidebar />
      </Content>
    </Container>
  );
}