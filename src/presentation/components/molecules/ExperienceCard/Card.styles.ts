import styled from "styled-components";
import { colors } from "../../../theme";

export const CardContainer = styled.div`
  width: 250px;
  height: 350px;
  background-color: ${colors.cardBg};
  border-radius: 8px;
  padding: 16px;
  margin: 8px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  color: #ffffff;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;

  @media screen and (max-width: 1350px) {
    height: 325px;
    width: 225px;
  }

  @media screen and (max-width: 1100px) {
    height: 350px;
    width: 300px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 12px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    margin: 4px 0;
    padding: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  color: #f5f5f5;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (max-width: 768px) {
    gap: 6px;
  }

  @media screen and (max-width: 480px) {
    gap: 4px;
  }
`;

export const SkillRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SkillName = styled.span`
  font-size: 1rem;
  color: #d5d5d5;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const SkillStars = styled.div`
  display: flex;
  gap: 4px;

  @media screen and (max-width: 480px) {
    gap: 2px;
  }
`;

export const SkillStar = styled.span<{ isPlatinum: boolean; isGold: boolean }>`
  font-size: 1.2rem;
  color: ${(props) =>
    props.isPlatinum ? "#E5E4E2" : props.isGold ? "#FFD700" : "#333"};

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const DateRange = styled.p`
  font-size: 0.9rem;
  color: #a5a5a5;
  margin: 0;

  @media screen and (max-width: 1350px) {
    display: none;
  }
  @media screen and (max-width: 1100px) {
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;
