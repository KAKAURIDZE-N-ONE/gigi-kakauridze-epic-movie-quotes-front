import { MOVIE } from "@/config/queryKeys";
import { updateQuote } from "@/services/apiQuote";
import {
  selectActiveQuoteModal,
  updateActiveModalQuoteId,
  updateActiveQuoteModal,
} from "@/store/slices/modalSlice";
import { useAppSelector } from "@/store/store";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

export default function useUpdateQuote({ movieId }: { movieId: number }) {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const activeQuoteModal = useAppSelector(selectActiveQuoteModal);
  return useMutation({
    mutationFn: updateQuote,
    onSuccess: (data) => {
      dispatch(updateActiveQuoteModal("view"));
      dispatch(updateActiveModalQuoteId(data.quote.id));
      queryClient.invalidateQueries({ queryKey: [String(movieId), MOVIE] });

      showSuccessToast(data.status);
    },
    onError: () => {
      showErrorToast("Something went wrong. Please try again.");
    },
  });
}
