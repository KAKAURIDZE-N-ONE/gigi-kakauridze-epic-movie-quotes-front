import React from "react";
import { Props } from "./types";

const Button: React.FC<Props> = ({
  children,
  additionalClasses,
  color,
  size,
  clickFn,
  type,
  disabled = false,
}) => {
  let addColors;
  if (color === "red")
    addColors = "active:bg-red3 text-white bg-red hover:bg-red2 border-red";

  let addSizes;
  if (size === "smaller") addSizes = "px-4 py-2 rounded-[0.25rem] text-sm";
  if (size === "small") addSizes = "px-7 py-2 rounded-[0.25rem]";
  if (size === "medium") addSizes = "px-5 py-3 rounded-[0.3125rem] text-xl";
  if (size === "normal") addSizes = "px-4 py-[0.625rem] rounded-[0.25rem]";

  return (
    <button
      disabled={disabled}
      type={type ? type : "button"}
      onClick={clickFn}
      className={`
    ${additionalClasses ? additionalClasses : ""}
    ${addColors ? addColors : ""}
    ${addSizes ? addSizes : ""}
    border 
    transition-all
    duration-300
  `}
    >
      {children}
    </button>
  );
};

export default Button;
