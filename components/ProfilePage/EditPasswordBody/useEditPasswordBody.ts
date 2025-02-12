import { FormFieldResetPassword } from "@/types/auth";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { HookProps } from "./types";
import { updateOpenedModal } from "@/store/slices/modalSlice";
import { useTranslation } from "react-i18next";
import { useLayoutEffect } from "react";

export default function useEditPasswordBody({
  setFormDataPassword,
}: HookProps) {
  const dispatch = useDispatch();
  const { t } = useTranslation("reset-password-modal");
  const { t: t2 } = useTranslation("errors");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    watch,
  } = useForm<FormFieldResetPassword>();

  useLayoutEffect(() => {
    setFocus("password");
  }, [setFocus]);

  const onSubmit = async (data: FormFieldResetPassword) => {
    setFormDataPassword(data);
    dispatch(updateOpenedModal("makeChangesPassword"));
  };

  return {
    t,
    t2,
    register,
    errors,
    handleSubmit,
    onSubmit,
    setFocus,
    watch,
  };
}
