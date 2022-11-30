import { useState } from "react";
import Menu from "./Menu";
import RandomBoardMenu from "./RandomBoardMenu";
import TutorialMenu from "./TutorialMenu";

const Game = ({ setIsOnHomeScreen }) => {
  const [isReady, setIsReady] = useState(false);
  const [isInTutorial, setIsInTutorial] = useState(false);

  return !isReady ? (
    <Menu
      setIsReady={setIsReady}
      setIsInTutorial={setIsInTutorial}
      setIsOnHomeScreen={setIsOnHomeScreen}
    />
  ) : isInTutorial ? (
    <TutorialMenu />
  ) : (
    <RandomBoardMenu />
  );
};

export default Game;
