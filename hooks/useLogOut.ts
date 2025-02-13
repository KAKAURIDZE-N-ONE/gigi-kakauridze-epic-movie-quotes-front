import { USER } from "@/config/queryKeys";
import { logOut } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

export default function useLogOut() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: logOut,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: [USER] });
      router.push("/");
    },
    onError: (error) => {
      console.error("Error logging out:", error);
    },
  });
}
