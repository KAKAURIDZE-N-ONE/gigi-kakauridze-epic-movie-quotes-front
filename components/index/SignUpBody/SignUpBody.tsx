import { Button } from "@/components/Button";
import { FormLayout } from "@/components/FormLayout";
import { Input } from "@/components/Input";
import React from "react";
import useSignUpBody from "./useSignUpBody";
import { EMAIL_PATTERN_VALUE } from "@/config/regex";
import Google from "@/components/icons/Google";

const SignUpBody: React.FC = () => {
  const {
    t,
    t2,
    watch,
    router,
    onSubmit,
    register,
    handleSubmit,
    isPending,
    serverErrors,
    errors,
    navigateGoogleAuth,
  } = useSignUpBody();

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
          {t("sign_up")}
        </Button>
      }
      googleAuthBtn={
        <Button
          icon={<Google />}
          type="button"
          size="small"
          clickFn={() => {
            navigateGoogleAuth();
          }}
          disabled={isPending}
        >
          {t("sign_up_google")}
        </Button>
      }
      link={{
        text: t("link_text"),
        name: t("link_name"),
        action: () => router.push("/log-in"),
      }}
    >
      <Input
        error={errors.name?.message}
        serverError={serverErrors?.name
          ?.at(0)
          ?.replace("name", t("name_label"))}
        placeholder={t("name_placeholder")}
        {...register("name", {
          required: t("name_label") + " " + t2("required"),
          minLength: {
            value: 3,
            message: t2("min_length") + "3.",
          },
          maxLength: {
            value: 15,
            message: t2("max_length") + "15.",
          },
          pattern: {
            value: /^[a-z0-9ა-ჰ]+$/,
            message: t2("only_lower_case"),
          },
        })}
      >
        {t("name_label")}
      </Input>
      <Input
        error={errors.email?.message}
        serverError={serverErrors?.email
          ?.at(0)
          ?.replace("email", t("email_label"))}
        placeholder={t("email_placeholder")}
        {...register("email", {
          required: t("email_label") + " " + t2("required"),
          pattern: {
            value: EMAIL_PATTERN_VALUE,
            message: t2("invalid_email"),
          },
        })}
      >
        {t("email_label")}
      </Input>
      <Input
        type="password"
        error={errors.password?.message}
        serverError={serverErrors?.password?.at(0)}
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

export default SignUpBody;
