import {
  selectOpenedModal,
  updateOpenedModal,
} from "@/store/slices/modalSlice";
import { useAppSelector } from "@/store/store";
import { FormValueEditUserName } from "@/types/user";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FormFieldResetPassword } from "@/types/auth";
import { getCsrfCookie } from "@/services/apiAuth";
import useChangeUsername from "../hooks/useChangeUsername";
import useChangePassword from "../hooks/useChangePassword";
import { useTranslation } from "react-i18next";

export default function useMobileProfilePage() {
  const { t } = useTranslation("profile-page");
  const [activeEdit, setActiveEdit] = useState<"username" | "password" | null>(
    null
  );
  const [formDataUsername, setFormDataUsername] =
    useState<FormValueEditUserName | null>(null);
  const [formDataPassword, setFormDataPassword] =
    useState<FormFieldResetPassword | null>(null);

  const openedModal = useAppSelector(selectOpenedModal);

  const dispatch = useDispatch();

  const { mutate: mutateUsername } = useChangeUsername({ setActiveEdit });
  const { mutate: mutatePassword } = useChangePassword({ setActiveEdit });

  function closeModal() {
    dispatch(updateOpenedModal(null));
  }

  const handleConfirmUsername = async () => {
    await getCsrfCookie();
    if (formDataUsername) {
      mutateUsername(formDataUsername);
    }

    closeModal();
  };

  const handleConfirmPassword = async () => {
    await getCsrfCookie();
    if (formDataPassword) {
      mutatePassword(formDataPassword);
    }

    closeModal();
  };

  const router = useRouter();

  return {
    setFormDataUsername,
    router,
    activeEdit,
    setActiveEdit,
    handleConfirmUsername,
    handleConfirmPassword,
    openedModal,
    setFormDataPassword,
    t,
  };
}
