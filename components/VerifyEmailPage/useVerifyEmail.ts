import { verifyUser } from "@/services/apiAuth";
import { updateOpenedModal } from "@/store/slices/modalSlice";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export default function useVerifyEmail() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { mutate, isPending, error } = useMutation({
    mutationFn: verifyUser,
    onSuccess: () => {
      router.push("/");
      dispatch(updateOpenedModal("verifySuccess"));
    },
  });

  return { mutate, isPending, error };
}
