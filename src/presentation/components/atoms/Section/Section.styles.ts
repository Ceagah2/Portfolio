import styled from 'styled-components';
import { colors, fonts } from '../../../theme';
export const Container = styled.section`
  width: 70%;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
  margin-bottom: 1rem;
`
export const TitleContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${colors.backgroundLight};
  padding: 0.5rem;
`
export const SectionTitle = styled.h2`
  color: ${colors.textPrimary};
  font-size: ${fonts.sizes.large};
  font-family: ${fonts.primary};
  text-align: center;
`
export const MoreText = styled.span`
  color: ${colors.accent};
  font-size: ${fonts.sizes.medium};
  font-family: ${fonts.primary};
  text-align: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Section = styled.div``