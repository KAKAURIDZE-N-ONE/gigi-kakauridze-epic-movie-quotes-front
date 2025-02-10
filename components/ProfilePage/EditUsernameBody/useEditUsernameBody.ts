import { FormValueEditUserName } from "@/types/user";
import { useForm } from "react-hook-form";
import { HookProps } from "./types";
import { useDispatch } from "react-redux";
import { updateOpenedModal } from "@/store/slices/modalSlice";
import { useTranslation } from "react-i18next";
import { useLayoutEffect } from "react";

export default function useEditUsernameBody({
  setFormDataUsername,
}: HookProps) {
  const dispatch = useDispatch();
  const { t } = useTranslation("sign-up-modal");
  const { t: t2 } = useTranslation("errors");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<FormValueEditUserName>();

  useLayoutEffect(() => {
    setFocus("name");
  }, [setFocus]);

  const onSubmit = async (data: FormValueEditUserName) => {
    setFormDataUsername(data);
    dispatch(updateOpenedModal("makeChangesUsername"));
  };

  return { register, handleSubmit, onSubmit, errors, t, t2 };
}
