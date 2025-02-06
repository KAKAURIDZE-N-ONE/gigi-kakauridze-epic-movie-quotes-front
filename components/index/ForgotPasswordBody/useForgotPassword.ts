import { forgotPassword } from "@/services/apiAuth";
import {
  updateCurrentUserNotficationEmail,
  updateOpenedModal,
} from "@/store/slices/modalSlice";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { Response } from "./types";
import { useRouter } from "next/router";

export default function useForgotPassword() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { mutate, isPending, error } = useMutation({
    mutationFn: forgotPassword,
    onSuccess: (data: Response) => {
      router.push("/");
      dispatch(updateCurrentUserNotficationEmail(data.email));
      dispatch(updateOpenedModal("resetPasswordLink"));
    },
  });

  return { mutate, isPending, error };
}
