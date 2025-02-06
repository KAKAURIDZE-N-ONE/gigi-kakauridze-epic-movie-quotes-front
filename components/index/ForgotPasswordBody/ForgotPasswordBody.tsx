import React from "react";
import { FormLayout } from "../../FormLayout";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import useForgotPasswordBody from "./useForgotPasswordBody";
import { EMAIL_VALIDATION_PATTERN_VALUE } from "@/config/regex";
import { updateOpenedModal } from "@/store/slices/modalSlice";

const ForgotPasswordBody: React.FC = () => {
  const {
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
      title="Forgot password?"
      subtitle="Enter the email and we’ll send an email with instructions to reset your password"
      onSubmit={handleSubmit(onSubmit)}
      actionBtn={
        <Button
          type="submit"
          size="small"
          clickFn={() => {}}
          disabled={isPending}
          color="red"
        >
          Send instructions
        </Button>
      }
      link={{
        type: "forgotPassword",
        text: "Back to log in",
        action: () => router.push("/log-in"),
      }}
    >
      <Input
        error={errors.email?.message}
        serverError={serverErrors?.email?.at(0)}
        placeholder="Enter your email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: EMAIL_VALIDATION_PATTERN_VALUE,
            message: "Please enter a valid email address",
          },
        })}
      >
        Email
      </Input>
    </FormLayout>
  );
};

export default ForgotPasswordBody;
