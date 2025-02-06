import { ReactNode } from "react";

export type Props = {
  children: ReactNode;
  actionBtn: ReactNode;
  title: string;
  subtitle: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  link: {
    type?: "forgotPassword" | "resetPassword";
    text: string;
    name?: string;
    action: () => void;
  };
};
