import React from "react";
import { Props } from "./types";

const Button: React.FC<Props> = ({
  children,
  additionalClasses,
  color,
  size,
  icon,
  clickFn,
  type = "button",
  disabled = false,
  form,
}) => {
  let addColors;
  if (color === "red")
    addColors = "active:bg-red3 text-white bg-red hover:bg-red2 border-red";

  let addSizes;
  if (size === "smallest") addSizes = "px-3 py-[0.45rem] rounded-[0.25rem]";
  if (size === "smaller") addSizes = "px-4 py-2 rounded-[0.25rem] text-sm";
  if (size === "small") addSizes = "px-7 py-2 rounded-[0.25rem]";
  if (size === "medium")
    addSizes = "px-5 py-[0.625rem] rounded-[0.3125rem] text-xl";
  if (size === "normal") addSizes = "px-4 py-[0.625rem] rounded-[0.25rem]";

  return (
    <button
      {...(form ? { form } : {})}
      disabled={disabled}
      type={type}
      onClick={clickFn}
      className={`
    ${additionalClasses ? additionalClasses : ""}
    ${addColors ? addColors : ""}
    ${addSizes ? addSizes : ""}
    border 
    transition-all
    duration-300
    text-nowrap
  `}
    >
      <span className="flex items-center justify-center gap-2">
        {icon && <span className="-translate-y-[0.08rem]">{icon}</span>}
        {children}
      </span>
    </button>
  );
};

export default Button;
