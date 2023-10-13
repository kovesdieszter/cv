import React from "react";
import "../style/AvatarComponent.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import AvatarUrl from "../assets/ek.jpg";

const AvatarComponent: React.FC = () => {
  const contactInfo = {
    name: "Eszter Kövesdi",
    email: "kovesdieszti@gmail.com",
    phone: "+36203555603",
    location: "Budapest, Hungary",
    linkedin: "https://www.linkedin.com/in/eszterkovesdi/",
    github: "https://github.com/kovesdieszter",
  };

  const contactIcons = [
    { iconClass: "fa-brands fa-linkedin", href: contactInfo.linkedin },
    {
      iconClass: "fab fa-github-square",
      href: contactInfo.github,
    },
    {
      iconClass: "fa-solid fa-envelope-square",
      href: `mailto:${contactInfo.email}`,
    },
    {
      iconClass: "fa-solid fa-square-phone",
      href: `tel: ${contactInfo.phone}`,
    },
  ];

  return (
    <div className="avatar-container">
      <div className="avatar">
        <img src={AvatarUrl} alt="Eszter Kövesdi" />
      </div>
      <div className="contact-info">
        <h1 className="name">{contactInfo.name}</h1>
        <div className="email">{contactInfo.email}</div>
        <div className="location">
          <i className="fa-solid fa-location-dot location-dot"></i>
          {contactInfo.location}
        </div>

        <div>
          <h1 className="contact-title">Contact</h1>
        </div>
        <div className="contact-icons">
          {contactIcons.map((icon, index) => (
            <a key={index} href={icon.href} target="_blank">
              <i className={`${icon.iconClass} base-icon`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvatarComponent;
