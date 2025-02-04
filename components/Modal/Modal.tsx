import React from "react";
import { createPortal } from "react-dom";
import { Props } from "./props";
import useModal from "./useModal";

const Modal: React.FC<Props> = ({ children, turnOfFn }) => {
  const { mounted } = useModal();

  if (!mounted) return null;
  return (
    <>
      {createPortal(
        <div
          onClick={turnOfFn}
          className="fixed left-0 top-0 w-full h-full z-[60] blurAnime "
        >
          <div className="fixed inset-0  backdrop-blur-[0.305rem] "></div>
          <div
            className="fixed top-0 left-0 w-full h-full
          bg-[#0000008A]  
          pointer-events-none"
          ></div>
          <div className="relative z-[62] h-full flex items-center justify-center w-full">
            <div onClick={(e) => e.stopPropagation()} className="text-white">
              {children}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Modal;
