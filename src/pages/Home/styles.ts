import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  background-color: ${theme.colors.black};
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 25px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const MainContainer = styled.main`
  width: 90%;
  max-width: 1200px; 
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%; 
    padding: 10px;
  }
`;

export const SectionText = styled.p`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.body};
  letter-spacing: 1.1px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: ${theme.fontSizes.small};
  }
`;

export const JobContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    align-items: flex-start; 
  }
`;

export const JobDescription = styled.p`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.body};
  font-family: ${theme.fonts.body};
  text-align: right;

  @media (max-width: 768px) {
    text-align: left; 
    font-size: ${theme.fontSizes.small};
  }
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    align-items: flex-start; 
  }
`;

export const SkillName = styled.span`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.body};
  font-family: ${theme.fonts.body};

  @media (max-width: 768px) {
    font-size: ${theme.fontSizes.small}; 
  }
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: 10px;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const DateText = styled.span`
  text-align: right;
  color: ${theme.colors.highlight};
  font-size: ${theme.fontSizes.body};
  font-family: ${theme.fonts.heading};
  margin-right: 5px;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const DateTime = styled.span`
  text-align: right;
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.body};

  @media (max-width: 768px) {
    text-align: left;
  }
`;
