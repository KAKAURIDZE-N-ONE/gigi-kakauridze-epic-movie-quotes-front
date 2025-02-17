import { getMovieCategories } from "@/services/apiMovie";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export default function useAddQuotePage() {
  const router = useRouter();
  const { id: movieId } = router.query;

  return { movieId };
}
