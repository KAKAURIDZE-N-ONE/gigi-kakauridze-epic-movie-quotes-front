import { MOVIES } from "@/config/queryKeys";
import useCreateQuote from "@/hooks/useCreateQuote";
import { getMovies } from "@/services/apiMovie";
import { FormFieldsAddQuote } from "@/types/movie";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function useCreatePostBody() {
  const { t } = useTranslation("quote-modals");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [choosedMovieId, setChoosedMovieId] = useState<number | undefined>(
    undefined
  );
  const [customSelectError, setCustomSelectError] = useState(false);

  const { data: movies } = useQuery({
    queryKey: [MOVIES],
    queryFn: () => getMovies(),
  });

  const { mutate: createQuote, isPending: createPostIsPending } =
    useCreateQuote({
      movieId: Number(choosedMovieId),
    });

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<FormFieldsAddQuote>();

  async function onSubmit(data: FormFieldsAddQuote) {
    if (!choosedMovieId) {
      return;
    }

    createQuote({
      quote: data.quote,
      movie_id: choosedMovieId,
      image: data.image[0],
    });
  }

  return {
    register,
    errors,
    handleSubmit,
    onSubmit,
    choosedMovieId,
    setChoosedMovieId,
    createPostIsPending,
    control,
    movies,
    t,
    customSelectError,
    setCustomSelectError,
    setIsSubmitted,
    isSubmitted,
  };
}
