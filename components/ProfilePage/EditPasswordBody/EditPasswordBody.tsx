import React from "react";
import useEditPasswordBody from "./useEditPasswordBody";
import { Props } from "./types";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

const EditPasswordBody: React.FC<Props> = ({ setFormDataPassword }) => {
  const { register, handleSubmit, errors, onSubmit, t, t2, watch } =
    useEditPasswordBody({
      setFormDataPassword,
    });

  return (
    <form id="form" onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="px-8 flex flex-col gap-6">
        <input
          type="text"
          name="username"
          autoComplete="username"
          style={{ display: "none" }}
        />

        <Input
          size="big"
          type="password"
          error={errors.password?.message}
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
          size="big"
          type="password"
          error={errors.password_confirmation?.message}
          placeholder={t("confirm_password_placeholder")}
          {...register("password_confirmation", {
            validate: (value) =>
              value === watch("password") || t2("password_not_match"),
          })}
        >
          {t("confirm_password_label")}
        </Input>
      </div>
    </form>
  );
};

export default EditPasswordBody;
