import Sorry from '../../assets/mario.png'
import { Header } from '../../components/organisms/Header'
import * as S from './styles'
import * as C from '../Home/styles'
const SecretChamber = () => {
  
  return(
    <C.Container>
      <Header />
      <C.MainContainer>
        <S.ImageContainer>
          <S.Image src={Sorry} alt="Sorry Mario. Our princess is in another castle" />
        </S.ImageContainer>
      </C.MainContainer>
    </C.Container>
  )
}

export default SecretChamber