import { USER } from "@/config/queryKeys";
import { updateUserProfileImage } from "@/services/apiUser";
import { showSuccessToast } from "@/utils/toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useUploadProfileImage() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUserProfileImage,
    onSuccess: (data) => {
      showSuccessToast(data.status);
      queryClient.invalidateQueries({ queryKey: [USER] });
    },
  });
}
