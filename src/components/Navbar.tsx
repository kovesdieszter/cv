import React from "react";
import "../style/Navbar.css";

interface NavbarProps {
  setContent: (content: string) => void;
}

const navItems = [
  { content: "repositories", label: "Repositories" },
  { content: "education", label: "Education" },
  { content: "experience", label: "Experience" },
  { content: "aboutme", label: "About me" },
];

export const Navbar: React.FC<NavbarProps> = ({ setContent }) => {
  const handleButtonClick = (content: string) => {
    setContent(content);
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {navItems.map((item, index) => (
          <li className="nav-item" key={index}>
            <button
              className="nav-button"
              onClick={() => handleButtonClick(item.content)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
