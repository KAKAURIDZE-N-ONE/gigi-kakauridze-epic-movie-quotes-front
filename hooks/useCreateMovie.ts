import { createMovie } from "@/services/apiMovie";
import { updateActiveMovieModal } from "@/store/slices/modalSlice";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export default function useCreateMovie() {
  const router = useRouter();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: createMovie,
    onSuccess: (data) => {
      dispatch(updateActiveMovieModal(null));
      const movieId = data?.movie?.id;
      router.push(`/movies/${movieId}`);
      showSuccessToast(data.status);
    },
    onError: () => {
      showErrorToast("Something went wrong. Please try again.");
    },
  });
}
