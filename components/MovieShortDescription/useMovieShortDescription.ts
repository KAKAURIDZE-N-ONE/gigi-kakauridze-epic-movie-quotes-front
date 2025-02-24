import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

export default function useMovieShortDescription() {
  const { t } = useTranslation("quote-modals");
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  const {
    i18n: { language },
  } = useTranslation();

  return { language, isMobile, t };
}
