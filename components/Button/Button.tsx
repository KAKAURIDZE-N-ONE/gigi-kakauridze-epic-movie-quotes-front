import React from "react";
import { Props } from "./types";

const Button: React.FC<Props> = ({
  children,
  bg,
  color,
  width,
  height,
  border,
  hover,
  active,
}) => {
  return (
    <button
      style={{
        width: width ? `${width}rem` : "auto",
        height: height ? `${height}rem` : "auto",
      }}
      className={`
    ${bg ? bg : ""}
    ${color ? color : ""}
    ${border ? border : ""}
    ${hover ? hover : ""}
    ${active ? active : ""}
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
