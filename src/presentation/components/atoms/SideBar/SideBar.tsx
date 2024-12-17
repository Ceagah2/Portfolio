import { useTranslation } from 'react-i18next';
import { Badges } from '../../../components/molecules';
import * as S from './SideBar.styles';
export const Sidebar = () => {
    const { t } = useTranslation();
    const language = localStorage.getItem("language") || "en";
  
  return (
    <S.Container>
      <S.Title> {t("terms.badges")} </S.Title>
      <Badges language={language} />
    </S.Container>
  );
};