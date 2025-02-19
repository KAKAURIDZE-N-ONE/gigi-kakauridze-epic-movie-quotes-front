import React from "react";
import { FormLayout } from "../../FormLayout";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import useForgotPasswordBody from "./useForgotPasswordBody";
import { EMAIL_PATTERN_VALUE } from "@/config/regex";

const ForgotPasswordBody: React.FC = () => {
  const {
    t,
    t2,
    register,
    isPending,
    handleSubmit,
    onSubmit,
    router,
    errors,
    serverErrors,
  } = useForgotPasswordBody();

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
          {t("send_instructions")}
        </Button>
      }
      link={{
        type: "forgotPassword",
        text: t("link_text"),
        action: () => router.push("/log-in"),
      }}
    >
      <Input
        error={errors.email?.message}
        serverError={serverErrors?.email?.at(0)}
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
    </FormLayout>
  );
};

export default ForgotPasswordBody;
