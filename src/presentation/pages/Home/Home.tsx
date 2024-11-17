import { useTranslation } from "react-i18next";
import { Container, Content, Section } from "../../components/atoms";
import { Header } from "../../components/molecules";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Container>
        <Header/>
      <Content>
       <Section title={(t('terms.job'))} redirectLink="/"> </Section>
      </Content>
    </Container>
  );
}