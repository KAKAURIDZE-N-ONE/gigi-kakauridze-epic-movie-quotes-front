import React from "react";
import useEditUsernameBody from "./useEditUsernameBody";
import { Props } from "./types";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

const EditUsernameBody: React.FC<Props> = ({ setFormDataUsername }) => {
  const { register, handleSubmit, errors, onSubmit, t, t2 } =
    useEditUsernameBody({
      setFormDataUsername,
    });

  return (
    <form id="form" onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="px-8">
        <Input
          size="big"
          placeholder="New Username"
          error={errors.name?.message}
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
              value: /^[a-z0-9]+$/,
              message: t2("only_lower_case"),
            },
          })}
        >
          {t("name_label2")}
        </Input>
      </div>
    </form>
  );
};

export default EditUsernameBody;
