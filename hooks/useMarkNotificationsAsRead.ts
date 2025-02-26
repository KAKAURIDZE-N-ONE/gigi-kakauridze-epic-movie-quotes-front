import { NOTIFICATIONS } from "@/config/queryKeys";
import { markAllNotificationsAsRead } from "@/services/apiNotifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMarkNotificationsAsRead() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: markAllNotificationsAsRead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [NOTIFICATIONS] });
    },
  });
}
