import "../styles/Menu.css";
import "../styles/NeonButton.css";

const Menu = ({ setIsReady, setIsInTutorial, setIsOnHomeScreen }) => {
  return (
    <section className="menu">
      <button
        className="menu--btn"
        onClick={() => {
          setIsReady(true);
          setIsInTutorial(true);
          setIsOnHomeScreen(false);
        }}
      >
        Tutorial
      </button>
      <button
        className="menu--btn"
        onClick={() => {
          setIsReady(true);
          setIsInTutorial(false);
          setIsOnHomeScreen(false);
        }}
      >
        Random
      </button>
    </section>
  );
};

export default Menu;
