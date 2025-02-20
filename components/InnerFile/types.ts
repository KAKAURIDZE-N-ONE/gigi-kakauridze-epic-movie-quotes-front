import { FormFieldsAddMovie, FormFieldsAddQuote } from "@/types/movie";
import { Control, UseFormRegisterReturn } from "react-hook-form";

export type Props = {
  error: string | undefined;
  control: Control<FormFieldsAddMovie | FormFieldsAddQuote>;
  register: UseFormRegisterReturn<string>;
  savedImage?: string;
};

export type HookProps = {
  control: Control<FormFieldsAddMovie | FormFieldsAddQuote>;
};
