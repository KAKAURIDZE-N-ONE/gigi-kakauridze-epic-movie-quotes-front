import { useAuthentication } from "@/hooks/useAuthentication";
import useIsMounted from "@/hooks/useIsMounted";
import useLogOut from "@/hooks/useLogOut";
import {
  selectBurgerMenuIsOpen,
  updateBurgerMenuIsOpen,
} from "@/store/slices/modalSlice";
import { useAppSelector } from "@/store/store";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

export default function useHeader() {
  const router = useRouter();
  const mounted = useIsMounted();
  const dispatch = useDispatch();
  const { t } = useTranslation("landing-page");
  const { isAuthenticated } = useAuthentication();

  const { mutate: logOut } = useLogOut();

  const burgerMenuIsOpen = useAppSelector(selectBurgerMenuIsOpen);

  const isColored =
    router.pathname === "/" ||
    router.pathname === "/log-in" ||
    router.pathname === "/sign-up" ||
    router.pathname === "/forgot-password" ||
    router.pathname === "/reset-password";

  const isNewsFeedPage = router.pathname === "/news-feed";

  function toggleBurgerMenuIsOpen() {
    dispatch(updateBurgerMenuIsOpen(!burgerMenuIsOpen));
  }

  return {
    isColored,
    isNewsFeedPage,
    t,
    mounted,
    isAuthenticated,
    logOut,
    router,
    toggleBurgerMenuIsOpen,
    burgerMenuIsOpen,
    dispatch,
  };
}
