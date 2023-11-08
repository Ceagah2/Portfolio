/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar } from '../../atoms/Avatar'
import * as S from './styles'
export const Header = (props: any) => {
  const {code} = props
  console.log('Código esta ativo?', code)
  return (
    <S.Container>
      <S.TitleRow>
        <Avatar />
        <S.TextBox>
          <S.Title>Hello, I'm <S.TitleSpan>Carlos Ceagah</S.TitleSpan> </S.Title>
          <S.TitleDetails>I'm a front end developer, and you're into my portfolio.</S.TitleDetails>
        </S.TextBox>
      </S.TitleRow>
    </S.Container>
  )
}