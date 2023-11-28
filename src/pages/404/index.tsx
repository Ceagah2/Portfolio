import * as S from './styles'
import * as C from '../Home/styles'
import Sorry from '../../assets/mario.png'
import { Header } from '../../components/organisms/Header'
import { useAtom } from 'jotai'
import { languageAtom } from '../../store'
const Forbidden = () => {
  const [language] = useAtom(languageAtom)
  
  return(
    <C.Container>
      <Header />
      <C.MainContainer>
        <S.ImageContainer>
          <S.Image src={Sorry} alt="Sorry Mario. Our princess is in another castle" />
        </S.ImageContainer>
        <S.TextContainer>
          <S.Text>
            {language === "en-us" 
            ? 
            `Sorry dear guest, but our princess is in another castle.
            There are two ways to solve this problem. First one, you can come back in some days, so then this page can be finished.
            Or, you can contact me, to see how can I can help you.` 
            : 
            `Lamento, querido visitante, mas nossa princesa está em outro castelo.
            Existem duas maneiras de resolver este problema. Primeira opção, você pode voltar em alguns dias para que esta página possa estar finalizada.
            Ou, você pode entrar em contato comigo para ver como posso ajudar.
            `}
          </S.Text>
        </S.TextContainer>
      </C.MainContainer>
    </C.Container>
  )
}

export default Forbidden