/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { FaChevronRight } from "react-icons/fa";
import { Header } from "../../components/organisms/Header"
import { MyProjects } from "../../components/organisms/MyProjects"
import {messages, BioText, JobExperiences} from '../../utils/constants'
import { SectionContainer } from "../../components/atoms/SectionContainer"
import * as S from "./styles"
import * as J from "../../components/organisms/JobExperience/styles"

const Home = () => {
  function showRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];

    console.log('🎮 Gaming Easter Egg: ', randomMessage);
  }
  const lastExperience = JobExperiences[JobExperiences.length - 1];

  
  useEffect(() => {
    showRandomMessage();
  },[])


  return(
    <S.Container>
      <Header />
      
      <S.MainContainer>
        <SectionContainer title="Bio" delay={0.5} orientation="start">
          <S.SectionText>
            {BioText}
          </S.SectionText>
        </SectionContainer>
        <SectionContainer title="Job Experience" delay={1} orientation="end">
          <S.JobContainer>
            <J.JobTitle>{lastExperience.title}</J.JobTitle>
            <S.JobDescription>{lastExperience.description}</S.JobDescription>
            <S.DateContainer>
              <S.DateText>Worked since: </S.DateText>
              <S.DateTime>{lastExperience.dateRange}</S.DateTime>
            </S.DateContainer>
            <S.SkillContainer>
              {lastExperience.skills.map((skill, index) => (
                <div key={index}>
                  <S.SkillName>{Object.values(skill)[0]}</S.SkillName>
                  <J.ProgressBar>
                    {[...Array(5)].map((_, scoreIndex) => (
                      <J.SkillSquare
                        key={scoreIndex}
                        score={scoreIndex < skill.score ? scoreIndex + 1 : 0}
                      />
                    ))}
                  </J.ProgressBar>
                </div>
              ))}
              <J.LinkContainer>
                <S.JobDescription>See all my experiences</S.JobDescription>
                <J.JobLink to={"/jobs"}>&nbsp; Here ! <FaChevronRight size={12}/></J.JobLink>
              </J.LinkContainer>
            </S.SkillContainer>
          </S.JobContainer>
        </SectionContainer>
        <SectionContainer title="My Projects" delay={1.5} orientation="start">
          <MyProjects />
        </SectionContainer>
      </S.MainContainer>
    </S.Container>
  )
}

export default Home