import { FormValueEditUserName } from "@/types/user";
import { Dispatch, ReactNode, SetStateAction } from "react";

export type Props = {
  setActiveEdit: Dispatch<SetStateAction<"username" | "password" | null>>;
  handleConfirm: () => void;
  children: ReactNode;
  activeEdit?: "password";
};

export type HookProps = {
  setFormData: Dispatch<SetStateAction<FormValueEditUserName | null>>;
};
