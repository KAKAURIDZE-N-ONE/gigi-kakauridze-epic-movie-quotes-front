import { Props } from "./types";
import { Button } from "../Button";
import useBurgerMenu from "./useBurgerMenu";
import XIcon from "@/svgs/XIcon";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { InnerNavigation } from "../InnerNavigation";

const BurgerMenu: React.FC<Props> = ({
  toggleBurgerMenuIsOpen,
  burgerMenuIsOpen,
}) => {
  const { router, isAuthenticated, t, user, logOut } = useBurgerMenu();
  return (
    <div>
      <div
        onClick={() => toggleBurgerMenuIsOpen()}
        className={`  
        ${
          burgerMenuIsOpen
            ? "bg-black opacity-40"
            : "bg-transparent pointer-events-none"
        }
        z-[150] fixed top-0 h-full left-0 w-full transition-all duration-300`}
      ></div>
      <div
        className={`
        ${!burgerMenuIsOpen ? "-translate-x-full" : "-translate-x-0"}
        z-[200] h-[100dvh] bg-darkerBlue w-[80dvw] fixed left-0 top-0 
        transition-all duration-300 ease-in-out 
        `}
      >
        <div className="flex justify-center h-full w-full relative">
          <div
            onClick={toggleBurgerMenuIsOpen}
            className="absolute right-8 top-8 cursor-pointer"
          >
            <XIcon />
          </div>
          {isAuthenticated && (
            <div className="flex flex-col pb-10 w-full">
              {user && (
                <div className="py-[2.5rem] px-[2.8125rem] ">
                  <InnerNavigation user={user} />
                </div>
              )}
              <div className=" w-20 h-[2rem] ml-32">
                <LanguageSwitcher />
              </div>
              <div className="w-full flex flex-col mt-auto px-8">
                <Button
                  clickFn={() => {
                    toggleBurgerMenuIsOpen();
                    router.push("/");
                    logOut();
                  }}
                  size="small"
                  color="red"
                >
                  {t("log_out")}
                </Button>
              </div>
            </div>
          )}
          {!isAuthenticated && (
            <div className="flex flex-col lg:hidden items-center justify-center gap-2 ">
              <Button
                clickFn={() => {
                  toggleBurgerMenuIsOpen();
                  router.push("/log-in");
                }}
                size="small"
                color="red"
                additionalClasses="w-full"
              >
                {t("autorization")}
              </Button>
              <Button
                clickFn={() => {
                  toggleBurgerMenuIsOpen();
                  router.push("/sign-up");
                }}
                size="small"
                additionalClasses="w-full bg-black text-white border-white"
              >
                {t("registration")}
              </Button>
              <div className="translate-y-2">
                <LanguageSwitcher />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
