import styled from "styled-components";
import { theme } from "../../styles/theme";

export const JobHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 750px) {
    margin-bottom: 15px; 
  }
`;

export const HeaderTitle = styled.h1`
  color: ${theme.colors.highLightPurple};
  font-size: ${theme.fontSizes.heading};
  font-family: ${theme.fonts.heading};

  @media (max-width: 850px) {
    font-size: ${theme.fontSizes.subHeading}; 
  }

  @media (max-width: 430px) {
    font-size: ${theme.fontSizes.mobileSubHeading}; 
  }
`;

export const HeaderSubtitle = styled.h2`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.subHeading};
  font-family: ${theme.fonts.body};

  @media (max-width: 850px) {
    font-size: ${theme.fontSizes.mobileSubHeading};
  }
`;

export const HeaderText = styled.p`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.body};
  font-family: ${theme.fonts.body};
  width: 60%;
  text-align: center;

  @media (max-width: 750px) {
    width: 90%;
    font-size: ${theme.fontSizes.mobileBody}; 
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  @media (max-width: 750px) {

  }
`;

export const JobContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;

  @media (max-width: 750px) {
    margin-top: 15px; 
  }
`;
