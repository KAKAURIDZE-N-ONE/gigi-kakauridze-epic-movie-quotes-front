import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

export default function useMovieQuotes() {
  const { t } = useTranslation("movie-description-page");
  const dispatch = useDispatch();

  return { t, dispatch };
}
