import { Dispatch, SetStateAction } from "react";

export type Props = {
  setActiveEdit: Dispatch<SetStateAction<"username" | "password" | null>>;
};
