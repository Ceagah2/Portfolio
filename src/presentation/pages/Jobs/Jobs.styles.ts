import styled from 'styled-components'
import { colors, fonts } from '../../theme'

export const JobTitle = styled.h1`
  color: ${colors.textPrimary};
  font-family: ${fonts.primary};
  font-size: ${fonts.sizes.medium};
`
export const JobSection = styled.div`
  display: flex;
  flex: 1;
  padding: 16px;
`