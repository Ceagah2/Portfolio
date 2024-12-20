import React from "react";
import { useTranslation } from "react-i18next";
import { ProjectCardProps } from "./ProjectCard.interface";
import {
  CardContainer,
  Description,
  MoreInfoButton,
  TechItem,
  TechList,
  Title,
} from "./ProjectCard.styles";

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techsUsed,
  link,
}) => {
  const handleRedirect = () => {
    window.open(link, "_blank"); 
  };
  const { t } = useTranslation();
  return (
    <CardContainer onClick={handleRedirect}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <TechList>
        {techsUsed.map((tech, index) => (
          <TechItem key={index}>{tech}</TechItem>
        ))}
      </TechList>
      {link && (
        <MoreInfoButton
          onClick={(e) => {
            e.stopPropagation();
            handleRedirect();
          }}
        >
          {t("terms.view")}
        </MoreInfoButton>
      )}
    </CardContainer>
  );
};
