import styled from "styled-components";

export const CertificateContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  padding: 8px;
`;

export const CertificateRow = styled.div`
  display: flex;
  width: 95%;
  flex-direction: column;
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  
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
`;

export const CertificateInfo = styled.div`
  font-size: 0.9rem;
  color: #a0a0a0;

  span {
    margin: 0 5px;
  }
`;
