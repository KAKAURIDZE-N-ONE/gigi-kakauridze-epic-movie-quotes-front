import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { FormFieldsLogIn, FormFieldsSignUp } from "@/types/auth";
import { ApiError } from "@/types/errors";
import { useRouter } from "next/router";
import useSignUp from "./useSignUp";

export default function useSignUpBody() {
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
    mutate(data);
  };

  return {
    watch,
    router,
    onSubmit,
    register,
    errors,
    isPending,
    handleSubmit,
    serverErrors: apiError?.response?.data?.errors,
    dispatch,
  };
}
