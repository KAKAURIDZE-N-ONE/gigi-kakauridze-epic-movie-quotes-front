import { useAuthentication } from "@/hooks/useAuthentication";
import useCreateComment from "@/hooks/useCreateComment";
import { HookProps } from "./types";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import useCreateLike from "@/hooks/useCreateLike";
import useUpdateLike from "@/hooks/useUpdateLike";

export default function useCommentsAndLikes({
  quote_id,
  current_user_like,
}: HookProps) {
  const [wasLiked] = useState<1 | 0>(current_user_like?.active || 0);
  const [likeHasUpdatedBeforeCreate, setLikeHasUpdatedBeforeCreate] =
    useState<boolean>(false);

  const storedHasLiked = useRef<0 | 1>(current_user_like?.active || 0);

  const [userHasLiked, setUserHasLiked] = useState<boolean>(
    current_user_like !== null && current_user_like?.active === 1
  );

  const { t } = useTranslation("news-feed-page");
  const [comment, setComment] = useState<string>("");
  const { user } = useAuthentication();
  const { mutate: createComment, isPending: createCommentIsPending } =
    useCreateComment();

  function handleCreateComment(e: FormEvent<HTMLFormElement>, comment: string) {
    e.preventDefault();
    if (!user?.id || !quote_id) return;
    createComment({ user_id: user.id, comment, quote_id });
    setComment("");
  }

  const { mutate: createLike } = useCreateLike();
  const { mutate: updateLike } = useUpdateLike();

  const handleLike = useCallback(
    (action: "create" | "update", active?: 0 | 1) => {
      if (!user?.id || !quote_id) return;
      if (action === "create" && storedHasLiked.current === 0) {
        createLike({ user_id: user.id, quote_id });
        storedHasLiked.current = 1;
      } else if (action === "update" && current_user_like) {
        if (active === 0 || active === 1) {
          updateLike({ id: current_user_like.id, active });
          storedHasLiked.current = active;
        }
      } else if (action === "update" && !current_user_like) {
        setLikeHasUpdatedBeforeCreate(true);
      }
    },
    [
      user?.id,
      quote_id,
      current_user_like,
      createLike,
      updateLike,
      storedHasLiked,
    ]
  );

  useEffect(() => {
    if (likeHasUpdatedBeforeCreate && current_user_like) {
      const isLiked = userHasLiked ? 1 : 0;
      if (!isLiked) handleLike("update", 0);
      setLikeHasUpdatedBeforeCreate(false);
    }
  }, [current_user_like, likeHasUpdatedBeforeCreate, handleLike, userHasLiked]);

  function getUpdatedLikesCount(
    likes_count: number | null,
    userHasLiked: boolean,
    wasLiked: 0 | 1
  ) {
    if (likes_count === null) return null;

    if (userHasLiked) {
      if (likes_count >= 0) {
        if (wasLiked === 1) {
          return likes_count;
        } else {
          return likes_count + 1;
        }
      } else {
        return 0;
      }
    } else {
      if (wasLiked === 1) {
        return likes_count - 1;
      } else {
        return likes_count;
      }
    }
  }

  return {
    user,
    handleCreateComment,
    createCommentIsPending,
    comment,
    setComment,
    t,
    userHasLiked,
    setUserHasLiked,
    handleLike,
    storedHasLiked,
    wasLiked,
    getUpdatedLikesCount,
  };
}
