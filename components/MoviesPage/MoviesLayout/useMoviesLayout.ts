import { MOVIES } from "@/config/queryKeys";
import { getMovies } from "@/services/apiMovie";
import { MoviesResponse } from "@/types/respones";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

export default function useMoviesLayout() {
  const { t } = useTranslation("movies-page");
  const dispatch = useDispatch();

  const { data: movies } = useQuery<MoviesResponse[]>({
    queryKey: [MOVIES],
    queryFn: getMovies,
  });

  return { movies, t, dispatch };
}
