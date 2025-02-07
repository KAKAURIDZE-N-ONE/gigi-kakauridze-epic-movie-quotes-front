import React from "react";
import { Props } from "./types";
import ArrowLeft from "@/svgs/ArrowLeft";
import XIcon from "@/svgs/XIcon";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { updateOpenedModal } from "@/store/slices/modalSlice";

const FormLayout: React.FC<Props> = ({
  children,
  title,
  name,
  subtitle,
  onSubmit,
  actionBtn,
  googleAuthBtn,
  link,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const needArrow =
    link.type === "forgotPassword" || link.type === "resetPassword";
  return (
    <div className="h-[100dvh] w-[100dvw] flex items-center justify-center lg:static lg:h-auto lg:w-full lg:max-w-[37.5625rem] bg-[#191725] lg:bg-darkBlue py-[3.3125rem] px-[2.125rem] lg:px-[7rem] rounded-[0.625rem] ">
      <div className="w-[22.5rem] relative">
        <div
          onClick={() => {
            router.push("/");
            dispatch(updateOpenedModal(null));
          }}
          className="-top-12 -right-0 lg:-top-7 lg:-right-20 absolute cursor-pointer"
        >
          <XIcon />
        </div>
        <div className="flex flex-col gap-3 text-center">
          <h2 className="font-medium text-[2rem] leading-[2.3rem]">{title}</h2>
          <h3 className="text-gray">{subtitle}</h3>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-5 mt-4">
          <div className="flex flex-col gap-4">{children}</div>
          <div className="w-full flex flex-col gap-5">
            {name === "log-in" ? (
              <>
                {actionBtn}
                {googleAuthBtn}
              </>
            ) : (
              <>
                {googleAuthBtn}
                {actionBtn}
              </>
            )}
          </div>
        </form>
        {link && (
          <div className="flex items-center justify-center gap-1 mt-7">
            <div
              onClick={() => {
                if (needArrow) {
                  link.action();
                } else return;
              }}
              className="flex items-center gap-2 cursor-pointer"
            >
              {needArrow && <ArrowLeft />}
              <p className="text-gray">{link.text}</p>
            </div>
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
