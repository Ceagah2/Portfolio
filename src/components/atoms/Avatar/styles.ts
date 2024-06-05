import styled from 'styled-components'

export const Container = styled.img`
  width: 150px;
  border-radius: 50%;
  backdrop-filter: blur(5px);
  cursor: pointer;

  @media (max-width: 750px) {
    width: 15%;
  }

  @media (max-width: 430px) {
    display: none;
  }
`;

