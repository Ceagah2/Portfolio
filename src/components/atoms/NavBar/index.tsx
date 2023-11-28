/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from './styles'

export const NavBar = (props: any) => {
  const {code} = props
  
  return(
    <S.Container>
      <S.Menu>
        {code && 
          <S.MenuItem>
            <S.LinkItem to="/secret-chamber">{'< Secret Chamber />'}</S.LinkItem>
          </S.MenuItem>
        }
        <S.MenuItem >
          <S.LinkItem to="/">{'< Main />'}</S.LinkItem>
          </S.MenuItem>
        <S.MenuItem >
          <S.LinkItem to="/jobs">{'< Job Experience />'}</S.LinkItem>
        </S.MenuItem>
      </S.Menu>
    </S.Container>
  )
}