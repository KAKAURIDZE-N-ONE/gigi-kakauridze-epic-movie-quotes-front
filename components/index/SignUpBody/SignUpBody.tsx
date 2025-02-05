import React from "react";
import { FormLayout } from "../FormLayout";
import useSignUpBody from "./useSignUpBody";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { updateOpenedModal } from "@/store/slices/modalSlice";
import { EMAIL_VALIDATION_PATTERN_VALUE } from "@/config/regex";

const SignUpBody: React.FC = () => {
  const {
    dispatch,
    watch,
    onSubmit,
    register,
    handleSubmit,
    errors,
    isPending,
    serverErrors,
  } = useSignUpBody();

  return (
    <FormLayout
      link={{
        name: "Log In",
        text: "Already have an account?",
        action: () => dispatch(updateOpenedModal("logIn")),
      }}
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
    >
      <Input
        error={errors?.name?.message}
        serverError={serverErrors?.name?.at(0)}
        placeholder="At least 3 & max.15 lower case characters"
        {...register("name", {
          required: "Name is required",
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters long",
          },
          maxLength: {
            value: 15,
            message: "Name must be at most 15 characters long.",
          },
          pattern: {
            value: /^[a-z]+$/,
            message: "Only lowercase letters are allowed",
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
          required: "Email is required",
          pattern: {
            value: EMAIL_VALIDATION_PATTERN_VALUE,
            message: "Please enter a valid email address",
          },
        })}
      >
        Email
      </Input>
      <Input
        type="password"
        error={errors.password?.message}
        serverError={serverErrors?.password?.at(0)}
        placeholder="At least 8 & max 15."
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
        Create a password
      </Input>
      <Input
        type="password"
        error={errors.password_confirmation?.message}
        serverError={serverErrors?.passwordRepeat?.at(0)}
        placeholder="Confirm password"
        {...register("password_confirmation", {
          required: "Password is required",
          validate: (value) =>
            value === watch("password") || "Passwords do not match",
        })}
        autoComplete="new-password"
      >
        Confirm password
      </Input>
    </FormLayout>
  );
};

export default SignUpBody;
