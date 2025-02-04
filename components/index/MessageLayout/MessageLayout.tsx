import React from "react";
import { Props } from "./types";
import Post from "../svgs/Post";

const MessageLayout: React.FC<Props> = ({ children, title, actionBtn }) => {
  return (
    <div className="bg-darkBlue px-[5.5625rem] rounded-[0.625rem]  py-[3.7rem]">
      <div className="w-[22.5rem] flex flex-col gap-6 text-center">
        <div className="flex justify-center">
          <Post />
        </div>
        <h2 className="text-[2rem] font-medium">{title}</h2>
        <p className="leading-[1.5rem]">{children}</p>
        {actionBtn}
      </div>
    </div>
  );
};

export default MessageLayout;
