import { MOVIE } from "@/config/queryKeys";
import { updateMovie } from "@/services/apiMovie";
import { updateActiveMovieModal } from "@/store/slices/modalSlice";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export default function useUpdateMovie() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateMovie,
    onSuccess: (data) => {
      const movieId = data?.movie?.id;
      dispatch(updateActiveMovieModal(null));
      queryClient.invalidateQueries({ queryKey: [String(movieId), MOVIE] });
      showSuccessToast(data.status);
    },
    onError: () => {
      showErrorToast("Something went wrong. Please try again.");
    },
  });
}
