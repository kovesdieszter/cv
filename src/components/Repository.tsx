import { RepositoryItem } from "./item/RepositoryItem";
export const Repository = () => {
  const repositoryData = [
    {
      title: "CV",
      link: "https://github.com/kovesdieszter/cv",
      description: "This project.",
      challenge:
        " I didn't use any pre-built UI solutions such as Chakra UI, Material UI, or Bootstrap. ",
      technology: ["React", "Typescript"],
    },
    {
      title: "Simple ToDo",
      link: "https://github.com/kovesdieszter/SimpleToDo",
      description: "This is a simple to-do application.",
      challenge:
        "I used typescript, material and AWS Amplify for the first time.",
      technology: ["React", "Typescript", "Material UI", "AWS Amplify"],
    },
  ];
  return (
    <div className="experience-container">
      {repositoryData.map((repository, index) => (
        <RepositoryItem key={index} {...repository} />
      ))}
    </div>
  );
};
