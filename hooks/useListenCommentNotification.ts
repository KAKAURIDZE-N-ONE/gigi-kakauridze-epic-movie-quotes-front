import { authInstace } from "@/services/axios";
import { CommentNotification } from "@/types/respones";
import Echo from "laravel-echo";
import { useEffect, useState } from "react";

export default function useListenCommentNotification(
  userId: number | undefined
) {
  const [newComment, setNewComment] = useState<{
    commentId: number;
    quoteId: number;
    commenterName: string;
    commenterAvatar: string;
  } | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Echo && userId) {
      console.log(
        `Attempting to subscribe to private-App.Models.User.${userId}`
      );

      const channel = window.Echo.private(`App.Models.User.${userId}`);

      channel.notification((notification: CommentNotification) => {
        console.log("New notification received:", notification);
      });

      console.log(`Subscribed to channel private-App.Models.User.${userId}`);
    }
  }, [userId, window.Echo]);

  return newComment;
}
