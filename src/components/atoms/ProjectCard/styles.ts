import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { theme } from '../../../styles/theme'

export const Container = styled.div`
  width: 250px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: ${theme.colors.white};
  border-radius: 20px;
  margin: 20px;
`

export const CardHeader = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
`
export const CardImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`
export const CardTitle = styled.h1`
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.highlight};
  font-size: ${theme.fontSizes.subHeading};
  text-align: center;
`
export const CardBody = styled.div``
export const CardDescription = styled.p`
  text-align: center;
  font-size: ${theme.fontSizes.body};
  color: ${theme.colors.black};
  font-family: ${theme.fonts.body};
`
export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CardLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.black};
  font-family: ${theme.fonts.body};
  text-align: center;

  &:hover {
    color: ${theme.colors.highlight};
    transition: 0.5s;
    transform: scale(1.1);
  }
`