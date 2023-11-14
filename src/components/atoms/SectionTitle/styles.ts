import styled from 'styled-components'
import { theme } from '../../../styles/theme'


export const Container = styled.h2`
  font-size: ${theme.fontSizes.sectionTitle};
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.highlight};
  border-bottom: 1px solid ${theme.colors.highlight};
`