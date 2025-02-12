import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function useEmailVerifySuccessMessage() {
  const { t } = useTranslation("verify-email-success-modal");
  const router = useRouter();

  return { router, t };
}
