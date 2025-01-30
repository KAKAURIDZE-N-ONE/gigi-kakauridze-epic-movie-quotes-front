import React from "react";
import { Button } from "../Button";
import { useTranslation } from "next-i18next";
import { LanguageSwitcher } from "../LanguageSwitcher";

const Header: React.FC = () => {
  const { t } = useTranslation("landingPage");

  return (
    <div className="fixed left-0 w-full top-6 px-[4.375rem] flex items-center justify-between z-50">
      <h3 className="font-medium text-skin cursor-pointer select-none">
        MOVIE QUOTES
      </h3>
      <div className="flex items-center justify-center gap-4 bg-red-200">
        <LanguageSwitcher />
        <Button
          height={2.375}
          width={6.8125}
          additionalClasses="active:bg-red3 text-white bg-red hover:bg-red2 border-red"
        >
          Sign Up
        </Button>
        <Button
          height={2.375}
          width={6}
          additionalClasses="bg-black text-white border-white"
        >
          Log in
        </Button>
      </div>
    </div>
  );
};

export default Header;
