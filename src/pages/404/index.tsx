import Sorry from '../../assets/mario.png'
import { Header } from '../../components/organisms/Header'
import * as S from './styles'
import * as C from '../Home/styles'
const Forbidden = () => {
  
  return(
    <C.Container>
      <Header />
      <C.MainContainer>
        <S.ImageContainer>
          <S.Image src={Sorry} alt="Sorry Mario. Our princess is in another castle" />
        </S.ImageContainer>
        <S.TextContainer>
          <S.Text>
            Sorry dear guest, but our princess is in another castle.
            <br />
            There are two ways to solve this problem. First one, you can come back in some days, so then this page can be finished.
            <br />
            Or, you can contact me, to see how can I can help you.
          </S.Text>
        </S.TextContainer>
      </C.MainContainer>
    </C.Container>
  )
}

export default Forbidden