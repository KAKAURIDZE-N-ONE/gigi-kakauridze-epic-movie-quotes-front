import { SubmitHandler, useForm } from "react-hook-form";
import useLogIn from "./useLogIn";
import { useDispatch } from "react-redux";
import { FormFieldsLogIn } from "@/types/auth";
import { ApiError } from "@/types/errors";
import { useRouter } from "next/router";
import { getCsrfCookie, getGoogleVerifyUrl } from "@/services/apiAuth";
import { useTranslation } from "react-i18next";

export default function useLoginBody() {
  const { t } = useTranslation("log-in-modal");
  const { t: t2 } = useTranslation("errors");
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFieldsLogIn>();

  const { mutate, isPending, error } = useLogIn();

  const apiError = error as ApiError;

  const onSubmit: SubmitHandler<FormFieldsLogIn> = async (data) => {
    await getCsrfCookie();
    mutate(data);
  };

  async function navigateGoogleAuth() {
    const data = await getGoogleVerifyUrl();
    window.location.href = data.url;
  }

  const invalidCredentials = apiError?.response?.data?.message;

  return {
    t,
    t2,
    navigateGoogleAuth,
    router,
    onSubmit,
    register,
    errors,
    isPending,
    handleSubmit,
    serverErrors: apiError?.response?.data?.errors || {
      emailOrName: [invalidCredentials ? t2("invalid_credentials") : ""],
      password: [invalidCredentials ? t2("invalid_credentials") : ""],
    },
    dispatch,
  };
}
