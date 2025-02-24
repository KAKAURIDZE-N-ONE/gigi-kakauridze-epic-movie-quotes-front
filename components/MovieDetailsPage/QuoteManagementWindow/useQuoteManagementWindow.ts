import useDeleteQuote from "@/hooks/useDeleteQuote";
import { HookProps } from "./types";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

export default function useQuoteManagementWindow({ movieId }: HookProps) {
  const { t } = useTranslation("movie-description-page");
  const dispatch = useDispatch();
  const { mutate: deleteQuote, isPending: deleteQuoteIsPending } =
    useDeleteQuote({ movieId });

  return { deleteQuote, deleteQuoteIsPending, dispatch, t };
}
