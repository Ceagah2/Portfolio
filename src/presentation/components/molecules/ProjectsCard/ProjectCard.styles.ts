import styled from "styled-components";
import { colors } from "../../../theme";

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
    width: 225px;
  }

  @media screen and (max-width: 1100px) {
    height: 280px;
    width: 200px;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    width: 100%;
    padding: 12px;
  }

  @media screen and (max-width: 480px) {
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

export const Description = styled.p`
  font-size: 1rem;
  color: #d5d5d5;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 768px) {
    gap: 6px;
  }

  @media screen and (max-width: 480px) {
    gap: 4px;
  }
`;

export const TechItem = styled.li`
  background-color: #333333;
  color: #f5f5f5;
  font-size: 0.85rem;
  padding: 4px 8px;
  border-radius: 4px;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    padding: 3px 6px;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
    padding: 2px 4px;
  }
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

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    padding: 6px 12px;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
    padding: 4px 8px;
  }
`;
