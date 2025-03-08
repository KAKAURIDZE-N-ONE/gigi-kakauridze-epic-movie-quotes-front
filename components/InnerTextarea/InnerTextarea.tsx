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
  if (type === "edit")
    return (
      <div
        className={`relative  border border-gray rounded-[0.3rem] focus-within:border-white`}
      >
        <label htmlFor={children + lang} className="block w-full h-9"></label>
        <div className="-mb-[0.5rem]">
          {type === "edit" && (
            <label
              className="absolute left-4 top-5 -translate-y-1/2 text-gray z-10"
              htmlFor={children + lang}
            >
              {children}:
            </label>
          )}
          <textarea
            disabled={disabled}
            {...register}
            id={children + lang}
            className={`bg-darkerBlue w-full min-h-[4.375rem] pl-4 placeholder:text-white textarea 
        rounded-[0.3rem] outline-none`}
            placeholder={type === "edit" ? "" : children}
          />
          {lang && (
            <label
              htmlFor={children + lang}
              className="absolute right-4 top-5 -translate-y-1/2 text-gray z-10"
            >
              {lang === "en" ? "Eng" : "ქარ"}
            </label>
          )}
          {error && (
            <p className="text-sm text-[#F04438] absolute -bottom-6">{error}</p>
          )}
        </div>
      </div>
    );
  else
    return (
      <div className="relative -mb-[0.5rem]">
        <textarea
          disabled={disabled}
          {...register}
          id={children + lang}
          className={` bg-darkerBlue border border-gray w-full rounded-[0.3rem] min-h-[5.375rem] pl-4 
          pr-12  pt-[0.625rem] placeholder:text-white`}
          placeholder={children}
        />
        {lang && (
          <label
            htmlFor={children + lang}
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
