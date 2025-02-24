import { RealTimeComment } from "@/types/respones";
import { useEffect, useState } from "react";

export default function useListenCommentAdd() {
  const [newComment, setNewComment] = useState<{
    postId: number | undefined;
    comment: any;
  } | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Echo) {
      const channel = window.Echo.channel("comments");

      channel.listen("CommentAdded", (event: RealTimeComment) => {
        const postId = event?.comment?.quote?.id;
        const newCommentData = {
          id: event.comment.id,
          comment: event.comment.comment,
          user: {
            avatar: event?.comment.user?.avatar,
            name: event?.comment.user?.name,
          },
        };
        setNewComment({ postId, comment: newCommentData });
      });

      return () => {
        channel.stopListening("CommentAdded");
      };
    }
  }, []);

  return newComment;
}
