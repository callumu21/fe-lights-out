import "../styles/RandomBoardMenu.css";
import "../styles/NeonButton.css";
import { useState } from "react";
import GridSizeSelector from "./GridSizeSelector";
import RandomBoard from "./RandomBoard";

const RandomBoardMenu = () => {
  const [size, setSize] = useState(null);
  const [isInMenu, setIsInMenu] = useState(true);
  const [error, setError] = useState("");

  const gridSizes = [
    { gridSize: "Small", rows: 3 },
    { gridSize: "Medium", rows: 5 },
    { gridSize: "Large", rows: 7 },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    if (size) {
      setIsInMenu(false);
      setError("");
    } else {
      setError("Please select a grid size");
    }
  };

  return isInMenu ? (
    <form className="random-form" onSubmit={handleSubmit}>
      <div className="random-form__difficulty">
        {gridSizes.map(({ gridSize, rows }) => (
          <GridSizeSelector
            key={gridSize}
            gridSize={gridSize}
            rows={rows}
            setSize={setSize}
            size={size}
          />
        ))}
      </div>
      <button type="submit" className="random-form__submit-btn">
        Create Grid
      </button>
      <p className="random-form__error">{error}</p>
    </form>
  ) : (
    <RandomBoard size={size} setIsInMenu={setIsInMenu} setSize={setSize} />
  );
};

export default RandomBoardMenu;
