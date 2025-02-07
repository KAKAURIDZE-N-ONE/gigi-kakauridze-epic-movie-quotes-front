import React from "react";
import { FormLayout } from "../../FormLayout";
import { Button } from "@/components/Button";
import useLoginBody from "./useLoginBody";
import { Input } from "@/components/Input";
import Google from "@/svgs/Google";

const LogInBody: React.FC = () => {
  const {
    t,
    t2,
    navigateGoogleAuth,
    router,
    onSubmit,
    register,
    handleSubmit,
    isPending,
    serverErrors,
    errors,
  } = useLoginBody();

  return (
    <FormLayout
      title={t("title")}
      subtitle={t("sub_title")}
      onSubmit={handleSubmit(onSubmit)}
      name="log-in"
      actionBtn={
        <Button
          type="submit"
          size="small"
          clickFn={() => {}}
          disabled={isPending}
          color="red"
        >
          {t("sign_in")}
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
          {t("sign_in_google")}
        </Button>
      }
      link={{
        text: t("link_text"),
        name: t("link_name"),
        action: () => router.push("/sign-up"),
      }}
    >
      <Input
        error={errors.emailOrName?.message}
        serverError={serverErrors?.emailOrName?.at(0)}
        placeholder={t("email_placeholder")}
        {...register("emailOrName", {
          required: t("email_label") + " " + t2("required"),
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
        })}
      >
        {t("password_label")}
      </Input>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <input
            className="rounded w-5 h-4"
            id="remember"
            {...register("remember")}
            type="checkbox"
          />
          <label htmlFor="remember">{t("remember_me")}</label>
        </div>
        <p
          onClick={() => router.push("/forgot-password")}
          className="text-blue underline cursor-pointer"
        >
          {t("forgot_password")}
        </p>
      </div>
    </FormLayout>
  );
};

export default LogInBody;
