import { ReactNode } from "react";

export type Props = {
  children: ReactNode;
  turnOfFn?: () => void;
};
