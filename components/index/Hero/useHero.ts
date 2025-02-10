import { useAuthentication } from "@/hooks/useAuthentication";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function useHero() {
  const { t } = useTranslation("landing-page");
  const router = useRouter();
  const { isAuthenticated } = useAuthentication();

  function getStarted() {
    isAuthenticated ? router.push("/news-feed") : router.push("/log-in");
  }

  return { t, getStarted };
}
