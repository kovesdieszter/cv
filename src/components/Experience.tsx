import { ExperienceItem } from "./item/ExperienceItem";

export const Experience = () => {
  const experienceData = [
    {
      company: "ioflair solutions Kft.",
      position: "Software Developer",
      years: "2022 - ",
      details: [
        "I worked on the TeslaShell project, integrated into Tesla's touch screen (Blitz.js, React)",
        "I contributed to the frontend development of the Enterprise Content Management System, handling both support and feature tasks (Angular)",
        "I also managed the DevOps aspects of this content management ecosystem, configuring and maintaining it (Shell script, Docker, Kubernetes)",
        "Additionally, I undertook various upgrade tasks, such as transitioning from PHP 8.1 to PHP 8.2",
      ],
    },
  ];
  return (
    <div className="experience-container">
      {experienceData.map((experience, index) => (
        <ExperienceItem key={index} {...experience} />
      ))}
    </div>
  );
};
