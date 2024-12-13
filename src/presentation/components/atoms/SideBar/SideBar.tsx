import { useTranslation } from 'react-i18next';
import * as S from './SideBar.styles';
export const Sidebar = () => {
    const { t } = useTranslation();
  
  return(
    <S.Container>
      <S.Title> {t("terms.badges")} </S.Title>
    </S.Container>
  );
};