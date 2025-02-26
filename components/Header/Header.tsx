import { Button } from "../Button";
import { LanguageSwitcher } from "../LanguageSwitcher";
import useHeader from "./useHeader";
import { createPortal } from "react-dom";
import { BurgerMenu } from "../BurgerMenu";
import List from "@/components/icons/List";
import Search from "@/components/icons/Search";
import Notifications from "../Notifications/Notifications";

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

  return (
    <>
      {createPortal(
        <BurgerMenu
          toggleBurgerMenuIsOpen={toggleBurgerMenuIsOpen}
          burgerMenuIsOpen={burgerMenuIsOpen}
        />,
        document.body
      )}
      <div
        className={`${
          !isColored ? "bg-normalBlue top-0 h-[5.375rem]" : "top-7 "
        } flex fixed left-0 w-full  px-[2.1875rem] lg:px-[4.375rem] items-center justify-between z-[70]`}
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
              <div className="lg:translate-x-0 lg:inline-block">
                <LanguageSwitcher size="small" />
              </div>
            )}
            {isNewsFeedPage && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="mr-1 cursor-pointer lg:hidden"
              >
                <Search />
              </div>
            )}

            {isAuthenticated && !isColored && <Notifications />}

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
                additionalClasses="bg-black text-white border-white hover:bg-white hover:text-black"
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
                additionalClasses="text-white border-white hover:bg-white hover:text-darkerBlue"
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
