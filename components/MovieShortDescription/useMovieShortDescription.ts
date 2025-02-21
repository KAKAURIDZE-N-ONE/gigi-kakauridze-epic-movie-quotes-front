import { useTranslation } from "react-i18next";

export default function useMovieShortDescription() {
  const {
    i18n: { language },
  } = useTranslation();

  return { language };
}
