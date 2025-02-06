import { resetPassword } from "@/services/apiAuth";
import { updateOpenedModal } from "@/store/slices/modalSlice";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export default function useResetPassword() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { mutate, isPending, error } = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      dispatch(updateOpenedModal("resetPasswordSuccess"));
      router.push("/");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { mutate, isPending, error };
}
