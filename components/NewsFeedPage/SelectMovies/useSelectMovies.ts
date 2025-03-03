import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function useSelectMovies() {
  const { t } = useTranslation("quote-modals");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return { isOpen, setIsOpen, t };
}
