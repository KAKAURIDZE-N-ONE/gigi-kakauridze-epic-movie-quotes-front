import { updateMovie } from "@/services/apiMovie";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

export default function useUpdateMovie() {
  const router = useRouter();
  return useMutation({
    mutationFn: updateMovie,
    onSuccess: (data) => {
      const movieId = data?.movie?.id;
      router.push(`/movies/${movieId}`);
      showSuccessToast(data.status);
    },
    onError: () => {
      showErrorToast("Something went wrong. Please try again.");
    },
  });
}
