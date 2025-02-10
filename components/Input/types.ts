export type Props = {
  children: string;
  register?: any;
  type?: "password" | "email";
  error?: string | undefined;
  serverError?: string | undefined;
  autoComplete?: string;
  placeholder?: string;
  size?: "big";
  value?: string;
};
