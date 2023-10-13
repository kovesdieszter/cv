import Hiking from "../assets/aboutme/hiking.jpg";
import Cirrus from "../assets/aboutme/cirrus.jpg";
import Dragon from "../assets/aboutme/dragon.jpg";

import "../style/AboutMe.css";

export const AboutMe = () => {
  return (
    <>
      <div className="about-me-container">
        <div className="image-card">
          <img src={Hiking} alt="Hiking" />
        </div>
        <div className="image-card">
          <img src={Cirrus} alt="Cirrus" />
        </div>
        <div className="image-card">
          <img src={Dragon} alt="Dragon" />
        </div>
      </div>
    </>
  );
};
