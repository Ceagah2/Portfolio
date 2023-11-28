/* eslint-disable react-hooks/exhaustive-deps */
import { Container, MainContainer } from "../Home/styles"
import { Header } from '../../components/organisms/Header'
import { JobExperience } from "../../components/organisms/JobExperience"
import * as S from './styles'
const Jobs = () => {
  return(
    <Container>
      <Header />
        <MainContainer>
          <S.JobHeader>
            <S.HeaderTitle>
              This are all my job experiences
            </S.HeaderTitle>
            <S.HeaderSubtitle>Detailed with all my learned development skills.</S.HeaderSubtitle>
            <S.HeaderText>
              Below, you'll find all the companies I've worked for, the applications I've developed, and the technologies I've used and learned to use. In some instances, you may notice that I've mentioned developing projects for third-party companies. In these cases, I haven't disclosed the application names as many of them have proprietary systems, requiring specific access or are distributed to other businesses.
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