import styled from 'styled-components';
import { colors, fonts } from '../../../theme';


export const Container = styled.aside`
  height: 90%;
  width: 17vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 8px;
  background: ${colors.backgroundLight};
  position: absolute;
  top: 15px;
  right: 15px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1500px) {
    width: 20vw;
  }
 
  @media screen and (max-width: 1300px) {
    width: 22vw;
  }

  @media screen and (max-width: 1000px) {
    width: 25vw;
  }
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