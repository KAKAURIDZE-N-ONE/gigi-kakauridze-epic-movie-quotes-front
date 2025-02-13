import { MOVIE } from "@/config/queryKeys";
import { getMovie } from "@/services/apiMovie";
import { MovieResponse } from "@/types/respones";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function useMovieDescription() {
  const router = useRouter();
  const { id } = router.query;
  const { i18n } = useTranslation();

  const { data: movie } = useQuery<MovieResponse>({
    queryKey: [id, MOVIE],
    queryFn: () => getMovie(Number(id)),
    enabled: !!id,
  });

  return { movie, language: i18n.language };
}
