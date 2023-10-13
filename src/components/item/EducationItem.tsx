import React from "react";
import "../../style/Item.css";

interface EducationItemProps {
  type: string;
  school: string;
  certificate: string;
  years: string;
}

export const EducationItem: React.FC<EducationItemProps> = ({
  type,
  school,
  certificate,
  years,
}) => (
  <div className="education-item">
    <div className="education-type">{type}</div>
    <div className="education-school">{school}</div>
    <div className="education-certificate">{certificate}</div>
    <div className="education-years">{years}</div>
  </div>
);
