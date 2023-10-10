import "../style/Header.css";

export const Header = (props: { name: any }) => {
  const { name } = props;

  return (
    <header className="header">
      <h2>Curriculum Vitae of {name}</h2>
    </header>
  );
};
