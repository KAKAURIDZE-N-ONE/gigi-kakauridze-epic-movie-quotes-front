import { MOVIE } from "@/config/queryKeys";
import useDeleteMovie from "@/hooks/useDeleteMovie";
import { getMovie } from "@/services/apiMovie";
import { MovieResponse } from "@/types/respones";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

export default function useMovieDescription() {
  const { t } = useTranslation("movie-description-page");
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const { i18n } = useTranslation();

  const { mutate: deleteMovie, isPending: deleteMovieIsPending } =
    useDeleteMovie();

  const { data: movie } = useQuery<MovieResponse>({
    queryKey: [id, MOVIE],
    queryFn: () => getMovie(Number(id)),
    enabled: !!id,
  });

  const handleDeleteMovie = async (id: number) => {
    deleteMovie(id);
  };

  return {
    movie,
    language: i18n.language,
    handleDeleteMovie,
    deleteMovieIsPending,
    dispatch,
    t,
  };
}
