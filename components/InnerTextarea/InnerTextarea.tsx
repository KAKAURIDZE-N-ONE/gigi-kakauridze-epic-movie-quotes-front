import React from "react";
import { Props } from "./types";

const InnerTextarea: React.FC<Props> = ({
  children,
  error,
  lang,
  register,
}) => {
  return (
    <div className="relative">
      <textarea
        {...register}
        id={children}
        className="bg-darkerBlue border border-gray w-full rounded-[0.3rem] min-h-[5.375rem] pl-4 pt-[0.625rem] placeholder:text-white"
        placeholder={children}
      />
      {lang && (
        <label
          htmlFor={children}
          className="absolute right-4 top-5 -translate-y-1/2 text-gray"
        >
          {lang === "en" ? "Eng" : "ქარ"}
        </label>
      )}
      {error && <p className="text-sm text-[#F04438] -mb-1">{error}</p>}
    </div>
  );
};

export default InnerTextarea;
