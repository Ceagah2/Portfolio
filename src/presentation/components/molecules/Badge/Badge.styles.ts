import styled from "styled-components";

export const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const BadgeIcon = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const BadgeTooltip = styled.div`
  width: 300px;
  visibility: hidden;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 4px 8px;
  position: absolute;
  z-index: 1;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 0.8rem;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  .badge:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

export const BadgeWrapper = styled.div`
  position: relative;
  display: inline-block;
`;
