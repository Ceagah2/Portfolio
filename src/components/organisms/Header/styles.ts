import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  flex-direction: column;
`;

export const TitleRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.heading};
  font-family: ${theme.fonts.heading};
`;
  export const TitleSpan = styled.span`
  color: ${theme.colors.highLightPurple};
  font-size: ${theme.fontSizes.heading};
  font-family: ${theme.fonts.heading};
`;
export const TitleDetails = styled.p`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.subHeading};
  font-family: ${theme.fonts.body};
`;

export const MenuRow = styled.div``;