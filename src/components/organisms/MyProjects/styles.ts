import styled from 'styled-components'
import {theme} from '../../../styles/theme'

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 450px) {
    width: 100%;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
  }
`;

export const ProjectsHeader = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`
export const ProjectText = styled.p`
  width: 60%;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.body};
  font-weight: bold;
  text-align: start;
  margin-bottom: 20px;
`

export const ProjectsContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`