import { MOVIES } from "@/config/queryKeys";
import { getMovies } from "@/services/apiMovie";
import { MoviesResponse } from "@/types/respones";
import { useQuery } from "@tanstack/react-query";

export default function useMoviesLayout() {
  const { data: movies } = useQuery<MoviesResponse[]>({
    queryKey: [MOVIES],
    queryFn: getMovies,
  });

  return { movies };
}
