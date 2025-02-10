import { FormValueEditUserName } from "@/types/user";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { UseFormHandleSubmit } from "react-hook-form";

export type Props = {
  setActiveEdit: Dispatch<SetStateAction<"username" | "password" | null>>;
  handleConfirm: () => void;
  setFormData: any;
  children: ReactNode;
  activeEdit?: "password";
};

export type HookProps = {
  setFormData: Dispatch<SetStateAction<FormValueEditUserName | null>>;
};
