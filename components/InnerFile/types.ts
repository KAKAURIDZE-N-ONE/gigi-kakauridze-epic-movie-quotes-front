import { FormFieldsAddMovie } from "@/types/movie";
import { Control, UseFormRegisterReturn } from "react-hook-form";

export type Props = {
  error: string | undefined;
  control: Control<FormFieldsAddMovie>;
  register: UseFormRegisterReturn<string>;
  movieImage?: string;
};

export type HookProps = {
  control: Control<FormFieldsAddMovie>;
};
