import styled from "styled-components";

export const CertificateContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  padding: 8px;

  @media screen and (max-width: 768px) {
    gap: 12px;
    padding: 4px;
  }

  @media screen and (max-width: 480px) {
    gap: 8px;
    padding: 2px;
  }
`;

export const CertificateRow = styled.div`
  display: flex;
  width: 95%;
  flex-direction: column;
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const CertificateLink = styled.a`
  font-size: 1.2rem;
  font-weight: bold;
  color: #61dafb;
  text-decoration: none;
  margin-bottom: 8px;

  &:hover {
    text-decoration: underline;
    color: #ffffff;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const CertificateInfo = styled.div`
  font-size: 0.9rem;
  color: #a0a0a0;

  span {
    margin: 0 5px;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.75rem;

    span {
      margin: 0 3px;
    }
  }
`;
