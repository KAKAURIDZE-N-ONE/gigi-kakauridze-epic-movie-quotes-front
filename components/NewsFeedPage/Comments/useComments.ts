import { useAuthentication } from "@/hooks/useAuthentication";
import useCreateComment from "@/hooks/useCreateComment";
import { HookProps } from "./types";
import { FormEvent, useState } from "react";

export default function useComments({ quote_id }: HookProps) {
  const [comment, setComment] = useState<string>("");
  const { user } = useAuthentication();
  const { mutate: createComment } = useCreateComment();

  function handleCreateComment(e: FormEvent<HTMLFormElement>, comment: string) {
    e.preventDefault();
    if (!user?.id || !quote_id) return;
    createComment({ user_id: user.id, comment, quote_id });
    setComment("");
  }

  return { user, handleCreateComment, comment, setComment };
}
