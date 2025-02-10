import { changePassword, changeUsername } from "@/services/apiUser";
import {
  selectOpenedModal,
  updateOpenedModal,
} from "@/store/slices/modalSlice";
import { useAppSelector } from "@/store/store";
import { FormValueEditUserName } from "@/types/user";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FormFieldResetPassword } from "@/types/auth";
import { getCsrfCookie } from "@/services/apiAuth";

export default function useMobileProfilePage() {
  const [activeEdit, setActiveEdit] = useState<"username" | "password" | null>(
    null
  );
  const [formDataUsername, setFormDataUsername] =
    useState<FormValueEditUserName | null>(null);
  const [formDataPassword, setFormDataPassword] =
    useState<FormFieldResetPassword | null>(null);

  const openedModal = useAppSelector(selectOpenedModal);

  const dispatch = useDispatch();

  const { mutate: mutateUsername } = useMutation({
    mutationFn: changeUsername,
    onSuccess: (data) => {
      setActiveEdit(null);
      showSuccessToast(data.status);
    },
    onError: (error) => {
      showErrorToast(error.message);
    },
  });

  const { mutate: mutatePassword } = useMutation({
    mutationFn: changePassword,
    onSuccess: (data) => {
      setActiveEdit(null);
      showSuccessToast(data.status);
    },
    onError: (error) => {
      showErrorToast(error.message);
    },
  });

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
  };
}
