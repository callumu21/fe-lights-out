import React, { useState } from "react";
import "../styles/Board.css";
import "../styles/NeonButton.css";
import createGrid from "../utils/createGrid";
import hasWon from "../utils/hasWon";
import Cell from "./Cell";
import switchSurroundingLights from "../utils/lightChange";

function RandomBoard({ size, setIsInMenu, setSize }) {
  const grid = createGrid(size, 0.25);

  const [board, setBoard] = useState({ grid });

  const gridDisplay = board.grid.map(function (row, rowIndex) {
    return (
      <div key={rowIndex}>
        {row.map((col, colIndex) => (
          <Cell
            key={[rowIndex, colIndex].join("")}
            x={colIndex}
            y={rowIndex}
            isOn={board.grid[rowIndex][colIndex]}
            switchSurroundingLights={switchSurroundingLights}
            setBoard={setBoard}
          />
        ))}
      </div>
    );
  });

  return (
    <>
      <div className={hasWon(board) ? "board--win" : "board"}>
        {hasWon(board) ? (
          <div className="board--win-message">Congratulations!</div>
        ) : (
          gridDisplay
        )}
      </div>
      <button
        className="board--btn"
        onClick={() => {
          setIsInMenu(true);
          setSize(null);
        }}
      >
        Return to Grid Select
      </button>
    </>
  );
}

export default RandomBoard;
