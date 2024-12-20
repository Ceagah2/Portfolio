import styled from 'styled-components';
import { colors, fonts } from '../../theme';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primaryBg};
  color: ${colors.textPrimary};
  text-align: center;
  padding: 16px;

  @media screen and (max-width: 768px) {
    padding: 8px;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-family: ${fonts.primary};
  color: ${colors.accent};

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  margin: 16px 0;
  color: ${colors.textSecondary};
  font-family: ${fonts.primary};

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Image = styled.img`
  width: 60%;
  max-width: 500px;
  height: auto;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const BackButton = styled.button`
  background-color: ${colors.accent};
  color: ${colors.primaryBg};
  font-family: ${fonts.primary};
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.textPrimary};
    color: ${colors.primaryBg};
    transform: translateY(-3px);
  }

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px 20px;
  }
`;
