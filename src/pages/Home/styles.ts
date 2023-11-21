import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  background-color: ${theme.colors.black};
  min-height: 100vh;
  height: 100%;
  min-width: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 25px;
`; 

export const MainContainer = styled.main`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`

export const SectionText = styled.p`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.body};
  letter-spacing: 1.1px;
  line-height: 1.5;
`

