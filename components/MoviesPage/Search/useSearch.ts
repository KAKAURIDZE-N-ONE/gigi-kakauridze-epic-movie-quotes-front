import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { HookProps } from "./types";

export default function useSearch({ searchIsOpen }: HookProps) {
  const { t } = useTranslation("movies-page");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current && searchIsOpen) {
      inputRef.current.focus();
    }
  }, [inputRef, searchIsOpen]);

  return { inputRef, t };
}
