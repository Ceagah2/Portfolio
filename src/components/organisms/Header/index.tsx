/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavBar } from '../../atoms/NavBar'
import { Avatar } from '../../atoms/Avatar'

import * as S from './styles'
export const Header = (props: any) => {
  const {code} = props
  const avatarUrl = `https://avatars.githubusercontent.com/u/40706788?v=4`
  return (
    <S.Container>
      <S.TitleRow>
        <Avatar />
        <S.TextBox>
          <S.AvatarImage src={avatarUrl} alt="Carlos Profile Picture"/>
          <S.Title>Hello, I'm <S.TitleSpan>Carlos Ceagah</S.TitleSpan>, Front end developer. </S.Title>
          <S.TitleDetails>I specialize in crafting digital experiences with precision and passion, where the synergy of innovation and imagination unfolds</S.TitleDetails>
        </S.TextBox>
      </S.TitleRow>
      <S.MenuRow>
        <NavBar code={code}/>
      </S.MenuRow>
    </S.Container>
  )
}