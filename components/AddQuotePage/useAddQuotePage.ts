import useCreateQuote from "@/hooks/useCreateQuote";
import { FormFieldsAddQuote } from "@/types/movie";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function useAddQuotePage() {
  const router = useRouter();
  const { id: movieId } = router.query;
  const { pathname } = router;
  const redirectedFromMovie = pathname.startsWith("/movies");

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<FormFieldsAddQuote>();

  const { mutate: createQuote, isPending: createMovieIsPending } =
    useCreateQuote({
      redirectedFromMovie,
      movieId: Number(movieId),
    });

  function onSubmit(data: FormFieldsAddQuote) {
    createQuote({
      quote: data.quote,
      movie_id: String(movieId),
      image: data.image[0],
    });
  }

  return {
    movieId,
    redirectedFromMovie,
    register,
    errors,
    control,
    onSubmit,
    handleSubmit,
    createMovieIsPending,
  };
}
