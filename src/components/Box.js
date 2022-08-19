import React from "react";

const Box = ({ style, boxClick }) => {
  const colorValue = `rgb(${style})`;

  return (
    <div
      style={{ backgroundColor: colorValue }}
      className="colors"
      onClick={boxClick}
    >
      {style}
    </div>
  );
};

export default Box;
