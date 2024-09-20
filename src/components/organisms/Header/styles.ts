import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex-direction: column;
  padding: 10px;

  @media (min-width: 768px) {
    flex-direction: row; 
  }
`;

export const TitleRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column; 
  }
`;
export const TextBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    width: 90%; 
  }
`;

export const Title = styled.h1`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.heading};
  font-family: ${theme.fonts.heading};

  @media (max-width: 850px) {
    font-size: ${theme.fontSizes.subHeading}; 
  }

  @media (max-width: 430px) {
    font-size: ${theme.fontSizes.mobileHeading}; 
  }
`;

export const TitleSpan = styled.span`
  color: ${theme.colors.highLightPurple};
  font-size: ${theme.fontSizes.heading};
  font-family: ${theme.fonts.heading};

  @media (max-width: 850px) {
    font-size: ${theme.fontSizes.subHeading};
  }

  @media (max-width: 430px) {
    font-size: ${theme.fontSizes.mobileHeading};
  }
`;

export const TitleDetails = styled.p`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.subHeading};
  font-family: ${theme.fonts.body};

  @media (max-width: 850px) {
    font-size: ${theme.fontSizes.mobileSubHeading};
  }

  @media (max-width: 430px) {
    font-size: ${theme.fontSizes.body};
  }
`;

export const MenuRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AvatarImage = styled.img`
  width: 150px;
  border-radius: 50%;
  backdrop-filter: blur(5px);
  display: none;
  margin-bottom: 20px;
  cursor: pointer;

  @media (max-width: 430px) {
    display: block; 
  }

  @media (max-width: 768px) {
    width: 100px; 
  }
`;
