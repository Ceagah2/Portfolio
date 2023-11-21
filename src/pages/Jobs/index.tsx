/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import { KonamiCode } from "../../utils/konami"
import AudioSource from '../../assets/item.wav'
import { Container, MainContainer } from "../Home/styles"
import { Header } from '../../components/organisms/Header'
import { AudioComponent } from "../../components/atoms/AudioPlay"
import { AnimatedImage } from '../../components/atoms/AnimationImage'
import { JobExperience } from "../../components/organisms/JobExperience"
import { SectionContainer } from "../../components/atoms/SectionContainer"
import * as S from './styles'
const Jobs = () => {
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
      <Header code={code} />
      {isAnimationActive &&
        <>
          <AudioComponent audioSrc={AudioSource} />
          <AnimatedImage />
        </>}
        <MainContainer>
          <S.JobHeader>
            <S.HeaderTitle>
              This are all my job experiences
            </S.HeaderTitle>
            <S.HeaderSubtitle>Detailed with all my learned development skills.</S.HeaderSubtitle>
            <S.HeaderText>
              Below, you'll find all the companies I've worked for, the applications I've developed, and the technologies I've used and learned to use. In some instances, you may notice that I've mentioned developing projects for third-party companies. In these cases, I haven't disclosed the application names as many of them have proprietary systems, requiring specific access or are distributed to other businesses.
            </S.HeaderText>
          </S.JobHeader>
          <S.JobContainer>
             <SectionContainer title=' ' delay={1}>
              <JobExperience />
            </SectionContainer>
          </S.JobContainer>
        </MainContainer>
    </Container>
  )
}


export default Jobs