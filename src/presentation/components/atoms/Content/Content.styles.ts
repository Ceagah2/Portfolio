import styled from 'styled-components';
import * as theme from "../../../theme";


export const Container = styled.section`
  width: 70%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-image: linear-gradient(${theme.colors.headerGradientFrom}, ${theme.colors.headerGradientTo});
  padding: 16px;
  position: relative;

  @media screen and (max-width: 1500px) {
    width: 80%;
  }
  
  @media screen and (max-width: 1300px) {
    width: 90%;
  }

  @media screen and (max-width: 1150px) {
    width: 95%;
  }

  @media screen and (max-width: 1000px) {
    width: 100vw;
  }
`