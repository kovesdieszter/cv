import React from "react";
import "../../style/Item.css";

interface ExperienceItemProps {
  position: string;
  company: string;
  years: string;
  details: string[];
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  position,
  company,
  years,
  details,
}) => (
  <div className="experience-item">
    <div className="experience-company">{company}</div>
    <div className="experience-position">{position}</div>
    <div className="experience-years">{years}</div>
    <div className="experience-details">
      <ul>
        {details.map((detail, index) => (
          <li key={index} className="experience-detail-item">
            {detail.includes("TeslaShell") ? (
              <p>
                {detail.split("TeslaShell").map((item, index) => (
                  <React.Fragment key={index}>
                    {item}
                    {index !== detail.split("TeslaShell").length - 1 && (
                      <a href="https://test.teslashell.com/" target="_blank">
                        TeslaShell
                      </a>
                    )}
                  </React.Fragment>
                ))}
              </p>
            ) : (
              <p>{detail}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
