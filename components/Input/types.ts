import { RegisterOptions } from "react-hook-form";

export type Props = {
  children: string;
  register?: (options?: RegisterOptions) => void;
  type?: "password" | "email";
  error?: string | undefined;
  serverError?: string | undefined;
  autoComplete?: string;
  placeholder?: string;
  size?: "big";
  value?: string;
};
