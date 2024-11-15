import { AVATAR_URL } from "../../../../infra/utils/constants";
import frameGif from '../../../assets/frame-gif.png';
import * as S from './Header.styles';
export const Header = () => {
  return (
    <S.Container>
      <S.ProfileContainer>
        <S.Frame src={frameGif} alt="Frame de Fogo" />
        <S.ProfileImage src={AVATAR_URL} alt="Imagem de Perfil" />
      </S.ProfileContainer>
      <S.DataContainer>

      </S.DataContainer>

      <S.ExperienceContainer>
        
      </S.ExperienceContainer>
    </S.Container>
  );
}