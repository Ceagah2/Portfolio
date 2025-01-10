import styled from "styled-components";
import { colors } from '../../theme';

type ButtonProps = {
  color: string;
  backgroundColor: string;
}

export const SecretTitle = styled.h2``
export const SecureBreachImage = styled.img`
  width: 75%;
  align-self: center;
`

export const VideoContainer = styled.div`
  width: 80%;
  max-width: 800px;
  aspect-ratio: 16 / 9;
  margin: 2rem 0;
  border: 4px solid ${colors.accent};
  border-radius: 8px;
  overflow: hidden;
  align-self: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const VideoFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  width: 75%;
  height: 50px;
  align-self: center;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
`
export const SocialMediaButton = styled.button<ButtonProps>`
  width: 30%;
  height: 100%;
  border-radius: 16px;
  border: none;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  cursor: pointer;

  &:hover{
    opacity: 0.6;
    transition: opacity 0.2s ease-in-out;
  }
`