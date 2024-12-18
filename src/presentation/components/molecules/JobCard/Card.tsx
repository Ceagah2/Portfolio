import { JobExperience } from './Card.interface';
import * as S from './Card.styles';

const DetailedCard = ({ title, dateRange, description, skills }: JobExperience) => {
  return (
    <S.CardContainer>
      <S.Title>{title}</S.Title>
      <S.DateRange>{dateRange}</S.DateRange>
      <S.Description>
        {description.split("\n").map((line) => (
          <>
            {line}
            <br />
          </>
        ))}
      </S.Description>
      <S.SkillsContainer>
        {skills.map((skill, index) => (
          <S.Skill key={index} score={skill.score}>
            {skill.name}
          </S.Skill>
        ))}
      </S.SkillsContainer>
    </S.CardContainer>
  );
};

export default DetailedCard;
