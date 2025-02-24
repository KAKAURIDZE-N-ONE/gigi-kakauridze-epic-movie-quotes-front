import { MOVIES_SHORT } from "@/config/queryKeys";
import useCreateQuote from "@/hooks/useCreateQuote";
import { getMoviesShort } from "@/services/apiMovie";
import { FormFieldsAddQuote } from "@/types/movie";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function useCreatePostBody() {
  const { t } = useTranslation("quote-modals");
  const [choosedMovieId, setChoosedMovieId] = useState<number | undefined>(
    undefined
  );

  const { data: movies } = useQuery({
    queryKey: [MOVIES_SHORT],
    queryFn: getMoviesShort,
  });

  const { mutate: createQuote, isPending: createQuoteIsPending } =
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
    if (!choosedMovieId) return;

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
    createQuoteIsPending,
    control,
    movies,
    t,
  };
}
