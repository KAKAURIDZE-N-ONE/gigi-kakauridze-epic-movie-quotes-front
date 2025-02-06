import { Button } from "@/components/Button";
import { FormLayout } from "@/components/FormLayout";
import { Input } from "@/components/Input";
import React from "react";
import useSignUpBody from "./useSignUpBody";
import { EMAIL_VALIDATION_PATTERN_VALUE } from "@/config/regex";

const SignUpBody: React.FC = () => {
  const {
    watch,
    router,
    onSubmit,
    register,
    handleSubmit,
    isPending,
    serverErrors,
    errors,
  } = useSignUpBody();

  return (
    <FormLayout
      title="Create an account"
      subtitle="Start your journey!"
      onSubmit={handleSubmit(onSubmit)}
      actionBtn={
        <Button
          type="submit"
          size="small"
          clickFn={() => {}}
          disabled={isPending}
          color="red"
        >
          Get started
        </Button>
      }
      link={{
        text: "Already have an account?",
        name: "Log in",
        action: () => router.push("/log-in"),
      }}
    >
      <Input
        error={errors.name?.message}
        serverError={serverErrors?.name?.at(0)}
        placeholder="At least 3 & max.15 lower case characters"
        {...register("name", {
          required: "Username is required",
          minLength: {
            value: 3,
            message: "Minimum length must be 3.",
          },
          maxLength: {
            value: 15,
            message: "Minimum length should be 3.",
          },
        })}
      >
        Name
      </Input>
      <Input
        error={errors.email?.message}
        serverError={serverErrors?.email?.at(0)}
        placeholder="Enter your email"
        {...register("email", {
          required: "Email or username is required",
          pattern: {
            value: EMAIL_VALIDATION_PATTERN_VALUE,
            message: "invalid email address",
          },
        })}
      >
        Email
      </Input>
      <Input
        type="password"
        error={errors.password?.message}
        serverError={serverErrors?.password?.at(0)}
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

export default SignUpBody;
