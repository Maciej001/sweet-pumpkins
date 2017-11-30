import React from "react";

const Button = ({ onClick, children, isActive }) => {
  const buttonClass = isActive ? "button" : "button button-inactive";
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
