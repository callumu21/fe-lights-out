const createGrid = (size, chanceLightStartsOn) => {
  const grid = Array.from({ length: size }).map(
    (row) =>
      (row = Array.from({ length: size }).map(
        (cell) => (cell = Math.random() < chanceLightStartsOn)
      ))
  );
  return grid;
};

export default createGrid;
