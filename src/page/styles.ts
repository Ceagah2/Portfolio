import styled from 'styled-components'
import { theme } from '../styles/theme'

export const Container = styled.main`
  background-color: ${theme.colors.black};
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`; 