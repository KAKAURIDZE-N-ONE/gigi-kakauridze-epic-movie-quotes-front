import { updateQuote } from "@/services/apiQuote";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

export default function useUpdateQuote({ movieId }: { movieId: number }) {
  const router = useRouter();
  return useMutation({
    mutationFn: updateQuote,
    onSuccess: (data) => {
      router.push(`/movies/${movieId}/quote/${data.quote.id}`);
      showSuccessToast(data.status);
    },
    onError: () => {
      showErrorToast("Something went wrong. Please try again.");
    },
  });
}
