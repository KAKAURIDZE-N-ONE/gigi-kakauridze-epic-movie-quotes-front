import useLogOut from "@/hooks/useLogOut";
import { changePassword } from "@/services/apiUser";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

export default function useChangePassword({
  setActiveEdit,
}: {
  setActiveEdit: Dispatch<SetStateAction<"username" | "password" | null>>;
}) {
  const router = useRouter();
  const { mutate: logout } = useLogOut();

  return useMutation({
    mutationFn: changePassword,
    onSuccess: (data) => {
      setActiveEdit(null);
      logout();
      showSuccessToast(data.status);
      router.push("/log-in");
    },
    onError: (error) => {
      showErrorToast(error.message);
    },
  });
}
