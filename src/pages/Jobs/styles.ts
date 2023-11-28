import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const JobHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`
export const HeaderTitle = styled.h1`
  color: ${theme.colors.highLightPurple};
  font-size: ${theme.fontSizes.heading};
  font-family: ${theme.fonts.heading};
`
export const HeaderSubtitle = styled.h2`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.subHeading};
  font-family: ${theme.fonts.body};
`
export const HeaderText = styled.p`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.body};
  font-family: ${theme.fonts.body};
  width: 60%;
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;
export const JobContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
`