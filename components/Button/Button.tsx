import React from "react";
import { Props } from "./types";

const Button: React.FC<Props> = ({
  children,
  height,
  width,
  additionalClasses,
}) => {
  return (
    <button
      style={{
        width: width ? `${width}rem` : "auto",
        height: height ? `${height}rem` : "auto",
      }}
      className={`
    ${additionalClasses ? additionalClasses : ""}
    rounded-[0.25rem]
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
