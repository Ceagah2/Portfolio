import styled from 'styled-components';
import { colors, fonts } from '../../../theme';

interface JobCardProps {
  score: number;
}

export const CardContainer = styled.div`
  background: #1e1e2f;
  border-radius: 10px;
  padding: 16px;
  margin: 10px 0;
  box-shadow: 0 4px 8px ${colors.shadow};
  color: ${colors.white};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Title = styled.h2`
  font-size: ${fonts.sizes.large};
  color: ${colors.accent};
  margin-bottom: 10px;
`;

export const DateRange = styled.p`
  font-size: 0.9rem;
  color: #c4c4c4;
  margin-bottom: 15px;
`;

export const Description = styled.p`
  font-size: ${fonts.sizes.medium};
  line-height: 1.5;
  margin-bottom: 15px;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

export const Skill = styled.span<JobCardProps>`
  background: #2d2d3e;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 0.9rem;
  color: ${colors.accent};
  display: flex;
  align-items: center;

  &:after {
    content: "";
    display: block;
    height: 5px;
    width: ${(props) => props.score * 10}%;
    background: ${colors.accent};
    margin-left: 8px;
    border-radius: 3px;
  }
`;
