import styled from "styled-components"
import {motion} from "framer-motion"
import { theme } from "../../../styles/theme"

export const Container = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background: ${theme.colors.white}
`

export const Flag = styled.span`
  font-size: ${theme.fontSizes.heading}
`