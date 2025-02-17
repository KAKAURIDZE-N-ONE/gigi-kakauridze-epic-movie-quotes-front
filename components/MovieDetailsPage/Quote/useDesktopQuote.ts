import { useTranslation } from "react-i18next";

export default function useDesktopQuote() {
  const { i18n } = useTranslation();
  const language = i18n.language;

  return { language };
}
