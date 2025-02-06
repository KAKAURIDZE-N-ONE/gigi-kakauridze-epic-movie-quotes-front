import { FormFieldForgotPassword } from "@/types/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import useForgotPassword from "./useForgotPassword";
import { ApiError } from "@/types/errors";
import { useRouter } from "next/router";

export default function useForgotPasswordBody() {
  const router = useRouter();

  const { mutate, isPending, error } = useForgotPassword();

  const apiError = error as ApiError;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFieldForgotPassword>();

  const onSubmit: SubmitHandler<FormFieldForgotPassword> = async (data) => {
    mutate(data);
  };

  return {
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
