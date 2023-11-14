/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import AudioSource from '../assets/item.wav'
import { KonamiCode } from "../utils/konami"
import {messages, BioText} from '../utils/constants'
import { Header } from "../components/organisms/Header"
import { AudioComponent } from "../components/atoms/AudioPlay"
import { AnimatedImage } from "../components/atoms/AnimationImage"
import { JobExperience } from "../components/organisms/JobExperience"
import { SectionContainer } from "../components/atoms/SectionContainer"
import * as S from "./styles"

const Home = () => {
  const [code, setCode] = useState<boolean>(false)
  const [isAnimationActive, setIsAnimationActive] = useState<boolean>(false)

  function showRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];

    console.log('🎮 Konami Code Easter Egg: ', randomMessage);
  }

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
    showRandomMessage();
    KonamiCode({ setCode, startAnimation })
  },[])


  return(
    <S.Container>
      <Header code={code}/>
      {isAnimationActive && 
      <>
        <AudioComponent audioSrc={AudioSource} />
        <AnimatedImage />
      </>}
      <S.MainContainer>
        <SectionContainer title="Bio" delay={0.5} key={1} orientation="start">
          <S.SectionText>
            {BioText}
          </S.SectionText>
        </SectionContainer>
        <SectionContainer title="Job Experience" delay={1} key={2} orientation="end">
          <JobExperience />
        </SectionContainer>
      </S.MainContainer>
    </S.Container>
  )
}

export default Home