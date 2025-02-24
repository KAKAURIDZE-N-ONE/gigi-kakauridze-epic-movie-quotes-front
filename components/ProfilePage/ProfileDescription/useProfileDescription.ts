import { useAuthentication } from "@/hooks/useAuthentication";
import { useTranslation } from "react-i18next";

export default function useProfileDescription() {
  const { t } = useTranslation("profile-page");
  const { user } = useAuthentication();

  return { t, user };
}
