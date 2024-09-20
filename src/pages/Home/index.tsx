/* eslint-disable react-hooks/exhaustive-deps */
import { useAtom } from "jotai";
import { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { SectionContainer } from "../../components/atoms/SectionContainer";
import { Header } from "../../components/organisms/Header";
import * as J from "../../components/organisms/JobExperience/styles";
import { MyProjects } from "../../components/organisms/MyProjects";
import { languageAtom } from "../../store";
import { BioTextEng, BioTextPt, JobExperiencesEng, JobExperiencesPT, messages } from '../../utils/constants';
import * as S from "./styles";

const Home = () => {
  const [language] = useAtom(languageAtom);
  function showRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];

    console.log('🎮 Gaming Easter Egg: ', randomMessage);
  }
  const lastExperience = language === "en-us" ? JobExperiencesEng[JobExperiencesEng.length - 1] : JobExperiencesPT[JobExperiencesPT.length - 1];

  
  useEffect(() => {
    showRandomMessage();
  },[])


  return(
    <S.Container>
      <Header />
      <S.MainContainer>
        <SectionContainer title="Bio" delay={0.5} orientation="start">
          <S.SectionText>
            {language === "en-us" ? BioTextEng : BioTextPt}
          </S.SectionText>
        </SectionContainer>
        <SectionContainer title={language === "en-us" ? "Job Experience" : "Experiencias"} delay={1} orientation="end">
          <S.JobContainer>
            <J.JobTitle>{lastExperience.title}</J.JobTitle>
            <S.JobDescription>{lastExperience.description}</S.JobDescription>
            <S.DateContainer>
              <S.DateText>
                {language === "en-us" ? "Worked from: " : "Trabalhei de: "}  
              </S.DateText>
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
                <div style={{ display: "flex", alignItems: "center",  }}>
                <S.JobDescription>
                  {language === "en-us" ? "See all my experiences" : "Veja todas as experiências"}
                </S.JobDescription>
                <J.JobLink to={"/jobs"}>&nbsp; 
                 {language === "en-us" ? "here!" : "aqui!"}
                 <FaChevronRight size={12}/>
                </J.JobLink>
                </div>
              </J.LinkContainer>
            </S.SkillContainer>
          </S.JobContainer>
        </SectionContainer>
        <SectionContainer title={language === "en-us" ? "My Projects" : "Meus Projetos"} delay={1.5} orientation="start">
          <MyProjects />
        </SectionContainer>
      </S.MainContainer>
    </S.Container>
  )
}

export default Home