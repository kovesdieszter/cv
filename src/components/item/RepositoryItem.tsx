import React from "react";
import "../../style/RepositoryItem.css";

interface RepositoryItemProps {
  title: string;
  link: string;
  description: string;
  challenge: string;
  technology: string[];
}

export const RepositoryItem: React.FC<RepositoryItemProps> = ({
  title,
  link,
  description,
  challenge,
  technology,
}) => (
  <div className="repositories">
    <div className="repository-card">
      <a href={link} className="repo-link" target="_blank">
        {title}
      </a>
      <p className="repo-description">{description}</p>
      <p className="repo-challenge">Challenge: {challenge}</p>
      <div className="technologies">
        {technology.map((tech, index) => (
          <span key={index} className="technology">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);
