import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 450px) {
    width: 100%;
    justify-content: center; 
    align-items: center; 
  }
`;

export const ProjectsHeader = styled.div`
  width: 100%; 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 450px) {
    align-items: center; 
    text-align: center; 
    padding-right: 20px;
  }
`;

export const ProjectText = styled.p`
  width: 100%; 
  color: ${theme.colors.white};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.body};
  font-weight: bold;
  text-align: start;
  margin-bottom: 20px;

  @media (max-width: 450px) {
    text-align: center; 
    font-size: ${theme.fontSizes.small};
  }
`;

export const ProjectsContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 450px) {
    justify-content: center; 
  }
`;
