const hasWon = (board) => {
  return board.grid.every((row) => row.every((cell) => !cell));
};

export default hasWon;
