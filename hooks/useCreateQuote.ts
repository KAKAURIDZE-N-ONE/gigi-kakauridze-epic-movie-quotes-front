import { createQuote } from "@/services/apiQuote";
import { showErrorToast } from "@/utils/toast";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

export default function useCreateQuote({
  redirectedFromMovie,
  movieId,
}: {
  redirectedFromMovie: boolean;
  movieId?: number;
}) {
  const router = useRouter();

  return useMutation({
    mutationFn: createQuote,
    onSuccess: () => {
      if (redirectedFromMovie) router.push(`/movies/${movieId}`);
      else router.push(`/new-feed`);
    },
    onError: () => {
      showErrorToast("Something went wrong. Please try again.");
    },
  });
}
