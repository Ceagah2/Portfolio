import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { secretCodeAtom } from "../../../../data/store/Atoms";
import messages from '../../../../infra/translate/messages.json';
import { AVATAR_URL, techStack } from "../../../../infra/utils/constants";
import { KonamiCode } from '../../../../infra/utils/konami';
import frameGif from '../../../assets/frame-gif.png';
import AudioSource from '../../../assets/item.wav';
import { AnimatedImage, AudioComponent } from '../../atoms';
import * as S from './Header.styles';


export const Header = () => {
  const [yearsOfExperience, setYearsOfExperience] = useState<number>(0)
  const [isAnimationActive, setIsAnimationActive] = useState<boolean>(false);
  const [secretCode, setSecretCode] = useAtom(secretCodeAtom);
  const { t } = useTranslation();

  const animationTime = () => {
    setIsAnimationActive(true);
    setTimeout(() => {
      setIsAnimationActive(false);
    }, 1000);
  };

  useEffect(() => {
    const startAnimation = () => {
      animationTime();
    };

    KonamiCode({ setSecretCode, startAnimation });
  }, [setSecretCode]);

  useEffect(() => {
    const getYearsOfExperience = () => {
      const startDate = new Date(2020, 7, 1); 
      const today = new Date();
      const diffInMilliseconds = today.getTime() - startDate.getTime();
      const yearsDiff = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); 
      setYearsOfExperience(Math.ceil(yearsDiff));
    };

    function showRandomMessage() {
      const randomMessage = (messages as { messages: string[] }).messages[
        Math.floor(
          Math.random() * (messages as { messages: string[] }).messages.length
        )
      ];

      console.log("🎮 Gaming Easter Egg: ", randomMessage);
    }
    showRandomMessage();

    getYearsOfExperience()
  },[])
  return (
    <S.Container>
      {isAnimationActive && (
        <>
          <AudioComponent audioSrc={AudioSource} />
          <AnimatedImage />
        </>
      )}
      <S.ProfileContainer>
        <S.Frame src={frameGif} alt="Frame de Fogo" />
        <S.ProfileImage src={AVATAR_URL} alt="Imagem de Perfil" />
      </S.ProfileContainer>
      <S.DataContainer>
        <S.NickName>Carlos Ceagah</S.NickName>
        <S.FullName>Carlos Henrique de Moura - 🇧🇷 São Paulo </S.FullName>
        <S.Bio>{t("bio")}</S.Bio>
      </S.DataContainer>

      <S.ExperienceContainer>
        <S.TitleLine>
          <S.ExperienceTitle>{t("terms.experience")}</S.ExperienceTitle>
          <S.ExperienceText>{yearsOfExperience}</S.ExperienceText>
        </S.TitleLine>
        {secretCode && (
          <S.TitleLine>
            <S.ExperienceTitle>{t("terms.experience")}</S.ExperienceTitle>
            <S.ExperienceText>{yearsOfExperience}</S.ExperienceText>
          </S.TitleLine>
        )}
        <S.StackContainer>
          <S.StackTitle>Stack</S.StackTitle>
          {techStack.map((tech, index) => (
            <S.StackText key={index}>
              {tech.name} {tech.emoji}
            </S.StackText>
          ))}
        </S.StackContainer>
      </S.ExperienceContainer>
    </S.Container>
  );
}