import React from "react";
import { Props } from "./types";

const FormLayout: React.FC<Props> = ({
  children,
  title,
  subtitle,
  onSubmit,
  actionBtn,
  link,
}) => {
  return (
    <div className="w-full max-w-[37.5625rem] bg-darkBlue py-[3.3125rem] px-[7rem] rounded-[0.625rem]">
      <div className=" w-[22.5rem]">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="font-medium text-[2rem] leading-[2.3rem]">{title}</h2>
          <h3 className="text-gray">{subtitle}</h3>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-5 mt-4">
          <div className="flex flex-col gap-4">{children}</div>

          {actionBtn}
        </form>
        {link && (
          <div className="flex items-center justify-center gap-1 mt-7">
            <p className="text-gray">{link.text}</p>
            <p
              onClick={link.action}
              className="text-blue underline cursor-pointer"
            >
              {link.name}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormLayout;
