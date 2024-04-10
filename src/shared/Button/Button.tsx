import React from "react";
import "./Button.scss";

interface Button {
  name: string;
  isDisabled?: boolean;
  clickHandler?: () => void;
  type?: "button" | "submit" | "reset";
}
const Button: React.FC<Button> = ({ name, isDisabled, clickHandler, type }) => {
  const btnEnableDisable = !isDisabled ? "btn-enable" : "btn-disabled";
  return (
    <button
      className={`btn ${btnEnableDisable}`}
      onClick={clickHandler}
      type={type}
      disabled={isDisabled}
    >
      {name}
    </button>
  );
};

export default Button;
