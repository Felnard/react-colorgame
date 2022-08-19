import React from "react";

const Button = ({ name, id, click }) => {
  return <input type="button" id={id} value={name} onClick={click} />;
};

export default Button;
