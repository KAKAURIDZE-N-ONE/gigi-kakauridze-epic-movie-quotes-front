import useOutsideClick from "@/hooks/useOutsideClick";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function useQuote() {
  const windowRef = useRef<HTMLDivElement | null>(null);
  const [windowIsOpen, setWindowIsOpen] = useState<boolean>(false);

  useOutsideClick(windowRef as React.RefObject<HTMLElement>, () =>
    setWindowIsOpen(false)
  );

  const { i18n } = useTranslation();
  const language = i18n.language;

  return { language, windowRef, windowIsOpen, setWindowIsOpen };
}
