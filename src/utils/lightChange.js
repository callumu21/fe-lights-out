const switchLight = (y, x, setBoard) => {
  setBoard((currSt) => ({
    ...currSt,
    grid: currSt.grid.map((row, rowIndex) =>
      rowIndex === y
        ? row.map((col, colIndex) => (colIndex === x ? !col : col))
        : row
    ),
  }));
};

const switchSurroundingLights = (y, x, setBoard) => {
  switchLight(y, x, setBoard);
  switchLight(y, x + 1, setBoard);
  switchLight(y, x - 1, setBoard);
  switchLight(y + 1, x, setBoard);
  switchLight(y - 1, x, setBoard);
};

export default switchSurroundingLights;
