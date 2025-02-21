import { Comment } from "@/types/respones";

export type Props = {
  comments: Comment[];
  quote_id: number;
};

export type HookProps = {
  quote_id: number;
};
