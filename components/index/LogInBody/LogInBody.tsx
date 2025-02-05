import React from "react";
import { FormLayout } from "../FormLayout";
import { Button } from "@/components/Button";
import useLoginBody from "./useLoginBody";
import { updateOpenedModal } from "@/store/slices/modalSlice";
import { Input } from "@/components/Input";
import { EMAIL_VALIDATION_PATTERN_VALUE } from "@/config/regex";

const LogInBody: React.FC = () => {
  const {
    dispatch,
    onSubmit,
    register,
    handleSubmit,
    isPending,
    serverErrors,
    errors,
  } = useLoginBody();

  return (
    <FormLayout
      title="Log in to your account"
      subtitle="Welcome back! Please enter your details."
      actionBtn={
        <Button
          type="submit"
          size="small"
          clickFn={() => {}}
          disabled={isPending}
          color="red"
        >
          Sign in
        </Button>
      }
      link={{
        text: "Already have an account?",
        name: "Sign Up",
        action: () => dispatch(updateOpenedModal("signUp")),
      }}
    >
      <Input
        error={errors.email?.message}
        // serverError={serverErrors?.email?.at(0)}
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
        // serverError={serverErrors?.password?.at(0)}
        placeholder="Password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters long",
          },
        })}
      >
        Password
      </Input>
    </FormLayout>
  );
};

export default LogInBody;
