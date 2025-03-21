import { FormEvent, ReactNode } from "react";

export type Props = {
  children: ReactNode;
  title: string;
  submitFn: (() => void) | ((e: FormEvent<HTMLFormElement>) => void);
  btnText: string;
  isPending: boolean;
  onlyView?: boolean;
  type?: "create" | "view" | "edit" | "createPost";
  trashFn?: () => void;
  xBtnFn?: () => void | undefined;
};
