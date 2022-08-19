import React from "react";

const Header = ({ answer, correct }) => {
  const colorValue = `rgb(${answer})`;
  return (
    <div
      className="header"
      style={{ backgroundColor: correct ? colorValue : "" }}
    >
      <p>THE GREAT</p>
      <span className="color">{colorValue}</span>
      <p>GUESSING GAME</p>
    </div>
  );
};

export default Header;
