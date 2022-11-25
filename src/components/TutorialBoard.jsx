import React, { useState } from "react";
import "../styles/Board.css";
import hasWon from "../utils/hasWon";
import Cell from "./Cell";
import levels from "../levels.json";
import switchSurroundingLights from "../utils/lightChange";

const TutorialBoard = ({ level, setIsInMenu, setSize }) => {
  const grid = levels[level];

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
      <div className="board">
        {hasWon(board) ? (
          <div className="board--win">Congratulations!</div>
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
        Return to Level Select
      </button>
    </>
  );
};

export default TutorialBoard;
