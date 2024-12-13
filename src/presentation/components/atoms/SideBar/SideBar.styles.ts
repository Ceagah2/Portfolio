import styled from 'styled-components';
import { colors, fonts } from '../../../theme';


export const Container = styled.aside`
  height: 75vh;
  width: 12vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  background: ${colors.backgroundLight};
  position: absolute;
  top: 15px;
  right: 15px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;
export const Title = styled.h3`
  color: ${colors.textPrimary};
  font-family: ${fonts.primary};
  font-size: ${fonts.sizes.large};
`;
export const Text = styled.span`
  color: ${colors.textSecondary};
  font-family: ${fonts.primary};
  font-size: ${fonts.sizes.small};
`;