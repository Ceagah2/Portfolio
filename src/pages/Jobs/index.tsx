/* eslint-disable react-hooks/exhaustive-deps */
import { Container, MainContainer } from "../Home/styles"
import { Header } from '../../components/organisms/Header'
import { JobExperience } from "../../components/organisms/JobExperience"
import * as S from './styles'
import { useAtom } from "jotai"
import { languageAtom } from "../../store"
const Jobs = () => {
  const [language] = useAtom(languageAtom);
  return(
    <Container>
      <Header />
        <MainContainer>
          <S.JobHeader>
            <S.HeaderTitle>
            {language === "en-us" ? " This are all my job experiences" : "Aqui estão todas minhas experiências profissionais"}
            </S.HeaderTitle>
            <S.HeaderSubtitle>
            {language === "en-us" ? "Detailed with all my learned development skills." : "Detalhado com todas minhas habilidades de desenvolvimento."}
            </S.HeaderSubtitle>
            <S.HeaderText>
            {language === "en-us" ? `Below, you'll find all the companies I've worked for, the applications I've developed, and the technologies I've used and learned to use. In some instances, you may notice that I've mentioned developing projects for third-party companies. In these cases, I haven't disclosed the application names as many of them have proprietary systems, requiring specific access or are distributed to other businesses.` 
              : "Abaixo, você encontrará todas as empresas para as quais trabalhei, os aplicativos que desenvolvi e as tecnologias que utilizei e aprendi a utilizar. Em algumas situações, você pode notar que mencionei o desenvolvimento de projetos para empresas terceirizadas. Nessas ocasiões, não divulguei os nomes dos aplicativos, já que muitos deles possuem sistemas proprietários, exigindo acesso específico ou são distribuídos para outras empresas."}
            </S.HeaderText>
          </S.JobHeader>
          <S.JobContainer>
              <JobExperience />
          </S.JobContainer>
        </MainContainer>
    </Container>
  )
}


export default Jobs