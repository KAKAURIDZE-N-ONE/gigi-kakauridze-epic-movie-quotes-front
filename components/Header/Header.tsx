import React from "react";
import { Button } from "../Button";
import { LanguageSwitcher } from "../LanguageSwitcher";
import useHeader from "./useHeader";

const Header: React.FC = () => {
  const { t, isAuthenticated, logOut, router } = useHeader();

  return (
    <div className="fixed left-0 w-full top-4 lg:top-6 px-4 lg:px-[4.375rem] flex items-center justify-between z-50">
      <h3 className="font-medium text-skin cursor-pointer select-none">
        {t("header")}
      </h3>
      <div className="bg-red-200 flex items-center justify-center gap-2 lg:gap-4">
        <div className="hidden lg:inline-block">
          <LanguageSwitcher />
        </div>
        {!isAuthenticated && (
          <div className="hidden lg:flex items-center justify-center gap-4">
            <Button
              clickFn={() => router.push("sign-up")}
              size="small"
              color="red"
            >
              {t("registration")}
            </Button>
            <Button
              clickFn={() => router.push("log-in")}
              size="small"
              additionalClasses="bg-black text-white border-white"
            >
              {t("autorization")}
            </Button>
          </div>
        )}
        {!isAuthenticated && (
          <div className="flex lg:hidden items-center justify-center gap-2">
            <Button
              clickFn={() => router.push("log-in")}
              size="smaller"
              additionalClasses="bg-black text-white border-white"
            >
              {t("autorization")}
            </Button>
            <Button
              clickFn={() => router.push("sign-up")}
              size="smaller"
              color="red"
            >
              {t("registration")}
            </Button>
          </div>
        )}
        {isAuthenticated && (
          <>
            <div className="lg:hidden inline-block">
              <Button
                clickFn={logOut}
                size="smaller"
                additionalClasses="text-white border-white"
              >
                {t("log_out")}
              </Button>
            </div>
            <div className="hidden lg:inline-block">
              <Button
                clickFn={logOut}
                size="small"
                additionalClasses="text-white border-white"
              >
                {t("log_out")}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
