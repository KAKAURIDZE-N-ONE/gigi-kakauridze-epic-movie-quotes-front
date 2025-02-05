import React, { useState } from "react";
import ClosedEye from "@/svgs/ClosedEye";
import OpenEye from "@/svgs/OpenEye";
import ErrorMark from "@/svgs/ErrorMark";
import { Props } from "./types";

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    { children, autoComplete, error, serverError, type, placeholder, ...rest },
    ref
  ) => {
    const [passwordIsOpen, setPasswordIsOpen] = useState<boolean>(false);

    const hasError = error || serverError;
    return (
      <div className="flex flex-col gap-[0.375rem]">
        <label htmlFor={children} className="text-white">
          {children}
        </label>
        <div className="w-full relative">
          <input
            ref={ref}
            autoComplete={autoComplete || ""}
            type={
              type
                ? type === "password"
                  ? passwordIsOpen
                    ? "text"
                    : "password"
                  : type
                : "text"
            }
            className="placeholder:text-gray h-[2.375rem] rounded-[0.25rem]
          border border-white3 pl-3 pr-[4.2rem]
          focus:outline-none w-full bg-white2 text-black"
            id={children}
            placeholder={placeholder}
            {...rest}
          />
          {type === "password" && (
            <div
              className="absolute right-4 top-1/2
            -translate-y-1/2 cursor-pointer"
            >
              {passwordIsOpen ? (
                <div onClick={() => setPasswordIsOpen(false)}>
                  <ClosedEye />
                </div>
              ) : (
                <div onClick={() => setPasswordIsOpen(true)}>
                  <OpenEye />
                </div>
              )}
            </div>
          )}
          {hasError && (
            <div
              className={`absolute ${
                type === "password" ? "right-12" : "right-4"
              } top-1/2
            -translate-y-1/2 cursor-pointer`}
            >
              <ErrorMark />
            </div>
          )}
        </div>
        {hasError && (
          <p className="-mb-2 text-sm text-[#F04438]">{error || serverError}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input"; // Add a displayName for better debugging in React DevTools
export default Input;
