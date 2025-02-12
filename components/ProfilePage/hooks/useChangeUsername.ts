import { USER } from "@/config/queryKeys";
import { changeUsername } from "@/services/apiUser";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";

export default function useChangeUsername({
  setActiveEdit,
}: {
  setActiveEdit: Dispatch<SetStateAction<"username" | "password" | null>>;
}) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: changeUsername,
    onSuccess: (data) => {
      setActiveEdit(null);
      queryClient.removeQueries({ queryKey: [USER] });
      showSuccessToast(data.status);
    },
    onError: (error) => {
      showErrorToast(error.message);
    },
  });
}
