
import NotFoundImage from '../../assets/404.png';
import * as S from './NotFound.styles';

export default function NotFound() {
  const handleBackClick = () => {
    window.location.href = "/";
  };

  return (
    <S.Container>
      <S.Image src={NotFoundImage} alt="404 Not Found" />

      <S.Title>404</S.Title>
      <S.Subtitle>
        Oops! A página que você está procurando não existe.
      </S.Subtitle>
      <S.BackButton onClick={handleBackClick}>
        Voltar para a página inicial
      </S.BackButton>
    </S.Container>
  );
}