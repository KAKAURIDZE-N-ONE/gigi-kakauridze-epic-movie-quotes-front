import { NOTIFICATIONS } from "@/config/queryKeys";
import { markNotificationAsRead } from "@/services/apiNotifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMarkNotificationAsRead() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: markNotificationAsRead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [NOTIFICATIONS] });
    },
  });
}
