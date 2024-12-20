import { motion } from "framer-motion";
import styled from "styled-components";
import { colors, fonts } from "../../../theme";

export const Container = styled.header`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${colors.headerGradientFrom};

  @media screen and (max-width: 1500px) {
    width: 80%;
  }

  @media screen and (max-width: 1300px) {
    width: 90%;
  }
  @media screen and (max-width: 1150px) {
    width: 95%;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ProfileContainer = styled.div`
  width: 250px;
  height: 250px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 150px;
  }
`;

export const Frame = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
  }

  @media screen and (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

export const DataContainer = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 1rem;

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding-left: 0;
    padding-top: 1rem;
  }
`;

export const NickName = styled.h2`
  color: ${colors.textPrimary};
  font-family: ${fonts.primary};
  font-size: ${fonts.sizes.large};

  @media screen and (max-width: 768px) {
    font-size: ${fonts.sizes.medium};
  }

  @media screen and (max-width: 480px) {
    font-size: ${fonts.sizes.small};
  }
`;

export const FlagButton = styled(motion.button)`
  background: transparent;
  border: 1px solid ${colors.border};
  padding: 8px;
  border-radius: 16px;
  cursor: pointer;
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const FullName = styled.span`
  color: ${colors.textSecondary};
  font-family: ${fonts.primary};
  font-size: ${fonts.sizes.small};

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const Bio = styled.p`
  color: ${colors.textPrimary};
  font-family: ${fonts.primary};
  font-size: ${fonts.sizes.medium};
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    font-size: ${fonts.sizes.small};
  }

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const ExperienceContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const TitleLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.border};
  padding-bottom: 10px;
  margin-bottom: 1rem;
`;

export const ExperienceTitle = styled.span`
  color: ${colors.textPrimary};
  font-family: ${fonts.primary};
  font-size: ${fonts.sizes.large};

  @media screen and (max-width: 768px) {
    font-size: ${fonts.sizes.medium};
  }
`;

export const ExperienceText = styled.span`
  color: ${colors.accent};
  font-family: ${fonts.primary};
  font-size: ${fonts.sizes.medium};
  border: 3px solid ${colors.accent};
  padding: 0.2rem 0.3rem;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    font-size: ${fonts.sizes.small};
  }
`;

export const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 4px;
  width: 100%;
`;

export const BadgeImage = styled.img`
  width: 75px;
  max-width: 140px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    width: 60px;
  }

  @media screen and (max-width: 480px) {
    width: 50px;
  }
`;

export const StackContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding-top: 8px;
  background: ${colors.backgroundLight};

  @media screen and (max-width: 768px) {
    padding: 4px;
  }

  @media screen and (max-width: 480px) {
    padding: 2px;
  }
`;

export const StackTitle = styled.h3`
  color: ${colors.textPrimary};
  font-family: ${fonts.primary};
  font-size: ${fonts.sizes.large};
  margin-bottom: 8px;

  @media screen and (max-width: 768px) {
    font-size: ${fonts.sizes.medium};
    margin-bottom: 6px;
  }

  @media screen and (max-width: 480px) {
    font-size: ${fonts.sizes.small};
    margin-bottom: 4px;
  }
`;
