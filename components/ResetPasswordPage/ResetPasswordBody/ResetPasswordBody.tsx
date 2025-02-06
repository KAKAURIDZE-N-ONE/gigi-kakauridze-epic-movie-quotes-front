import React from "react";
import useResetPasswordBody from "./useResetPasswordBody";
import { FormLayout } from "@/components/FormLayout";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

const ResetPasswordBody: React.FC = () => {
  const {
    watch,
    register,
    isPending,
    handleSubmit,
    onSubmit,
    errors,
    router,
    serverErrors,
  } = useResetPasswordBody();

  return (
    <FormLayout
      title="Create new password"
      subtitle="Your new password must be different from previous used passwords"
      onSubmit={handleSubmit(onSubmit)}
      actionBtn={
        <Button
          type="submit"
          size="small"
          clickFn={() => {}}
          disabled={isPending}
          color="red"
        >
          Reset password
        </Button>
      }
      link={{
        type: "resetPassword",
        text: "Back to log in",
        action: () => router.push("/log-in"),
      }}
    >
      <Input
        type="password"
        error={errors.password?.message}
        serverError={serverErrors?.email?.at(0)}
        placeholder="At least 8 & max.15 lower case characters"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
          },
          maxLength: {
            value: 15,
            message: "Password must be at most 15 characters long.",
          },
        })}
        autoComplete="new-password"
      >
        Password
      </Input>
      <Input
        type="password"
        error={errors.password_confirmation?.message}
        serverError={serverErrors?.password?.at(0)}
        placeholder="Confirm password"
        {...register("password_confirmation", {
          validate: (value) =>
            value === watch("password") || "Passwords do not match",
        })}
      >
        Confirm password
      </Input>
    </FormLayout>
  );
};

export default ResetPasswordBody;
