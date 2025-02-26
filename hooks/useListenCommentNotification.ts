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

      const channel = new Echo({
        broadcaster: "pusher",
        key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY,
        cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
        encrypted: true,
        authorizer: (channel: any) => {
          return {
            authorize: (socketId: any, callback: any) => {
              authInstace
                .post("/api/broadcasting/auth", {
                  socket_id: socketId,
                  channel_name: channel.name,
                })
                .then((response) => {
                  callback(false, response.data);
                })
                .catch((error) => {
                  callback(true, error);
                });
            },
          };
        },
      }).private(`App.Models.User.${userId}`);

      channel.notification((notification: CommentNotification) => {
        console.log("New notification received:", notification);
      });

      console.log(`Subscribed to channel private-App.Models.User.${userId}`);
    }
  }, [userId, window.Echo]);

  return newComment;
}
