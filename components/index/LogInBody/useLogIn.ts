import { logIn } from "@/services/apiAuth";
import { FormFieldsLogIn } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";

export default function useLogIn() {
  return useMutation({
    mutationFn: (data: FormFieldsLogIn) => logIn(data),
    onSuccess: () => {
      console.log("success");
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
}
