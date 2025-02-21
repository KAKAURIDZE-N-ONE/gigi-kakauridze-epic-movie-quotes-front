import { QUOTES } from "@/config/queryKeys";
import { getQuotes } from "@/services/apiQuote";
import { PostsListingResponse } from "@/types/respones";
import { useQuery } from "@tanstack/react-query";

export default function useNewsFeedLayout() {
  const { data } = useQuery<PostsListingResponse[]>({
    queryKey: [QUOTES],
    queryFn: getQuotes,
  });

  return { posts: data };
}
