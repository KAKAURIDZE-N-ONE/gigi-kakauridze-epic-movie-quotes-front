import React from "react";
import { Props } from "./types";
import XIcon from "@/svgs/XIcon";
import Link from "next/link";
import useDarkModalLayout from "./useDarkModalLayout";
import { Button } from "../Button";

const DarkModalLayout: React.FC<Props> = ({
  title,
  xBtnUrl,
  children,
  btnText,
  submitFn,
}) => {
  const { user } = useDarkModalLayout();

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-darkerBlue overflow-auto pb-8">
      <div
        className="top-0 left-0 w-full bg-darkerBlue z-50 sticky h-[5.75rem] flex items-center justify-between px-[2.1875rem]
       border-b border-b-[#EFEFEF33]"
      >
        <div className="w-4"></div>
        <h1 className="font-medium text-xl translate-y-1">{title}</h1>
        <Link href={xBtnUrl} className="translate-y-1">
          <XIcon />
        </Link>
      </div>
      <div className="flex items-center px-[2.1875rem] gap-4 mt-9">
        <div
          style={{
            backgroundImage: `url(${user?.avatar})`,
          }}
          className="bg-no-repeat bg-center bg-cover w-10 h-10 rounded-full"
        ></div>
        <h3 className="text-xl">{user?.name}</h3>
      </div>
      <form
        onSubmit={submitFn}
        className="flex flex-col gap-4 px-[2.1875rem] mt-8"
      >
        {children}
        <div className="flex flex-col mt-7">
          <Button size="medium" color="red" type="submit">
            {btnText}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DarkModalLayout;
