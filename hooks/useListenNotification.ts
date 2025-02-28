import { useEffect, useState } from "react";

export default function useListenNotification(userId: number | undefined) {
  const [newComment, setNewComment] = useState<any | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Echo && userId) {
      const channel = window.Echo.private(`App.Models.User.${userId}`);

      channel.notification((notification: any) => {
        let newNotification;
        if (notification.commenter_name)
          newNotification = {
            id: notification.id,
            created_at: new Date().toISOString(),
            read_at: null,
            data: {
              quote_id: notification.quote_id,
              movie_id: notification.movie_id,
              comment_id: notification.comment_id,
              commenter_name: notification.commenter_name,
              commenter_avatar: notification.commenter_avatar,
            },
          };
        else
          newNotification = {
            id: notification.id,
            created_at: new Date().toISOString(),
            read_at: null,
            data: {
              quote_id: notification.quote_id,
              movie_id: notification.movie_id,
              liker_name: notification.liker_name,
              liker_avatar: notification.liker_avatar,
            },
          };

        setNewComment(newNotification);
      });

      return () => {
        channel.stopListening("notification");
      };
    }
  }, [userId, window.Echo]);

  return newComment;
}
