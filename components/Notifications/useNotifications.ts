import { NOTIFICATIONS } from "@/config/queryKeys";
import { useAuthentication } from "@/hooks/useAuthentication";
import useListenCommentNotification from "@/hooks/useListenCommentNotification";
import useMarkNotificationsAsRead from "@/hooks/useMarkNotificationsAsRead";
import useOutsideClick from "@/hooks/useOutsideClick";
import { getNotifications } from "@/services/apiNotifications";
import { CommentNotification } from "@/types/respones";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function useNotifications() {
  const { user } = useAuthentication();
  const [notificationsModalIsOpen, setNotificationsModalIsOpen] =
    useState<boolean>(false);
  const notificationsRef = useRef<HTMLDivElement | null>(null);

  const { t } = useTranslation("notifications");

  useOutsideClick(notificationsRef as React.RefObject<HTMLElement>, () =>
    setNotificationsModalIsOpen(false)
  );

  const newComment = useListenCommentNotification(user?.id);

  console.log(newComment);

  const {
    mutate: markAllNotificationsAsRead,
    isPending: markAllNotificationsAsReadIsPending,
  } = useMarkNotificationsAsRead();

  const { data: notifications } = useQuery<CommentNotification[]>({
    queryKey: [NOTIFICATIONS],
    queryFn: getNotifications,
  });

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
