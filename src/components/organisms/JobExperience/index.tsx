import * as S from './styles'
import { JobExperiences } from '../../../utils/constants'
export const JobExperience = () => {

  return (
    <S.Container>
      {JobExperiences.map((experience) => (
        <S.JobContainer key={experience.id}>
          <S.JobTitle>{experience.title}</S.JobTitle>
          <S.JobDescription>{experience.description}</S.JobDescription>
          <S.DateContainer>
            <S.DateText>Worked since: </S.DateText>
            <S.DateTime>{experience.dateRange}</S.DateTime>
          </S.DateContainer>
          <S.SkillContainer>
            {experience.skills.map((skill, index) => (
              <div key={index}>
                <S.SkillName>{Object.values(skill)[0]}</S.SkillName>
                <S.ProgressBar>
                  {[...Array(5)].map((_, scoreIndex) => (
                    <S.SkillSquare score={scoreIndex < skill.score ? scoreIndex + 1 : 0} />
                  ))}
                </S.ProgressBar>
              </div>
            ))}
          </S.SkillContainer>
        </S.JobContainer>
      ))}
    </S.Container>
  );
};
