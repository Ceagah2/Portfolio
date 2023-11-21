/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from './styles'

export const NavBar = (props: any) => {
  const {code} = props
  
  return(
    <S.Container>
      <S.Menu>
        {code && 
          <S.LinkItem to="/secret-chamber">
            <S.MenuItem>{'< Secret Chamber />'}</S.MenuItem>
          </S.LinkItem>
        }
        <S.LinkItem to="/">
          <S.MenuItem>{'< Main />'}</S.MenuItem>
          </S.LinkItem>
        <S.LinkItem to="/jobs">
          <S.MenuItem>{'< Job Experience />'}</S.MenuItem>
        </S.LinkItem>
      </S.Menu>
    </S.Container>
  )
}