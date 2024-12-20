import styled from "styled-components";
import { colors, fonts } from "../../../theme";

type ContainerType = {
  height: string;
};

export const Container = styled.section<ContainerType>`
  height: ${(props) => props.height};
  width: 73%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
  margin-bottom: 1rem;

  @media screen and (max-width: 1500px) {
    height: 40vh;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    height: auto;
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    margin-bottom: 0.25rem;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${colors.backgroundLight};
  padding: 0.5rem;

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 0.25rem;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 480px) {
    padding: 0.2rem;
    justify-content: center;
  }
`;

export const SectionTitle = styled.h2`
  color: ${colors.textPrimary};
  font-size: ${fonts.sizes.large};
  font-family: ${fonts.primary};
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: ${fonts.sizes.medium};
  }

  @media screen and (max-width: 480px) {
    font-size: ${fonts.sizes.small};
  }
`;

export const MoreText = styled.span`
  color: ${colors.accent};
  font-size: ${fonts.sizes.medium};
  font-family: ${fonts.primary};
  text-align: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    font-size: ${fonts.sizes.small};
  }

  @media screen and (max-width: 480px) {
    font-size: ${fonts.sizes.small};
  }
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }

  @media screen and (max-width: 480px) {
    justify-content: center;
  }
`;
