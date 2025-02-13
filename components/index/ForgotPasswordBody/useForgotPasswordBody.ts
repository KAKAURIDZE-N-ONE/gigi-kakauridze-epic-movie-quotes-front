import { FormFieldForgotPassword } from "@/types/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import useForgotPassword from "./useForgotPassword";
import { ApiError } from "@/types/errors";
import { useRouter } from "next/router";
import { getCsrfCookie } from "@/services/apiAuth";
import { useTranslation } from "react-i18next";

export default function useForgotPasswordBody() {
  const { t } = useTranslation("forgot-password-modal");
  const { t: t2 } = useTranslation("errors");

  const router = useRouter();

  const { mutate, isPending, error } = useForgotPassword();

  const apiError = error as ApiError;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFieldForgotPassword>();

  const onSubmit: SubmitHandler<FormFieldForgotPassword> = async (data) => {
    await getCsrfCookie();
    mutate(data);
  };

  return {
    t,
    t2,
    register,
    handleSubmit,
    onSubmit,
    router,
    errors,
    mutate,
    isPending,
    serverErrors: apiError?.response?.data?.errors,
  };
}
