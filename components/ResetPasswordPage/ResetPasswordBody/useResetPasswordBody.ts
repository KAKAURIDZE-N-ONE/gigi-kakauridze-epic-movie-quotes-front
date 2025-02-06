import { FormFieldResetPassword } from "@/types/auth";
import useResetPassword from "./useResetPassword";
import { SubmitHandler, useForm } from "react-hook-form";
import { ApiError } from "@/types/errors";
import { useRouter } from "next/router";

export default function useResetPasswordBody() {
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
      mutate({
        ...data,
        token: String(query.token),
        email: String(query.email),
      });
    }
  };

  return {
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
