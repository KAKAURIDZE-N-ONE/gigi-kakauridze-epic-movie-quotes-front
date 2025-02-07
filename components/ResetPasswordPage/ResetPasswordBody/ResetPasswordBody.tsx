import React from "react";
import useResetPasswordBody from "./useResetPasswordBody";
import { FormLayout } from "@/components/FormLayout";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

const ResetPasswordBody: React.FC = () => {
  const {
    t,
    t2,
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
      title={t("title")}
      subtitle={t("sub_title")}
      onSubmit={handleSubmit(onSubmit)}
      actionBtn={
        <Button
          type="submit"
          size="small"
          clickFn={() => {}}
          disabled={isPending}
          color="red"
        >
          {t("reset_password")}
        </Button>
      }
      link={{
        type: "resetPassword",
        text: t("link_text"),
        action: () => router.push("/log-in"),
      }}
    >
      <Input
        type="password"
        error={errors.password?.message}
        serverError={serverErrors?.email?.at(0)}
        placeholder={t("password_placeholder")}
        {...register("password", {
          required: t("password_label") + " " + t2("required"),
          minLength: {
            value: 8,
            message: t2("min_length") + "8.",
          },
          maxLength: {
            value: 15,
            message: t2("max_length") + "15.",
          },
        })}
        autoComplete="new-password"
      >
        {t("password_label")}
      </Input>
      <Input
        type="password"
        error={errors.password_confirmation?.message}
        serverError={serverErrors?.password?.at(0)}
        placeholder={t("confirm_password_placeholder")}
        {...register("password_confirmation", {
          validate: (value) =>
            value === watch("password") || t2("password_not_match"),
        })}
      >
        {t("confirm_password_label")}
      </Input>
    </FormLayout>
  );
};

export default ResetPasswordBody;
