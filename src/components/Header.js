import React from "react";

const Header = ({ answer }) => {
  const colorValue = `rgb(${answer})`;
  return (
    <div className="header">
      <p>THE GREAT</p>
      <span className="color">{colorValue}</span>
      <p>GUESSING GAME</p>
    </div>
  );
};

export default Header;
