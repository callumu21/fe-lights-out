import "../styles/Header.css";

const Header = ({ isOnHomeScreen }) => {
  const reloadGame = () => {
    window.location.reload();
  };

  return (
    <header className="header">
      {!isOnHomeScreen ? (
        <button onClick={reloadGame} className="header__home-btn">
          Return to Home Screen
        </button>
      ) : (
        <></>
      )}
      <h1 className="header__title App-orange" onClick={reloadGame}>
        Lights Out!
      </h1>
    </header>
  );
};

export default Header;
