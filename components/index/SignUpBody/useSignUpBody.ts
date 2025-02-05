import { SubmitHandler, useForm } from "react-hook-form";
import useSignUp from "./useSignUp";
import { ApiError } from "@/types/errors";
import { useDispatch } from "react-redux";
import { FormFieldsSignUp } from "@/types/auth";

export default function useSignUpBody() {
  const dispatch = useDispatch();

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
    onSubmit,
    register,
    handleSubmit,
    errors,
    serverErrors: apiError?.response?.data?.errors,
    mutate,
    isPending,
    dispatch,
  };
}
