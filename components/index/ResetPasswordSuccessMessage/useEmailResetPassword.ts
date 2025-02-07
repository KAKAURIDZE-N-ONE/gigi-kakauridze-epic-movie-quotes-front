import { selectCurrentUserNotficationEmail } from "@/store/slices/modalSlice";
import { useAppSelector } from "@/store/store";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

export default function useEmailResetPassword() {
  const { t } = useTranslation("password-reset-message");

  const userEmail = useAppSelector(selectCurrentUserNotficationEmail);
  const router = useRouter();
  const dispatch = useDispatch();

  return { t, userEmail, dispatch, router };
}
