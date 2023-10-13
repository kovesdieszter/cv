import { AboutMe } from "./AboutMe";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Repository } from "./Repository";

interface MainContentProps {
  activeContent: string;
}

export const MainContent: React.FC<MainContentProps> = ({ activeContent }) => {
  return (
    <>
      {activeContent === "repositories" && <Repository />}
      {activeContent === "education" && <Education />}
      {activeContent === "experience" && <Experience />}
      {activeContent === "aboutme" && <AboutMe />}
    </>
  );
};
