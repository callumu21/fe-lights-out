import "../styles/Menu.css";

const Menu = ({ setIsReady, setIsInTutorial }) => {
  return (
    <section className="menu">
      <button
        className="menu--btn"
        onClick={() => {
          setIsReady(true);
          setIsInTutorial(true);
        }}
      >
        Tutorial
      </button>
      <button
        className="menu--btn"
        onClick={() => {
          setIsReady(true);
          setIsInTutorial(false);
        }}
      >
        Random
      </button>
    </section>
  );
};

export default Menu;
