import React from "react";
import { Props } from "./types";

const InnerInput: React.FC<Props> = ({
  children,
  lang,
  error,
  register,
  type,
  pl,
}) => {
  return (
    <div className="relative">
      {type === "edit" && (
        <label className="absolute top-3 left-4 text-gray" htmlFor={children}>
          {children}:
        </label>
      )}
      <input
        {...register}
        id={children}
        type="text"
        placeholder={type !== "edit" ? children : ""}
        className={`bg-darkerBlue border border-gray w-full rounded-[0.3rem] h-12 pl-4 
        placeholder:text-white ${pl && type === "edit" ? pl : ""}`}
      />
      {lang && (
        <label htmlFor={children} className="absolute right-4 top-3 text-gray">
          {lang === "en" ? "Eng" : "ქარ"}
        </label>
      )}
      {error && <p className="text-sm text-[#F04438] mt-1 -mb-1">{error}</p>}
    </div>
  );
};

export default InnerInput;
