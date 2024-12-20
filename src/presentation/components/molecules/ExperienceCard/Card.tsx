import React from "react";
import { ExperienceCardProps } from "./Card.interface";
import * as S from "./Card.styles";

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  skills,
  dateRange,
}) => {
  const currentLanguage = localStorage.getItem("language") || "en";
  return (
    <S.CardContainer>
      <S.Title>{title}</S.Title>
      <S.SkillsContainer>
        {skills.map((skill, index) => {
          const stars = Array.from({ length: 5 }, (_, i) => i < skill.score);

          return (
            <S.SkillRow key={index}>
              <S.SkillName>{skill.name}</S.SkillName>
              <S.SkillStars>
                {stars.map((isFilled, idx) => (
                  <S.SkillStar
                    key={idx}
                    isPlatinum={skill.score === 5}
                    isGold={isFilled && skill.score !== 5}
                  >
                    ★
                  </S.SkillStar>
                ))}
              </S.SkillStars>
            </S.SkillRow>
          );
        })}
      </S.SkillsContainer>
      {
        currentLanguage === "en" ? (
          <S.DateRange>Date range: {dateRange}</S.DateRange>
        ) : (
          <S.DateRange>Período: {dateRange}</S.DateRange>
        )
      }
    </S.CardContainer>
  );
};
