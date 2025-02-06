import { SubmitHandler, useForm } from "react-hook-form";
import useLogIn from "./useLogIn";
import { useDispatch } from "react-redux";
import { FormFieldsLogIn } from "@/types/auth";
import { ApiError } from "@/types/errors";
import { useRouter } from "next/router";

export default function useLoginBody() {
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
    mutate(data);
  };

  const invalidCredentials = apiError?.response?.data?.message;

  return {
    router,
    onSubmit,
    register,
    errors,
    isPending,
    handleSubmit,
    serverErrors: apiError?.response?.data?.errors || {
      emailOrName: [invalidCredentials],
      password: [invalidCredentials],
    },
    dispatch,
  };
}
