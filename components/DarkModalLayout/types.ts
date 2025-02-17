import { ReactNode } from "react";

export type Props = {
  children: ReactNode;
  title: string;
  submitFn: () => void;
  xBtnUrl: string;
  btnText: string;
};
