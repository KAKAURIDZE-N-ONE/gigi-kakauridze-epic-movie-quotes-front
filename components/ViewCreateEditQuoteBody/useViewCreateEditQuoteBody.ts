import { MOVIE_SHORT, QUOTE } from "@/config/queryKeys";
import useCreateQuote from "@/hooks/useCreateQuote";
import useUpdateQuote from "@/hooks/useUpdateQuote";
import { getMovieShort } from "@/services/apiMovie";
import { getQuote } from "@/services/apiQuote";
import { FormFieldsAddQuote } from "@/types/movie";
import { MovieShortResponse, PostsListingResponse } from "@/types/respones";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function useViewCreateEditQuoteBody() {
  const router = useRouter();
  const { id: movieId, quoteId } = router.query;
  const { pathname } = router;
  const redirectedFromMovie = pathname.startsWith("/movies");

  const { data: movieShort } = useQuery<MovieShortResponse>({
    queryKey: [MOVIE_SHORT, movieId],
    queryFn: () => getMovieShort(Number(movieId)),
    enabled: !!movieId,
  });

  const { data: quote } = useQuery<PostsListingResponse>({
    queryKey: [QUOTE, quoteId],
    queryFn: () => getQuote(Number(quoteId)),
    enabled: !!quoteId,
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm<FormFieldsAddQuote>();

  useEffect(() => {
    if (quote) {
      reset({
        quote: quote.quote,
      });
    }
  }, [quote, reset]);

  const { mutate: createQuote, isPending: createQuoteIsPending } =
    useCreateQuote({
      redirectedFromMovie,
      movieId: Number(movieId),
    });

  const { mutate: updateQuote, isPending: updateQuoteIsPending } =
    useUpdateQuote({
      movieId: Number(movieId),
    });

  function onSubmitCreate(data: FormFieldsAddQuote) {
    createQuote({
      quote: data.quote,
      movie_id: Number(movieId),
      image: data.image[0],
    });
  }

  function onSubmitEdit(data: FormFieldsAddQuote) {
    const imageFile = data.image[0];
    updateQuote({
      quote_id: Number(quoteId),
      quote: data.quote,
      movie_id: Number(movieId),
      image: imageFile,
    });
  }

  return {
    movieId,
    redirectedFromMovie,
    register,
    errors,
    control,
    onSubmitCreate,
    onSubmitEdit,
    handleSubmit,
    createQuoteIsPending,
    updateQuoteIsPending,
    movieShort,
    router,
    quoteImage: quote?.image,
  };
}
