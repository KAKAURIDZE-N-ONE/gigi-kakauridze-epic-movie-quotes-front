import { useAuthentication } from "@/hooks/useAuthentication";
import useLogOut from "@/hooks/useLogOut";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

export default function useBurgerMenu() {
  const { t } = useTranslation("landing-page");
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useAuthentication();
  const { logOut } = useLogOut();

  return { router, isAuthenticated, dispatch, t, user, logOut };
}
