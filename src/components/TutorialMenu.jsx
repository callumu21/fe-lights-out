import "../styles/TutorialMenu.css";
import TutorialBoard from "./TutorialBoard";
import { useState } from "react";

const TutorialMenu = () => {
  const [isInMenu, setIsInMenu] = useState(true);
  const [level, setLevel] = useState(null);
  const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return isInMenu ? (
    <ol className="tutorial-list">
      {levels.map((level) => (
        <li key={level}>
          <button
            key={level}
            className="menu--btn"
            onClick={() => {
              setLevel(level);
              setIsInMenu(false);
            }}
          >
            {level}
          </button>
        </li>
      ))}
    </ol>
  ) : (
    <TutorialBoard
      level={level}
      setIsInMenu={setIsInMenu}
      isInMenu={isInMenu}
    />
  );
};

export default TutorialMenu;
