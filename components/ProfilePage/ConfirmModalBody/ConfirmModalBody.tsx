import React from "react";
import { Props } from "./types";
import { Button } from "@/components/Button";
import useConfirmModalBody from "./useConfirmModalBody";

const ConfirmModalBody: React.FC<Props> = ({ children, onConfirm }) => {
  const { closeModal, t } = useConfirmModalBody();

  return (
    <div
      className="bg-[linear-gradient(to_bottom_right,_#191725_5%,_#222030_100%)]
    text-white  min-w-[22.5rem] max-w-[22.5rem] rounded-[0.625rem]"
    >
      <div className="flex flex-col">
        <p className="text-center pt-[4rem] pb-[2.6rem]">{children}</p>
        <div className="border-b border-b-white2 opacity-20"></div>
      </div>
      <div className="flex max- items-center justify-between p-5">
        <button className="text-white2" onClick={closeModal}>
          {t("cancell")}
        </button>
        <Button
          clickFn={() => {
            onConfirm();
          }}
          size="smaller"
          color="red"
        >
          {t("confirm")}
        </Button>
      </div>
    </div>
  );
};

export default ConfirmModalBody;
