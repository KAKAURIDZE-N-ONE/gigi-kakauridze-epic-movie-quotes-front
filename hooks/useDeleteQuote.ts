import { MOVIE } from "@/config/queryKeys";
import { deleteQuote } from "@/services/apiQuote";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useDeleteQuote({
  movieId,
}: {
  movieId: number | undefined;
}) {
  const queryClient = useQueryClient();

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
    },
  });
}
