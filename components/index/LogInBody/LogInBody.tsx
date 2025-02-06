import React from "react";
import { FormLayout } from "../../FormLayout";
import { Button } from "@/components/Button";
import useLoginBody from "./useLoginBody";
import { Input } from "@/components/Input";

const LogInBody: React.FC = () => {
  const {
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
      title="Log in to your account"
      subtitle="Welcome back! Please enter your details."
      onSubmit={handleSubmit(onSubmit)}
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
        action: () => router.push("/sign-up"),
      }}
    >
      <Input
        error={errors.emailOrName?.message}
        serverError={serverErrors?.emailOrName?.at(0)}
        placeholder="Enter your email or username"
        {...register("emailOrName", {
          required: "Email or username is required",
        })}
      >
        Email or username
      </Input>
      <Input
        type="password"
        error={errors.password?.message}
        serverError={serverErrors?.password?.at(0)}
        placeholder="Password"
        {...register("password", {
          required: "Password is required",
        })}
      >
        Password
      </Input>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <input
            className="rounded w-5 h-4"
            id="remember"
            {...register("remember")}
            type="checkbox"
          />
          <label htmlFor="remember">Remember me</label>
        </div>
        <p
          onClick={() => router.push("/forgot-password")}
          className="text-blue underline cursor-pointer"
        >
          Forgot password
        </p>
      </div>
    </FormLayout>
  );
};

export default LogInBody;
