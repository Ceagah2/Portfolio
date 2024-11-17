import styled from 'styled-components';
import * as theme from "../../../theme";


export const Container = styled.section`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-image: linear-gradient(${theme.colors.headerGradientFrom}, ${theme.colors.headerGradientTo});
  padding: 16px;
`