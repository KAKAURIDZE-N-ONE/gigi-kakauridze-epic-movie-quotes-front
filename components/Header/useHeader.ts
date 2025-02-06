import { useAuthentication } from "@/hooks/useAuthentication";
import useLogOut from "@/hooks/useLogOut";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function useHeader() {
  const router = useRouter();
  const { t } = useTranslation("landing-page");
  const { isAuthenticated } = useAuthentication();

  const { logOut } = useLogOut();

  return { t, isAuthenticated, logOut, router };
}
