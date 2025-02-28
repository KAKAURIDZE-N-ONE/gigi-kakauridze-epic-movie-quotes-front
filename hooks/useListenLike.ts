import { LikeBroadcastResponse } from "@/types/respones";
import { useEffect, useState } from "react";

export default function useListenLike() {
  const [addLike, setAddLike] = useState<LikeBroadcastResponse | null>(null);
  const [removeLike, setRemoveLike] = useState<LikeBroadcastResponse | null>(
    null
  );

  useEffect(() => {
    if (window && typeof window !== "undefined" && window.Echo) {
      const channel = window.Echo.channel("likes");

      channel.listen("LikeAdded", (event: LikeBroadcastResponse) => {
        setAddLike(event);
      });

      channel.listen("LikeRemoved", (event: LikeBroadcastResponse) => {
        setRemoveLike(event);
      });

      return () => {
        channel.stopListening("LikeAdded");
        channel.stopListening("LikeRemoved");
      };
    }
  }, [window.Echo]);

  return { addLike, removeLike };
}
