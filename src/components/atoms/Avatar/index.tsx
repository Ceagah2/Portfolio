import * as S from "./styles"

export const Avatar = () => {
  const avatarUrl = `https://avatars.githubusercontent.com/u/40706788?v=4`
  return (
    <S.Container src={avatarUrl} alt="Github avatar profile" />
  )
}