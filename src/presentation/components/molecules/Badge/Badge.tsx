import React from "react";
import engFacts from "../../../../data/github/funfacts.eng.json";
import ptFacts from "../../../../data/github/funfacts.pt.json";
import { BadgesProps, FunFact } from "./Badge.interface";
import * as S from "./Badge.styles";



export const Badges: React.FC<BadgesProps> = ({ language }) => {
  const badgesData: FunFact[] =
    language === "en" ? engFacts.funFacts : ptFacts.funFacts;

  return (
    <S.BadgeWrapper>
      <S.BadgeContainer>
        {badgesData.map((badge) => (
          <div key={badge.id} className="badge">
            <S.BadgeIcon src={badge.icon} alt={badge.name} />
            <S.BadgeTooltip>
              <span>{badge.name}</span>
              <p>{badge.description}</p>
            </S.BadgeTooltip>
          </div>
        ))}
      </S.BadgeContainer>
    </S.BadgeWrapper>
  );
};
