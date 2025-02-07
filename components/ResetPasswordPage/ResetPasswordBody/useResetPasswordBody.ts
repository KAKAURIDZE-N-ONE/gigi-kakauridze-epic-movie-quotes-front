import { FormFieldResetPassword } from "@/types/auth";
import useResetPassword from "./useResetPassword";
import { SubmitHandler, useForm } from "react-hook-form";
import { ApiError } from "@/types/errors";
import { useRouter } from "next/router";
import { getCsrfCookie } from "@/services/apiAuth";
import { useTranslation } from "react-i18next";

export default function useResetPasswordBody() {
  const { t } = useTranslation("reset-password-modal");
  const { t: t2 } = useTranslation("errors");

  const { mutate, isPending, error } = useResetPassword();
  const router = useRouter();
  const { query } = router;

  const apiError = error as ApiError;

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFieldResetPassword>();

  const onSubmit: SubmitHandler<FormFieldResetPassword> = async (data) => {
    if (query?.token && query.email) {
      await getCsrfCookie();
      mutate({
        ...data,
        token: String(query.token),
        email: String(query.email),
      });
    }
  };

  return {
    t,
    t2,
    watch,
    router,
    mutate,
    onSubmit,
    isPending,
    errors,
    register,
    handleSubmit,
    serverErrors: apiError?.response?.data?.errors,
  };
}
