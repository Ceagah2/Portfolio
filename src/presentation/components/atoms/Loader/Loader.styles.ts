import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

export const Container = styled.div`
  width: 50px;
  height: 50px;
  aspect-ratio: 1;
  display: grid;
  animation: ${rotateAnimation} 4s infinite;

  &::before,
  &::after {
    content: "";
    grid-area: 1 / 1;
    border: 8px solid;
    border-radius: 50%;
    mix-blend-mode: darken;
    animation: ${rotateAnimation} 1s infinite linear;
  }

  &::before {
    border-color: red red transparent transparent;
  }

  &::after {
    border-color: transparent transparent blue blue;
    animation-direction: reverse;
  }
`;
