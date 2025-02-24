import { useAuthentication } from "@/hooks/useAuthentication";
import { FormValueEditUserName } from "@/types/user";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useTranslation } from "react-i18next";
import useChangeUsername from "../hooks/useChangeUsername";
import { getCsrfCookie } from "@/services/apiAuth";
import { FormFieldResetPassword } from "@/types/auth";
import useChangePassword from "../hooks/useChangePassword";

export default function useDesktopProfilePage() {
  const [activeEdit, setActiveEdit] = useState<"username" | "password" | null>(
    null
  );

  const { t } = useTranslation("sign-up-modal");
  const { t: t2 } = useTranslation("reset-password-modal");
  const { t: t3 } = useTranslation("errors");
  const { t: tPage } = useTranslation("profile-page");

  const { user } = useAuthentication();

  const { mutate: mutateUsername } = useChangeUsername({ setActiveEdit });
  const { mutate: mutatePassword } = useChangePassword({ setActiveEdit });

  const {
    register: registerUsername,
    handleSubmit: handleSubmitUsername,
    setFocus: setFocusUsername,
    reset: resetUsername,
    control: controlUsername,
  } = useForm<FormValueEditUserName>();

  const usernameValue = useWatch({
    control: controlUsername,
    name: "name",
  });

  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: errorsPassword },
    setFocus: setFocusPassword,
    reset: resetPassword,
    control: controlPassword,
  } = useForm<FormFieldResetPassword>();

  const passwordValue = useWatch({
    control: controlPassword,
    name: "password",
  });

  useEffect(() => {
    if (activeEdit === "username") {
      setFocusUsername("name");
    }
    if (activeEdit === "password") {
      setFocusPassword("password");
    }
  }, [activeEdit, setFocusPassword, setFocusUsername]);

  const onSubmitUsername = async (data: FormValueEditUserName) => {
    await getCsrfCookie();
    mutateUsername(data);
    resetUsername();
  };

  const onSubmitPassword = async (data: FormFieldResetPassword) => {
    await getCsrfCookie();
    mutatePassword(data);
    resetPassword();
  };

  return {
    user,
    activeEdit,
    setActiveEdit,
    registerUsername,
    handleSubmitUsername,
    onSubmitUsername,
    t3,
    t,
    t2,
    tPage,
    onSubmitPassword,
    errorsPassword,
    handleSubmitPassword,
    registerPassword,
    passwordValue,
    usernameValue,
  };
}
