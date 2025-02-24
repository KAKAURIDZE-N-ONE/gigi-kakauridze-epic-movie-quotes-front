import { MOVIE, QUOTES } from "@/config/queryKeys";
import { createQuote } from "@/services/apiQuote";
import {
  selectActiveQuoteModal,
  updateActiveModalQuoteId,
  updateActiveQuoteModal,
} from "@/store/slices/modalSlice";
import { useAppSelector } from "@/store/store";
import { showErrorToast } from "@/utils/toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

export default function useCreateQuote({ movieId }: { movieId: number }) {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const activeQuoteModal = useAppSelector(selectActiveQuoteModal);

  return useMutation({
    mutationFn: createQuote,
    onSuccess: (data) => {
      if (activeQuoteModal === "add") {
        dispatch(updateActiveQuoteModal("view"));
        dispatch(updateActiveModalQuoteId(data.quote.id));
        queryClient.invalidateQueries({ queryKey: [String(movieId), MOVIE] });
      }
      if (activeQuoteModal === "createPost") {
        dispatch(updateActiveQuoteModal(null));
        queryClient.invalidateQueries({ queryKey: [QUOTES] });
      }
    },
    onError: () => {
      showErrorToast("Something went wrong. Please try again.");
    },
  });
}
