import React, { useEffect, useState } from "react";
import { fetchAllGitHubData } from "../../../../data/github/githubService";
import { BadgeData } from "../../../assets/badges/badges";
import { default as Galaxy, default as Heart } from '../../../assets/badges/HeartOnYourSleeve-gold.png';
import Pull from '../../../assets/badges/PullShark-gold.png';
import Star from '../../../assets/badges/StarStruck.png';
import Yolo from '../../../assets/badges/YOLO.png';
import { Loader } from '../../atoms';
import * as S from "./Badge.styles";


export const GithubBadge: React.FC = () => {
  const [badgesData, setBadgesData] = useState<BadgeData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false)

 useEffect(() => {
   const loadBadges = async () => {
    setIsLoading(true)
     const githubData = await fetchAllGitHubData();

     const badges: BadgeData[] = [
       {
         id: "yolo",
         name: "YOLO",
         description:
           "Você só vive uma vez! Por contribuições ousadas e criativas.",
         icon: Yolo,
       },
       {
         id: "star-struck",
         name: "Star Struck",
         description: "Concedido por receber estrelas nos seus repositórios.",
         icon: Star,
       },
       {
         id: "pull-shark",
         name: "Pull Shark",
         description: "Reconhecimento por um alto número de Pull Requests.",
         icon: Pull,
       },
       {
         id: "heart-on-sleeve",
         name: "Heart on Sleeve",
         description: "Por compartilhar emoções genuínas em contribuições.",
         icon: Heart,
       },
       {
         id: "galaxy-brain",
         name: "Galaxy Brain",
         description: "Concedido por ideias brilhantes e inovação.",
         icon: Galaxy,
       },
     ];

     const activeBadges = badges.filter((badge) => {
       switch (badge.id) {
         case "yolo":
           return githubData.isYolo;
         case "star-struck":
           return githubData.hasStarStruck;
         case "pull-shark":
           return githubData.isPullShark;
         case "heart-on-sleeve":
           return githubData.hasHeartOnSleeves;
         case "galaxy-brain":
           return githubData.isGalaxyBrain;
         default:
           return false;
       }
     });

     setBadgesData(activeBadges);
     setIsLoading(false)
   };

   loadBadges();
 }, []);

 if(isLoading){
  return (
    <S.BadgeWrapper>
      <Loader />
    </S.BadgeWrapper>
  );
 }

  return (
    <S.BadgeWrapper>
      <S.BadgeContainer>
        {badgesData.map((badge) => (
          <S.Badge key={badge.id}>
            <S.BadgeIcon src={badge.icon} alt={badge.name} />
            <S.BadgeTooltip>
              <span>{badge.name}</span>
              <p>{badge.description}</p>
            </S.BadgeTooltip>
          </S.Badge>
        ))}
      </S.BadgeContainer>
    </S.BadgeWrapper>
  );
};
