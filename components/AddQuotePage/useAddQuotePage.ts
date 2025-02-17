import { useRouter } from "next/router";

export default function useAddQuotePage() {
  const router = useRouter();
  const { id: movieId } = router.query;

  return { movieId };
}
