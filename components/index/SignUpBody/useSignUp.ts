import { signUp } from "@/services/apiAuth";
import { updateOpenedModal } from "@/store/slices/modalSlice";
import { FormFieldsSignUp } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

export default function useSignUp() {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: (data: FormFieldsSignUp) => signUp(data),
    onSuccess: () => {
      dispatch(updateOpenedModal("verifyEmail"));
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
}
