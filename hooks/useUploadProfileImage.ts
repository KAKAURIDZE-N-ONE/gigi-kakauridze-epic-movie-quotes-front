import { USER } from "@/config/queryKeys";
import { updateUserProfileImage } from "@/services/apiUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useUploadProfileImage() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUserProfileImage,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [USER] });
      console.log(data);
    },
  });
}
