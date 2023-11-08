import { useEffect, useState } from "react"
import { Header } from "../components/organisms/Header"
import { Container } from "./styles"
import { AnimatedImage } from "../components/atoms/AnimationImage"
import { KonamiCode } from "../utils/konami"
import { AudioComponent } from "../components/atoms/AudioPlay"

import AudioSource from '../assets/item.wav'

const Home = () => {
  const [code, setCode] = useState<boolean>(false)
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
    KonamiCode({ setCode, startAnimation })
  }, [])


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