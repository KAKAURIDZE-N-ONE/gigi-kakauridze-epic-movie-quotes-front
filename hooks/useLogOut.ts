import { USER } from "@/config/queryKeys";
import { logOut } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useLogOut() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: logOut,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: [USER] });
    },
    onError: (error) => {
      console.error("Error logging out:", error);
    },
  });

  return { logOut: mutate };
}
