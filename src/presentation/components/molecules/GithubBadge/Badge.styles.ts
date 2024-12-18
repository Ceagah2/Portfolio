
import styled from "styled-components";

export const BadgeWrapper = styled.div`
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
`;

export const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

export const BadgeIcon = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const BadgeTooltip = styled.div`
  width: 100%;
  position: absolute;
  bottom: -100px;
  transform: translateX(-50%);
  width: 150px;
  padding: 10px;
  background-color: #cecece;
  font-size: 12px;
  border-radius: 5px;
  text-align: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  z-index: 9;

  span {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }

  p {
    margin: 0;
  }
`;

export const Badge = styled.div`
  position: relative;

  &:hover ${BadgeTooltip} {
    opacity: 1;
    pointer-events: auto;
  }
`;
