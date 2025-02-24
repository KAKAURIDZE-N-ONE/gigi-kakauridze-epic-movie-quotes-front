import { Comment } from "@/types/respones";

export type Props = {
  comments: Comment[] | undefined;
  quote_id: number | undefined;
  likes_count: number | undefined;
};

export type HookProps = {
  quote_id: number | undefined;
};
