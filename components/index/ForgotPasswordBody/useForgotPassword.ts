import { forgotPassword } from "@/services/apiAuth";
import {
  updateCurrentUserNotficationEmail,
  updateOpenedModal,
} from "@/store/slices/modalSlice";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { Response } from "./types";
import { useRouter } from "next/router";
import { showErrorToast } from "@/utils/toast";
import { AxiosError } from "axios";

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
    onError: (error: AxiosError<{ message: string }>) => {
      if (error.response) {
        showErrorToast(error.response.data.message);
      } else {
        showErrorToast("An unknown error occurred.");
      }
    },
  });

  return { mutate, isPending, error };
}
