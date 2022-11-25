import React from "react";
import "../styles/Cell.css";

const Cell = ({ y, x, isOn, switchSurroundingLights, setBoard }) => {
  const handleClick = () => {
    switchSurroundingLights(y, x, setBoard);
  };

  return (
    <button
      className={isOn ? "cell--light-on" : "cell--light-off"}
      onClick={handleClick}
    ></button>
  );
};

export default Cell;
