import { MOVIE } from "@/config/queryKeys";
import { deleteQuote } from "@/services/apiQuote";
import {
  selectActiveQuoteModal,
  updateActiveQuoteModal,
} from "@/store/slices/modalSlice";
import { useAppSelector } from "@/store/store";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export default function useDeleteQuote({
  movieId,
}: {
  movieId: number | undefined;
}) {
  const queryClient = useQueryClient();
  const activeQuoteModal = useAppSelector(selectActiveQuoteModal);
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: deleteQuote,
    onSuccess: () => {
      showSuccessToast("Quote deleted successfully!");
    },
    onError: () => {
      showErrorToast("Failed to delete the quote!");
    },
    onSettled: () => {
      if (!movieId) return;
      queryClient.invalidateQueries({ queryKey: [String(movieId), MOVIE] });
      if (activeQuoteModal !== null) dispatch(updateActiveQuoteModal(null));
    },
  });
}
