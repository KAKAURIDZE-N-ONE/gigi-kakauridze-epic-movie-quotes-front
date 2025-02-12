import { useAuthentication } from "@/hooks/useAuthentication";
import useLogOut from "@/hooks/useLogOut";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function useBurgerMenu() {
  const { t } = useTranslation("landing-page");
  const router = useRouter();
  const { isAuthenticated, user } = useAuthentication();
  const { mutate: logOut } = useLogOut();

  return { router, isAuthenticated, t, user, logOut };
}
