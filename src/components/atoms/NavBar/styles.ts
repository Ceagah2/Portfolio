import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { theme } from "../../../styles/theme";

const barrelRoll = keyframes`
  0% {
    transform: rotateX(0deg);
    opacity: 1;
  }
  50% {
    transform: rotateX(180deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(360deg);
    opacity: 1;
  }
`;

export const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px;

  @media (max-width: 750px) {
    flex-direction: row; 
    padding: 5px;
  }

  @media (max-width: 1500px) {
    width: 60%;
  }

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const Menu = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;

  @media (max-width: 750px) {
    flex-direction: column; 
    margin-top: 10px;
    width: 100%; 
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  color: ${theme.colors.highLightPurple};
  cursor: pointer;
  position: relative;
  font-size: ${theme.fontSizes.subHeading};

  &:hover {
    color: ${theme.colors.white};
    animation: ${barrelRoll} 1s ease-in-out;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  @media (max-width: 750px) {
    font-size: ${theme.fontSizes.mobileSubHeading}; 
    margin-bottom: 10px; 
  }
`;

export const NoAnimationMenuItem = styled.li`
  list-style: none;
  color: ${theme.colors.highLightPurple};
  cursor: pointer;
  position: relative;
  font-size: ${theme.fontSizes.subHeading};

  @media (max-width: 750px) {
    font-size: ${theme.fontSizes.mobileSubHeading};
    margin-bottom: 10px;
  }
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.highLightPurple};
  cursor: pointer;
  position: relative;
  font-size: ${theme.fontSizes.subHeading};

  @media (max-width: 750px) {
    font-size: ${theme.fontSizes.mobileSubHeading};
    margin-bottom: 10px; 
  }
`;
