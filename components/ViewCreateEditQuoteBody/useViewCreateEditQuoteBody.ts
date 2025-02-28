import { MOVIE_SHORT, QUOTE } from "@/config/queryKeys";
import useCreateQuote from "@/hooks/useCreateQuote";
import useDeleteQuote from "@/hooks/useDeleteQuote";
import useUpdateQuote from "@/hooks/useUpdateQuote";
import { getMovieShort } from "@/services/apiMovie";
import { getQuote } from "@/services/apiQuote";
import { selectActiveModalQuoteId } from "@/store/slices/modalSlice";
import { useAppSelector } from "@/store/store";
import { FormFieldsAddQuote } from "@/types/movie";
import {
  Comment,
  MovieShortResponse,
  PostsListingResponse,
} from "@/types/respones";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { HookProps } from "./types";
import useListenCommentAdd from "@/hooks/useListenCommentAdd";
import useListenLike from "@/hooks/useListenLike";
import { useAuthentication } from "@/hooks/useAuthentication";

export default function useViewCreateEditQuoteBody({ type }: HookProps) {
  const { user } = useAuthentication();
  const { t } = useTranslation("quote-modals");
  const [comments, setComments] = useState<Comment[]>([]);
  const [likesQuantity, setLikesQuantity] = useState<number | null>(null);
  const router = useRouter();
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const quoteId = useAppSelector(selectActiveModalQuoteId);
  const { id: movieId } = router.query;
  const { pathname } = router;
  const redirectedFromMovie = pathname.startsWith("/movies");

  const { mutate: deleteQuote, isPending: deleteQuoteIsPending } =
    useDeleteQuote({ movieId: Number(movieId) });

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

  const { addLike, removeLike } = useListenLike();

  useEffect(() => {
    if (addLike) {
      if (addLike.like.user_id === user?.id) return;
      setLikesQuantity((likesQuantity) =>
        likesQuantity ? likesQuantity + 1 : 1
      );
    }
  }, [addLike, user]);

  useEffect(() => {
    if (removeLike) {
      if (removeLike.like.user_id === user?.id) return;
      setLikesQuantity((likesQuantity) =>
        likesQuantity ? likesQuantity - 1 : 0
      );
    }
  }, [removeLike, user]);

  useEffect(() => {
    if (quote) {
      setComments(quote.comments);
      setLikesQuantity(quote.likes_count);
    }
  }, [quote, setComments, setLikesQuantity]);

  const newComment = useListenCommentAdd();

  useEffect(() => {
    if (newComment?.postId === quoteId) {
      setComments((comments) => [...comments, newComment.comment]);
    }
  }, [newComment, quoteId]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm<FormFieldsAddQuote>();

  useEffect(() => {
    if (quote && type !== "create") {
      reset({
        quote: quote.quote,
      });
    }
  }, [quote, reset, type]);

  const { mutate: createQuote, isPending: createQuoteIsPending } =
    useCreateQuote({
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
    reset({
      quote: { en: "", ka: "" },
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

  function handleDeleteQuote() {
    if (quoteId) deleteQuote({ quoteId: Number(quoteId) });
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
    quote,
    isMobile,
    handleDeleteQuote,
    deleteQuoteIsPending,
    t,
    comments,
    likesQuantity,
  };
}
