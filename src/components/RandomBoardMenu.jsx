import "../styles/RandomBoardMenu.css";
import { useState } from "react";
import GridSizeSelector from "./GridSizeSelector";
import RandomBoard from "./RandomBoard";

const RandomBoardMenu = () => {
  const [size, setSize] = useState(null);
  const [isInMenu, setIsInMenu] = useState(true);

  const gridSizes = [
    { size: "Small", rows: 3 },
    { size: "Medium", rows: 5 },
    { size: "Large", rows: 7 },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(size);
    if (size) {
      setIsInMenu(false);
    }
  };

  return isInMenu ? (
    <form className="random-form" onSubmit={handleSubmit}>
      <div className="random-form__difficulty">
        {gridSizes.map(({ size, rows }) => (
          <GridSizeSelector
            gridSize={size}
            rows={rows}
            key={size}
            setSize={setSize}
          />
        ))}
      </div>
      <button type="submit" className="random-form__submit-btn">
        Create Grid
      </button>
    </form>
  ) : (
    <RandomBoard size={size} setIsInMenu={setIsInMenu} setSize={setSize} />
  );
};

export default RandomBoardMenu;
