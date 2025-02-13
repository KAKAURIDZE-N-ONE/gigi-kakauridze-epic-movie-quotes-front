import { USER } from "@/config/queryKeys";
import { updateUserProfileImage } from "@/services/apiUser";
import { showSuccessToast } from "@/utils/toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useUploadProfileImage({
  clearUpload,
}: {
  clearUpload: () => void;
}) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUserProfileImage,
    onSuccess: (data) => {
      clearUpload();
      showSuccessToast(data.status);
      queryClient.invalidateQueries({ queryKey: [USER] });
    },
  });
}
