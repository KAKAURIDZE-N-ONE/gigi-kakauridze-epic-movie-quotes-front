import { ReactNode } from "react";

export type Props = {
  children: string;
  title: string;
  actionBtn: ReactNode;
  action?: {
    text: string;
    fn: () => void;
  };
};
