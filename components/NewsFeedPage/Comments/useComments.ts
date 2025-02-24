import { useAuthentication } from "@/hooks/useAuthentication";
import useCreateComment from "@/hooks/useCreateComment";
import { HookProps } from "./types";
import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";

export default function useComments({ quote_id }: HookProps) {
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

  return {
    user,
    handleCreateComment,
    createCommentIsPending,
    comment,
    setComment,
    t,
  };
}
