import { signUp } from "@/services/apiAuth";
import {
  updateCurrentUserNotficationEmail,
  updateOpenedModal,
} from "@/store/slices/modalSlice";
import { FormFieldsSignUp } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { SignUpResponse } from "./types";

export default function useSignUp() {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: (data: FormFieldsSignUp) => signUp(data),
    onSuccess: (data: SignUpResponse) => {
      dispatch(updateCurrentUserNotficationEmail(data.email));
      dispatch(updateOpenedModal("verifyEmail"));
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
}
