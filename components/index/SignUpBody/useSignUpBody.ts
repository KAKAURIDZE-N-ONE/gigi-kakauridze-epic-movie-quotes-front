import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { FormFieldsSignUp } from "@/types/auth";
import { ApiError } from "@/types/errors";
import { useRouter } from "next/router";
import useSignUp from "./useSignUp";
import { getCsrfCookie, getGoogleVerifyUrl } from "@/services/apiAuth";
import { useTranslation } from "react-i18next";

export default function useSignUpBody() {
  const { t } = useTranslation("sign-up-modal");
  const { t: t2 } = useTranslation("errors");
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFieldsSignUp>();

  const { mutate, isPending, error } = useSignUp();

  const apiError = error as ApiError;

  const onSubmit: SubmitHandler<FormFieldsSignUp> = async (data) => {
    await getCsrfCookie();
    mutate(data);
  };

  async function navigateGoogleAuth() {
    const data = await getGoogleVerifyUrl();
    window.location.href = data.url;
  }

  return {
    t,
    t2,
    watch,
    router,
    onSubmit,
    register,
    errors,
    isPending,
    handleSubmit,
    serverErrors: apiError?.response?.data?.errors,
    dispatch,
    navigateGoogleAuth,
  };
}
