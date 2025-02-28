import { NOTIFICATIONS } from "@/config/queryKeys";
import { useAuthentication } from "@/hooks/useAuthentication";
import useListenNotification from "@/hooks/useListenNotification";
import useMarkNotificationsAsRead from "@/hooks/useMarkNotificationsAsRead";
import useOutsideClick from "@/hooks/useOutsideClick";
import { getNotifications } from "@/services/apiNotifications";
import { Notification } from "@/types/respones";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const { user } = useAuthentication();
  const [notificationsModalIsOpen, setNotificationsModalIsOpen] =
    useState<boolean>(false);
  const notificationsRef = useRef<HTMLDivElement | null>(null);

  const { t } = useTranslation("notifications");

  useOutsideClick(notificationsRef as React.RefObject<HTMLElement>, () =>
    setNotificationsModalIsOpen(false)
  );

  const newComment = useListenNotification(user?.id);

  useEffect(() => {
    if (newComment) {
      setNotifications((notifications) => [newComment, ...notifications]);
    }
  }, [newComment, setNotifications]);

  const {
    mutate: markAllNotificationsAsRead,
    isPending: markAllNotificationsAsReadIsPending,
  } = useMarkNotificationsAsRead();

  const { data } = useQuery<Notification[]>({
    queryKey: [NOTIFICATIONS],
    queryFn: getNotifications,
  });

  useEffect(() => {
    if (data) {
      setNotifications(data);
    }
  }, [data, setNotifications]);

  useEffect(() => {
    if (!notificationsModalIsOpen) return;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [notificationsModalIsOpen]);

  const unreadNotificationsLength =
    notifications?.filter((notification) => notification.read_at === null)
      .length || 0;

  return {
    t,
    notificationsRef,
    notificationsModalIsOpen,
    setNotificationsModalIsOpen,
    notifications,
    markAllNotificationsAsRead,
    markAllNotificationsAsReadIsPending,
    unreadNotificationsLength,
  };
}
