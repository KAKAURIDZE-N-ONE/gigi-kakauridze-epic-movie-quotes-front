import { selectCurrentUserNotficationEmail } from "@/store/slices/modalSlice";
import { useAppSelector } from "@/store/store";
import { useTranslation } from "react-i18next";

export default function useEmailVerifyMessage() {
  const { t } = useTranslation("verify-email-modal");
  const userEmail = useAppSelector(selectCurrentUserNotficationEmail);

  return { t, userEmail };
}
