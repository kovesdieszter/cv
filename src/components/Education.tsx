import { EducationItem } from "./item/EducationItem";

export const Education = () => {
  const educationData = [
    {
      type: "Bootcamp",
      school: "Codecool",
      certificate: "Full-stack developer",
      years: "2021 - 2022",
    },
    {
      type: "University",
      school: "Eötvös Loránd University",
      certificate: "Earth Scientist (specialized for Meteorology)",
      years: "2018 - 2021",
    },
    {
      type: "University",
      school: "University of Pécs Medical School",
      certificate: "Doctor of Medicine student",
      years: "2015 - 2018",
    },
    {
      type: "Secondary school",
      school: "Gödöllői Református Líceum Gimnázium",
      certificate: "High school diploma",
      years: "2009 - 2015",
    },
  ];

  return (
    <div className="education-container">
      {educationData.map((education, index) => (
        <EducationItem key={index} {...education} />
      ))}
    </div>
  );
};
