import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";

export default function useLanguageSwitcher() {
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const { locale, locales, asPath, push } = useRouter();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && savedLanguage !== locale) {
      push(`/${savedLanguage}${asPath}`);
    }
  }, [locale, asPath, push]);

  useOutsideClick(dropDownRef as React.RefObject<HTMLElement>, () =>
    setIsActive(false)
  );

  return { isActive, setIsActive, locale, locales, asPath, dropDownRef };
}
