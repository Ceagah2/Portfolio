import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface SkillSquareProps {
  score: number;
}

const getColor = (score: number): string => {
  const colors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff"];
  return colors[score - 1] || "black";
};

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 750px) {
    justify-content: center;
    margin-bottom: 30px;
  }
`;

export const JobContainer = styled.div`
  display: flex;
  width: 30%;
  height: 650px;
  margin-bottom: 30px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  background: ${theme.colors.white};
  padding: 20px;
  border-radius: 20px;

  @media (max-width: 1100px) {
    width: 45%; 
  }

  @media (max-width: 750px) {
    width: 90%; 
    height: auto;
  }
`;

export const JobTitle = styled.h3`
  color: ${theme.colors.highLightPurple};
  font-size: ${theme.fontSizes.mobileSubHeading};
  font-family: ${theme.fonts.heading};

  @media (max-width: 750px) {
    font-size: ${theme.fontSizes.body}; 
  }
`;

export const JobDescription = styled.p`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.body};
  font-family: ${theme.fonts.body};
  text-align: center;

  @media (max-width: 750px) {
    font-size: ${theme.fontSizes.mobileBody};
  }
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10px;

  @media (max-width: 750px) {
    flex-direction: column; 
    align-items: center; 
  }
`;

export const DateText = styled.span`
  text-align: right;
  color: ${theme.colors.highlight};
  font-size: ${theme.fontSizes.body};
  font-family: ${theme.fonts.heading};
  margin-right: 5px;
`;

export const DateTime = styled.span`
  text-align: right;
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.body};
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 50%;

  @media (max-width: 750px) {
    width: 100%; 
    align-items: center; 
  }
`;

export const SkillName = styled.span`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.body};
  font-family: ${theme.fonts.body};
`;

export const ProgressBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 20px;
  margin-top: 5px;

  @media (max-width: 750px) {
    justify-content: center; 
  }
`;

export const SkillSquare = styled.div<SkillSquareProps>`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  margin-right: 4px;
  background-color: ${({ score }) => getColor(score)};
  border: 1px solid white;
`;

export const Progress = styled.div`
  height: 100%;
  border-radius: 5px;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 750px) {
    justify-content: center; 
  }
`;

export const JobLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.highLightPurple};
  font-size: ${theme.fontSizes.body};
  font-family: ${theme.fonts.body};
  @media (max-width: 768px) {
    text-align: left;
    font-size: ${theme.fontSizes.small};
  }
`;
