/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { Header } from "../components/organisms/Header"
import { Container } from "./styles"
import { AnimatedImage } from "../components/atoms/AnimationImage"
import { KonamiCode } from "../utils/konami"
import { AudioComponent } from "../components/atoms/AudioPlay"
import {messages} from '../utils/constants'

import AudioSource from '../assets/item.wav'

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
    <Container>
      <Header code={code}/>
      {isAnimationActive && 
      <>
        <AudioComponent audioSrc={AudioSource} />
        <AnimatedImage />
      </>}
    </Container>
  )
}

export default Home