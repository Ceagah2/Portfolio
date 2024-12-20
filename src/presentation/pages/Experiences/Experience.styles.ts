import styled from 'styled-components';
import { colors, fonts } from '../../theme';

export const JobTitle = styled.h1`
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${colors.backgroundLight};
  padding: 0.5rem;
  color: ${colors.textPrimary};
  font-family: ${fonts.primary};
  font-size: ${fonts.sizes.large};
`;
export const JobSection = styled.div`
  display: flex;
  width: 70%;
  flex-direction: row;
  flex-wrap: wrap;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
  gap: 16px;
`;

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  padding: .5rem;
`;