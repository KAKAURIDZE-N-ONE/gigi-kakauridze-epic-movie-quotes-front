import { SubmitHandler, useForm } from "react-hook-form";
import { FormFields } from "./types";
import { ApiError } from "next/dist/server/api-utils";
import useLogIn from "./useLogIn";
import { useDispatch } from "react-redux";
import { FormFieldsLogIn } from "@/types/auth";

export default function useLoginBody() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const { mutate, isPending, error } = useLogIn();

  const apiError = error as ApiError;

  const onSubmit: SubmitHandler<FormFieldsLogIn> = async (data) => {
    mutate(data);
  };

  return {
    onSubmit,
    register,
    errors,
    isPending,
    handleSubmit,
    serverErrors: apiError?.message,
    dispatch,
  };
}
