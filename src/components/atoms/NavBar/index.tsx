/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from './styles'
import { useAtom } from 'jotai'
import { languageAtom } from '../../../store'
import { LanguageButton } from '../Button'

export const NavBar = (props: any) => {
  const {code} = props
  const [language] = useAtom(languageAtom)
  
  return(
    <S.Container>
      <S.Menu>
        {code && 
          <S.MenuItem>
            <S.LinkItem to="/secret-chamber">{ language === 'en-us' ? '< Secret Chamber />' : '< Camara Secreta />'}</S.LinkItem>
          </S.MenuItem>
        }
        <S.MenuItem >
          <S.LinkItem to="/">{'< Main />'}</S.LinkItem>
          </S.MenuItem>
        <S.MenuItem >
          <S.LinkItem to="/jobs">{language === 'en-us' ? '< Job Experience />' : '< Experiencia />'}</S.LinkItem>
        </S.MenuItem>
        <S.NoAnimationMenuItem>
          <LanguageButton />
        </S.NoAnimationMenuItem>
      </S.Menu>
    </S.Container>
  )
}