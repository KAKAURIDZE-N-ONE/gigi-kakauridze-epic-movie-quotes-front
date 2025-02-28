import { Comment, LikeResponse } from "@/types/respones";

export type Props = {
  comments: Comment[] | undefined;
  quote_id: number | undefined;
  likes_count: number | null;
  current_user_like: LikeResponse | null;
};

export type HookProps = {
  quote_id: number | undefined;
  current_user_like: LikeResponse | null;
};
