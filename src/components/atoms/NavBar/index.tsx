/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from './styles'

export const NavBar = (props: any) => {
  const {code} = props
  
  return(
    <S.Container>
      <S.Menu>
        {code && <S.MenuItem>{'< Secret Chamber >'}</S.MenuItem>}
        <S.MenuItem>{'< Bio />'}</S.MenuItem>
        <S.MenuItem>{'< Job Experience />'}</S.MenuItem>
        <S.MenuItem>{'< My Projects />'}</S.MenuItem>
        <S.MenuItem>{'< Get in touch />'}</S.MenuItem>
      </S.Menu>
    </S.Container>
  )
}