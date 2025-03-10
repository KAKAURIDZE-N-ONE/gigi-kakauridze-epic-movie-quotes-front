import { Button } from "../Button";
import { LanguageSwitcher } from "../LanguageSwitcher";
import useHeader from "./useHeader";
import { createPortal } from "react-dom";
import { BurgerMenu } from "../BurgerMenu";
import List from "@/components/icons/List";
import Search from "@/components/icons/Search";
import Notifications from "../Notifications/Notifications";
import { updateSearchIsOpen } from "@/store/slices/newsFeedSlice";

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
    dispatch,
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
        } flex fixed left-0 w-full ${
          isColored ? "px-[1.7rem]" : "px-[2.1875rem]"
        } lg:px-[4.375rem] items-center justify-between z-[70]`}
      >
        {isColored ? (
          <h2 className="font-medium text-skin select-none text-sm">
            {t("header")}
          </h2>
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
                onClick={() => dispatch(updateSearchIsOpen(true))}
                className="mr-1 lg:hidden cursor-pointer"
              >
                <Search />
              </div>
            )}

            {isAuthenticated && !isColored && <Notifications />}

            {isColored && (
              <>
                <div
                  className="
                 lg:-translate-x-6 w-12 -translate-x-3"
                >
                  <LanguageSwitcher />
                </div>

                <div className="cursor-pointer lg:hidden flex items-center gap-2 ">
                  <Button
                    clickFn={() => {
                      router.push("/log-in");
                    }}
                    size="smaller"
                    color="red"
                    additionalClasses="w-full px-[0.5rem] py-[0.4rem] text-[0.7rem]"
                  >
                    {t("autorization")}
                  </Button>
                  <Button
                    clickFn={() => {
                      router.push("/sign-up");
                    }}
                    size="smaller"
                    additionalClasses="w-full bg-black text-white border-white 
                     px-[0.5rem]  py-[0.4rem]  text-[0.7rem]"
                  >
                    {t("registration")}
                  </Button>
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
