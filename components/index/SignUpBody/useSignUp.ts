import { signUp } from "@/services/apiAuth";
import { updateOpenedModal } from "@/store/slices/modalSlice";
import { FormFieldsSignUp } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export default function useSignUp() {
  const router = useRouter();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: (data: FormFieldsSignUp) => signUp(data),
    onSuccess: () => {
      router.push("/");
      dispatch(updateOpenedModal("verifyEmail"));
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
}
