import React from "react";
import { Props } from "./types";
import Post from "@/components/icons/Post";
import { useDispatch } from "react-redux";
import XIcon from "@/components/icons/XIcon";
import { updateOpenedModal } from "@/store/slices/modalSlice";

const MessageLayout: React.FC<Props> = ({
  children,
  title,
  actionBtn,
  action,
}) => {
  const dispatch = useDispatch();
  return (
    <div
      className="bg-[#191725] lg:bg-darkBlue w-[100dvw] h-[100dvh] lg:h-auto lg:w-auto px-[2.125rem] lg:px-[5.5625rem] rounded-[0.625rem]  py-[3.7rem] 
    flex items-center justify-center lg:static"
    >
      <div
        className="bg-[linear-gradient(to_bottom_right,_#191725_5%,_#222030_100%)]
        lg:bg-[linear-gradient(to_bottom_right,_#191725_0%,_#222030_0%)]
       rounded-[0.625rem]  bg-darkBlue px-10 py-16 lg:px-0 lg:py-0 lg:bg-transparent max-w-[22.5rem] lg:w-[22.5rem] flex flex-col gap-6 text-center relative"
      >
        <div
          onClick={() => {
            dispatch(updateOpenedModal(null));
          }}
          className="top-5 right-5 lg:-top-8 lg:-right-16 absolute cursor-pointer"
        >
          <XIcon />
        </div>
        <div className="flex justify-center">
          <Post />
        </div>
        <h2 className="text-[2rem] font-medium">{title}</h2>
        <p className="leading-[1.5rem]">{children}</p>
        {actionBtn}
        {action && (
          <p className="text-gray cursor-pointer" onClick={action.fn}>
            {action.text}
          </p>
        )}
      </div>
    </div>
  );
};

export default MessageLayout;
