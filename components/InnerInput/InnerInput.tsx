import React from "react";
import { Props } from "./types";

const InnerInput: React.FC<Props> = ({ children, lang, error, ...rest }) => {
  return (
    <div className="relative">
      <input
        {...rest}
        id={children}
        type="text"
        placeholder={children}
        className="bg-darkerBlue border border-gray w-full rounded-[0.3rem] h-12 pl-4 
        placeholder:text-white"
      />
      {lang && (
        <label htmlFor={children} className="absolute right-4 top-3 text-gray">
          {lang}
        </label>
      )}
      {error && <p className="text-sm text-[#F04438] mt-1 -mb-1">{error}</p>}
    </div>
  );
};

export default InnerInput;
