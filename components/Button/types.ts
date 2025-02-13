import { ReactNode } from "react";

export type Props = {
  children: string;
  additionalClasses?: string;
  color?: string;
  size: "small" | "medium" | "smaller" | "normal" | "smallest";
  clickFn: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  icon?: ReactNode;
  form?: "form" | "formUsername" | "formPassword" | null;
};
