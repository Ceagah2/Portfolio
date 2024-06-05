import { useNavigate } from "react-router-dom";
import * as S from "./styles"

export const Avatar = () => {
  const avatarUrl = `https://avatars.githubusercontent.com/u/40706788?v=4`
  const navigation = useNavigate();

  return (
    <S.Container src={avatarUrl} onClick={() => navigation('/')} alt="Github avatar profile" />
  )
}