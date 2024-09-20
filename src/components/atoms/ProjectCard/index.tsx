import { FaArrowRight } from "react-icons/fa"
import { IProjectCard } from "../../../@types/types"
import { AVATAR_URL } from "../../../utils/constants"
import * as S from "./styles"

export const ProjectCard = (props: IProjectCard) => {
  const {id, title, description, html_url} = props
  const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);
  return(
    <S.Container key={id}>
      <S.CardHeader>
        <S.CardImage src={AVATAR_URL} alt="project cover"/>
        <S.CardTitle>{capitalizedTitle}</S.CardTitle>
      </S.CardHeader>
      <S.CardBody>
        <S.CardDescription>{description}</S.CardDescription>
      </S.CardBody>
      <S.CardFooter>
        <S.CardLink to={html_url}>Source code <FaArrowRight size={14}/> </S.CardLink>
      </S.CardFooter>
    </S.Container>
  )
}