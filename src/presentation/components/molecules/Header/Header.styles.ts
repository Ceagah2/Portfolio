import styled from 'styled-components';
import { colors, fonts } from '../../../theme';

export const Container = styled.header`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`

export const ProfileContainer = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
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
  width: 160px; 
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
`;

export const DataContainer = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid white;
`

export const NickName = styled.h2`
  color: ${colors.textPrimary};
  font-family: ${fonts.primary};
  font-size: ${fonts.sizes.medium};
`

export const FullName = styled.span`
  color: ${colors.textSecondary};
  font-family: ${fonts.primary};
  font-size: ${fonts.sizes.small};
`

export const Bio = styled.p`
  color: ${colors.textSecondary};
  font-family: ${fonts.primary};
  font-size: ${fonts.sizes.small};
`;

export const ExperienceContainer = styled.div`
  width: 30%;
  height: 100%;
  border: 1px solid white;
`;