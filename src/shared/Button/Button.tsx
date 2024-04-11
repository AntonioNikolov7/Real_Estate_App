import React from "react";
import "./Button.scss";

interface Button {
  name: string;
  isDisabled?: boolean;
  isForm?: boolean;
  clickHandler?: () => void;
  type?: "button" | "submit" | "reset";
}
const Button: React.FC<Button> = ({
  name,
  isDisabled,
  clickHandler,
  type,
  isForm,
}) => {
  const btnEnableDisable = !isDisabled ? "btn-enable" : "btn-disabled";
  const formClass = isForm ? "-form" : "";
  const scssClass = `${btnEnableDisable}${formClass}`;
  console.log(scssClass);
  return (
    <button
      className={`btn ${scssClass}`}
      onClick={clickHandler}
      type={type}
      disabled={isDisabled}
    >
      {name}
    </button>
  );
};

export default Button;
