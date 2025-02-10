import { USER } from "@/config/queryKeys";
import { logIn } from "@/services/apiAuth";
import { updateOpenedModal } from "@/store/slices/modalSlice";
import { FormFieldsLogIn } from "@/types/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export default function useLogIn() {
  const router = useRouter();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: FormFieldsLogIn) => logIn(data),
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: [USER] });
      dispatch(updateOpenedModal(null));
      router.push("/news-feed");
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
}
