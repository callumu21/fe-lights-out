import { useState } from "react";

const GridSizeSelector = ({ gridSize, rows, setSize }) => {
  const [selectedStatus, setSelectedStatus] = useState("unchecked");

  return (
    <label className={`random-form__difficulty-label--${selectedStatus}`}>
      {gridSize}
      <input
        type="checkbox"
        className="random-form__checkbox--hidden"
        onChange={() => {
          setSelectedStatus((currStatus) => {
            return currStatus === "unchecked" ? "checked" : "unchecked";
          });
          setSize((currSize) => {
            return currSize === null ? rows : null;
          });
        }}
      />
    </label>
  );
};

export default GridSizeSelector;
