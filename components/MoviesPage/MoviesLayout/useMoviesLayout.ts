import { MOVIES } from "@/config/queryKeys";
import { getMovies } from "@/services/apiMovie";
import { MoviesResponse } from "@/types/respones";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export default function useMoviesLayout() {
  const router = useRouter();

  const { data: movies } = useQuery<MoviesResponse[]>({
    queryKey: [MOVIES],
    queryFn: getMovies,
  });

  return { movies, router };
}
