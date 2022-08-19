import React from "react";

const Button = ({ name, id, click, correct, answer }) => {
  const colorValue = `rgb(${answer})`;
  return (
    <input
      type="button"
      id={id}
      value={name}
      onClick={click}
      style={{ color: correct ? colorValue : "" }}
    />
  );
};

export default Button;
