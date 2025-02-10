import { useForm } from "react-hook-form";
import { HookProps } from "./types";
import { FormValueEditUserName } from "@/types/user";
import { updateOpenedModal } from "@/store/slices/modalSlice";
import { useDispatch } from "react-redux";

export default function useEditMobileLayout({ setFormData }: HookProps) {
  const dispatch = useDispatch();

  const { handleSubmit } = useForm<FormValueEditUserName>();

  const onSubmit = async (data: FormValueEditUserName) => {
    setFormData(data);
    dispatch(updateOpenedModal("makeChanges"));
  };

  return {
    handleSubmit,
    onSubmit,
  };
}
