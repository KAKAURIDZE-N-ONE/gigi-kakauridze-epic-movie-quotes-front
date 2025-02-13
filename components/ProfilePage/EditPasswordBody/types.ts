import { FormFieldResetPassword } from "@/types/auth";
import { Dispatch, SetStateAction } from "react";

export type Props = {
  setFormDataPassword: Dispatch<SetStateAction<FormFieldResetPassword | null>>;
};

export type HookProps = {
  setFormDataPassword: Dispatch<SetStateAction<FormFieldResetPassword | null>>;
};
