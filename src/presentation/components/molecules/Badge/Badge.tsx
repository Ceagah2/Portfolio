import React, { useEffect, useState } from "react";
import engFacts from "../../../../data/github/funfacts.eng.json";
import ptFacts from "../../../../data/github/funfacts.pt.json";
import { BadgesProps, FunFact } from "./Badge.interface";
import * as S from "./Badge.styles";

export const Badges: React.FC<BadgesProps> = ({ language }) => {
  const [images, setImages] = useState<Record<string, string>>({});
  const badgesData: FunFact[] =
    language === "en" ? engFacts.funFacts : ptFacts.funFacts;

  useEffect(() => {
    const loadImages = async () => {
      const importedImages: Record<string, string> = {};
      for (const fact of badgesData) {
        importedImages[fact.icon] = (
          await import(`../../../assets/funFactIcons/${fact.icon}.png`)
        ).default;
      }
      setImages(importedImages);
    };

    loadImages();
  }, [badgesData, language]); 

  return (
    <S.BadgeWrapper>
      <S.BadgeContainer>
        {badgesData.map((badge) => (
          <div key={badge.id} className="badge">
            <S.BadgeIcon
              src={images[badge.icon]} 
              alt={badge.name}
            />
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
