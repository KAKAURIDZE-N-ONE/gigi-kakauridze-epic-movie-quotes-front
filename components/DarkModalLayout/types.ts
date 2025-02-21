import { ReactNode } from "react";

export type Props = {
  children: ReactNode;
  title: string;
  submitFn: () => void;
  btnText: string;
  isPending: boolean;
  needScroll?: boolean;
  onlyView?: boolean;
  type?: "create" | "view" | "edit";
};
