/* eslint-disable @typescript-eslint/no-explicit-any */
import {useAtom} from 'jotai'
import * as S from './styles'
import {useState, useEffect} from 'react'
import { NavBar } from '../../atoms/NavBar'
import { Avatar } from '../../atoms/Avatar'
import { languageAtom } from '../../../store'
import { secretCodeAtom } from '../../../store'
import { KonamiCode } from '../../../utils/konami'
import AudioSource  from '../../../assets/item.wav'
import { AudioComponent } from '../../../components/atoms/AudioPlay'
import { AnimatedImage } from '../../../components/atoms/AnimationImage'
import { HeaderTextPt, HeaderTextEng } from '../../../utils/constants'

export const Header = () => {
  const [language] = useAtom(languageAtom);
  const [secretCode, setSecretCode] = useAtom(secretCodeAtom);
  const [isAnimationActive, setIsAnimationActive] = useState<boolean>(false)

  const animationTime = () => {
    setIsAnimationActive(true)
    setTimeout(() => {
      setIsAnimationActive(false)
    }, 1000)
  }

  const startAnimation = () => {
    animationTime()
  };

  useEffect(() => {
    KonamiCode({ setSecretCode, startAnimation })
  }, [])
  const avatarUrl = `https://avatars.githubusercontent.com/u/40706788?v=4`
  return (
    <S.Container>
      {isAnimationActive &&
        <>
          <AudioComponent audioSrc={AudioSource} />
          <AnimatedImage />
        </>}
      <S.TitleRow>
        <Avatar />
        <S.TextBox>
          <S.AvatarImage src={avatarUrl} alt="Carlos Profile Picture"/>
          <S.Title>{language === 'pt-br' ? 'Olá, eu sou' : `Hello, I'm`} <S.TitleSpan>Carlos Ceagah</S.TitleSpan>.</S.Title>
          <S.TitleDetails>
            {language === 'pt-br' ? HeaderTextPt : HeaderTextEng}
          </S.TitleDetails>
        </S.TextBox>
      </S.TitleRow>
      <S.MenuRow>
        <NavBar code={secretCode}/>
      </S.MenuRow>
    </S.Container>
  )
}