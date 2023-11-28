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
export const JobContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;
export const JobDescription = styled.p`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.body};
  font-family: ${theme.fonts.body};
  text-align: right;
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
`;
export const SkillName = styled.span`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.body};
  font-family: ${theme.fonts.body};
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margi-top: 10px;
`;
export const DateText = styled.span`
  text-align: right;
  color: ${theme.colors.highlight};
  font-size: ${theme.fontSizes.body};
  font-family: ${theme.fonts.heading};
  margin-right: 5px;
`;
export const DateTime = styled.span`
   text-align: right;
   color: ${theme.colors.white};
   font-size: ${theme.fontSizes.body};
`;
