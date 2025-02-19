import { deleteMovie } from "@/services/apiMovie";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

export default function useDeleteMovie() {
  const router = useRouter();

  return useMutation({
    mutationFn: deleteMovie,
    onSuccess: (data) => {
      router.push("/movies");
      showSuccessToast(data?.status || "Movie deleted successfully!");
    },
    onError: () => {
      showErrorToast("Failed to delete the movie!");
    },
  });
}
