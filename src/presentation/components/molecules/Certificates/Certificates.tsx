import React from "react";
import certificatesData from "../../../../infra/translate/certificates.json";
import * as S from "./Certificates.styles";

export const Certificates: React.FC = () => {
  return (
    <S.CertificateContainer>
      {certificatesData.certificates.map((certificate, index) => (
        <S.CertificateRow key={index}>
          <S.CertificateLink
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {certificate.name}
          </S.CertificateLink>
          <S.CertificateInfo>
            <span>{certificate.company}</span> | <span>{certificate.date}</span>
          </S.CertificateInfo>
        </S.CertificateRow>
      ))}
    </S.CertificateContainer>
  );
};
