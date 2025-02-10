import React from "react";
import { Button } from "../Button";
import { LanguageSwitcher } from "../LanguageSwitcher";
import useHeader from "./useHeader";
import Link from "next/link";
import Bell from "@/svgs/Bell";
import { createPortal } from "react-dom";
import { BurgerMenu } from "../BurgerMenu";
import List from "@/svgs/List";
import Search from "@/svgs/Search";

const Header: React.FC = () => {
  const {
    t,
    isAuthenticated,
    logOut,
    router,
    toggleBurgerMenuIsOpen,
    burgerMenuIsOpen,
    mounted,
    isHomePage,
    isNewsFeedPage,
  } = useHeader();

  if (!mounted) return null;

  return (
    <>
      {createPortal(
        <BurgerMenu
          toggleBurgerMenuIsOpen={toggleBurgerMenuIsOpen}
          burgerMenuIsOpen={burgerMenuIsOpen}
        />,
        document.body
      )}
      {!isHomePage && <div className="h-[5.375rem]"></div>}
      <div
        className={`${
          !isHomePage ? "bg-normalBlue top-0 h-[5.375rem]" : "top-7"
        } flex fixed left-0 w-full   px-[2.1875rem] lg:px-[4.375rem] items-center justify-between z-50`}
      >
        {isHomePage ? (
          <h2 className="font-medium text-skin select-none">{t("header")}</h2>
        ) : (
          <h2 className="hidden lg:inline-block font-medium text-skin cursor-pointer select-none">
            {t("header")}
          </h2>
        )}

        {!isHomePage && (
          <div
            onClick={toggleBurgerMenuIsOpen}
            className="cursor-pointer inline-block lg:hidden"
          >
            <List />
          </div>
        )}

        <div className="bg-red-200 flex items-center justify-center gap-2 lg:gap-4">
          <div className="flex items-center gap-5 lg:gap-9">
            {isNewsFeedPage && (
              <div>
                <Search />
              </div>
            )}
            {isAuthenticated && (
              <div className="inline-block relative cursor-pointer">
                <div
                  className="absolute -top-2 -right-2 w-5 h-5 bg-red4 
                flex items-center justify-center rounded-full"
                >
                  <p className="font-medium text-white">3</p>
                </div>
                <Bell />
              </div>
            )}
            {isHomePage && (
              <div
                onClick={toggleBurgerMenuIsOpen}
                className="cursor-pointer inline-block lg:hidden"
              >
                <List />
              </div>
            )}
          </div>

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

          {isAuthenticated && (
            <div className="hidden lg:inline-block">
              <Button
                clickFn={logOut}
                size="small"
                additionalClasses="text-white border-white"
              >
                {t("log_out")}
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
