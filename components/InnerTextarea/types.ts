import { UseFormRegisterReturn } from "react-hook-form";

export type Props = {
  children: string;
  lang?: "en" | "ka";
  error?: string;
  register: UseFormRegisterReturn<string>;
  disabled?: boolean;
};
