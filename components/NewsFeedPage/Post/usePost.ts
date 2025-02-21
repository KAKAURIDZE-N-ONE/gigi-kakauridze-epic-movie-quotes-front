import { useTranslation } from "react-i18next";

export default function usePost() {
  const {
    i18n: { language },
  } = useTranslation();

  return { language };
}
