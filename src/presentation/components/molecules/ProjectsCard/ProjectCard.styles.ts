import styled from "styled-components";
import { colors } from '../../../theme';

export const CardContainer = styled.div`
  height: 350px;
  width: 250px;
  background-color: ${colors.cardBg};
  border-radius: 8px;
  padding: 16px;
  margin: 8px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  color: #ffffff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4);
  }

  @media screen and (max-width: 1300px) {
    height: 300px;
    width: 250px;
  }

  @media screen and (max-width: 1300px) {
    height: 375px;
    width: 220px;
  }
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  color: #f5f5f5;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #d5d5d5;
  margin: 0;
`;

export const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TechItem = styled.li`
  background-color: #333333;
  color: #f5f5f5;
  font-size: 0.85rem;
  padding: 4px 8px;
  border-radius: 4px;
`;

export const MoreInfoButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background-color: #0056b3;
  }

  @media screen and (max-width: 1300px) {
    display: none;
  }
`;
