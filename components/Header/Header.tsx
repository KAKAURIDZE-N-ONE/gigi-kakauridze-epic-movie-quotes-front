import React from "react";
import { Button } from "../Button";
import { LanguageSwitcher } from "../LanguageSwitcher";
import useHeader from "./useHeader";
import { updateOpenedModal } from "@/store/slices/modalSlice";

const Header: React.FC = () => {
  const { dispatch, t } = useHeader();

  return (
    <div className="fixed left-0 w-full top-4 lg:top-6 px-4 lg:px-[4.375rem] flex items-center justify-between z-50">
      <h3 className="font-medium text-skin cursor-pointer select-none">
        {t("header")}
      </h3>
      <div className="bg-red-200 flex items-center justify-center gap-2 lg:gap-4">
        <div className="hidden lg:inline-block">
          <LanguageSwitcher />
        </div>
        <div className="hidden lg:flex items-center justify-center gap-4">
          <Button
            clickFn={() => dispatch(updateOpenedModal("signUp"))}
            size="small"
            color="red"
          >
            {t("registration")}
          </Button>
          <Button
            clickFn={() => dispatch(updateOpenedModal("logIn"))}
            size="small"
            additionalClasses="bg-black text-white border-white"
          >
            {t("autorization")}
          </Button>
        </div>
        <div className="flex lg:hidden items-center justify-center gap-2">
          <Button
            clickFn={() => dispatch(updateOpenedModal("logIn"))}
            size="smaller"
            additionalClasses="bg-black text-white border-white"
          >
            {t("autorization")}
          </Button>
          <Button
            clickFn={() => dispatch(updateOpenedModal("signUp"))}
            size="smaller"
            color="red"
          >
            {t("registration")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
