import { FormFieldsAddMovie } from "@/types/movie";
import { Category } from "@/types/respones";
import { UseFormSetValue } from "react-hook-form";

export type Props = {
  children: string;
  options: Category[];
  selectedOptions: Category[];
  selectName: keyof FormFieldsAddMovie;
  setValue: UseFormSetValue<FormFieldsAddMovie>;
  error?: string;
};

export type HookProps = {
  selectName: keyof FormFieldsAddMovie;
  setValue: UseFormSetValue<FormFieldsAddMovie>;
  selectedOptions: Category[];
};
