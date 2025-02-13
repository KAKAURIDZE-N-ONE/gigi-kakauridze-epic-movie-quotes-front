import { changePassword } from "@/services/apiUser";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { useMutation } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";

export default function useChangePassword({
  setActiveEdit,
}: {
  setActiveEdit: Dispatch<SetStateAction<"username" | "password" | null>>;
}) {
  return useMutation({
    mutationFn: changePassword,
    onSuccess: (data) => {
      setActiveEdit(null);
      showSuccessToast(data.status);
    },
    onError: (error) => {
      showErrorToast(error.message);
    },
  });
}
