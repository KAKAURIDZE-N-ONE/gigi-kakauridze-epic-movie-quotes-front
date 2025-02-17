import React from "react";
import { Button } from "../Button";
import { LanguageSwitcher } from "../LanguageSwitcher";
import useHeader from "./useHeader";
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
    isColored,
    isNewsFeedPage,
  } = useHeader();

  if (!mounted) return null;

  console.log(isColored);

  return (
    <>
      {createPortal(
        <BurgerMenu
          toggleBurgerMenuIsOpen={toggleBurgerMenuIsOpen}
          burgerMenuIsOpen={burgerMenuIsOpen}
        />,
        document.body
      )}

      {!isColored && <div className="h-[5.375rem]"></div>}
      <div
        className={`${
          !isColored ? "bg-normalBlue top-0 h-[5.375rem]" : "top-7"
        } flex fixed left-0 w-full   px-[2.1875rem] lg:px-[4.375rem] items-center justify-between z-50`}
      >
        {isColored ? (
          <h2 className="font-medium text-skin select-none">{t("header")}</h2>
        ) : (
          <h2 className="hidden lg:inline-block font-medium text-skin cursor-pointer select-none">
            {t("header")}
          </h2>
        )}

        {!isColored && (
          <div
            onClick={toggleBurgerMenuIsOpen}
            className="cursor-pointer inline-block lg:hidden"
          >
            <List />
          </div>
        )}

        <div className="bg-red-200 flex items-center justify-center gap-2 lg:gap-4">
          <div className="flex items-center gap-5 lg:gap-9">
            {!isColored && (
              <div className="translate-x-6 lg:translate-x-0 lg:inline-block">
                <LanguageSwitcher />
              </div>
            )}
            {isNewsFeedPage && (
              <div className="lg:mr-7">
                <Search />
              </div>
            )}
            {isAuthenticated && isColored && (
              <div className="inline-block relative cursor-pointer -mr-9 lg:mr-0 ">
                <div
                  className="absolute -top-2 -right-2 w-5 h-5 bg-red4 
                flex items-center justify-center rounded-full "
                >
                  <p className="font-medium text-white">3</p>
                </div>
                <Bell />
              </div>
            )}
            {isAuthenticated && !isColored && (
              <div className="inline-block relative cursor-pointer lg:mr-14 ">
                <div
                  className="absolute -top-2 -right-2 w-5 h-5 bg-red4 
                flex items-center justify-center rounded-full "
                >
                  <p className="font-medium text-white">3</p>
                </div>
                <Bell />
              </div>
            )}

            {isColored && (
              <>
                <div className="translate-x-6 lg:translate-x-0">
                  <LanguageSwitcher />
                </div>

                <div
                  onClick={toggleBurgerMenuIsOpen}
                  className="cursor-pointer inline-block lg:hidden"
                >
                  <List />
                </div>
              </>
            )}
          </div>

          {!isAuthenticated && (
            <div className="hidden lg:flex items-center justify-center gap-4">
              <Button
                clickFn={() => router.push("/sign-up")}
                size="small"
                color="red"
              >
                {t("registration")}
              </Button>
              <Button
                clickFn={() => router.push("/log-in")}
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
