import { motion } from 'framer-motion';
import styled from 'styled-components';
import { colors, fonts } from '../../../theme';

export const Container = styled.header`
  width: 50%;
  height: 25vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${colors.headerGradientFrom};

`;

export const ProfileContainer = styled.div`
  width: 250px;
  height: 250px;
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
  width: 200px; 
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

export const DataContainer = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 1rem;

`

export const NickName = styled.h2`
  color: ${colors.textPrimary};
  font-family: ${fonts.primary};
  font-size: ${fonts.sizes.large};
`

export const FlagButton = styled(motion.button)`
  background: transparent;
  border: 1px solid ${colors.border};
  padding: 8px;
  border-radius: 16px;
  cursor: pointer;
  font-size: 1.5rem;
`;

export const FullName = styled.span`
  color: ${colors.textSecondary};
  font-family: ${fonts.primary};
  font-size: ${fonts.sizes.small};
`

export const Bio = styled.p`
  color: ${colors.textPrimary};
  font-family: ${fonts.primary};
  font-size: ${fonts.sizes.small};
  margin-top: 1rem;
`;

export const ExperienceContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const TitleLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.border};
  padding-bottom: 10px;
  margin-bottom: 1rem;
`
export const ExperienceTitle = styled.span`
  color: ${colors.textPrimary};
  font-family: ${fonts.primary};
  font-size: ${fonts.sizes.large};
`
export const ExperienceText = styled.span`
  color: ${colors.accent};
  font-family: ${fonts.primary};
  font-size: ${fonts.sizes.medium};
  border: 3px solid ${colors.accent};
  padding: 0.2rem 0.3rem .2rem 0.3rem;
  border-radius: 50%;
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
  background: ${colors.backgroundLight}
`
export const StackTitle = styled.h3`
  color: ${colors.textPrimary};
  font-family: ${fonts.primary};
  font-size: ${fonts.sizes.large};
`;
export const StackText = styled.span`
  color: ${colors.textSecondary};
  font-family: ${fonts.primary};
  font-size: ${fonts.sizes.small};
`