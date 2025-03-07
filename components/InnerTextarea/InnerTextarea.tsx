import React from "react";
import { Props } from "./types";

const InnerTextarea: React.FC<Props> = ({
  children,
  error,
  lang,
  register,
  disabled = false,
  type,
}) => {
  return (
    <div className="relative -mb-[0.5rem]">
      {type === "edit" && (
        <label
          className="absolute left-4 top-5 -translate-y-1/2 text-gray"
          htmlFor={children}
        >
          {children}:
        </label>
      )}
      <textarea
        disabled={disabled}
        {...register}
        id={children}
        className={`${
          type === "edit" ? "pt-[1.8rem]" : ""
        } bg-darkerBlue border border-gray w-full rounded-[0.3rem] min-h-[5.375rem] pl-4 pt-[0.625rem] placeholder:text-white`}
        placeholder={type === "edit" ? "" : children}
      />
      {lang && (
        <label
          htmlFor={children}
          className="absolute right-4 top-5 -translate-y-1/2 text-gray"
        >
          {lang === "en" ? "Eng" : "ქარ"}
        </label>
      )}
      {error && (
        <p className="text-sm text-[#F04438] absolute -bottom-4">{error}</p>
      )}
    </div>
  );
};

export default InnerTextarea;
