import { ISectionContainer } from "../../../@types/types"
import { SectionTitle } from "../SectionTitle"
import * as S from "./styles"
export const SectionContainer = ({ title, delay, children, orientation }: ISectionContainer) => {
  return(
    <S.Container
      animate={{
        opacity: 1,
        x: 0,
      }}
      initial={{
        opacity: 0,
        x: -20,
      }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
        delay: delay || 0,
      }}
      orientation={orientation}
    >
      <SectionTitle>{title}</SectionTitle>
      <S.ChildContainer>
       {children}
      </S.ChildContainer>
    </S.Container>
  )
}