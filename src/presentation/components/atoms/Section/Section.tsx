import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ISection } from "./Section.interface";
import * as S from './Section.styles';

export const Section = (props: ISection) => {
  const { t } = useTranslation()
  const navigation = useNavigate()

  const onNavigate = (navigateLink: string) => {
    navigation(navigateLink)
  }
  return (
    <S.Container>
      <S.TitleContainer>
        <S.SectionTitle>{props.title}</S.SectionTitle>
        <S.MoreText onClick={() => onNavigate(props.redirectLink)}>
          {t("terms.view")} {">"}
        </S.MoreText>
      </S.TitleContainer>
      <S.Section>{props.children}</S.Section>
    </S.Container>
  );
}