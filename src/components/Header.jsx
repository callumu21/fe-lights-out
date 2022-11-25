import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <h1
        className="header__title App-orange"
        onClick={() => {
          window.location.reload();
        }}
      >
        Lights Out!
      </h1>
      ;
    </header>
  );
};

export default Header;
