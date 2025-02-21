import useDeleteQuote from "@/hooks/useDeleteQuote";
import { HookProps } from "./types";

export default function useQuoteManagementWindow({ movieId }: HookProps) {
  const { mutate: deleteQuote, isPending: deleteQuoteIsPending } =
    useDeleteQuote({ movieId });

  return { deleteQuote, deleteQuoteIsPending };
}
