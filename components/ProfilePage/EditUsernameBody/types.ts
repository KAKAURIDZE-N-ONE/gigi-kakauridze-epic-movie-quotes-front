import { FormValueEditUserName } from "@/types/user";
import { Dispatch, SetStateAction } from "react";

export type Props = {
  setFormDataUsername: Dispatch<SetStateAction<FormValueEditUserName | null>>;
};

export type HookProps = {
  setFormDataUsername: Dispatch<SetStateAction<FormValueEditUserName | null>>;
};
