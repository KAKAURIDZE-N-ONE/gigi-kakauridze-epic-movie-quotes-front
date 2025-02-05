export type Props = {
  children: string;
  placeholder: string;
  type?: "password" | "email";
  register?: any;
  error: string | undefined;
  serverError?: string | undefined;
  autoComplete?: string;
};
