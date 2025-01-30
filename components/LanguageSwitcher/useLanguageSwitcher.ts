import useOutsideClick from "@/hooks/useOutsideClick";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export default function useLanguageSwitcher() {
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const { locale, locales, asPath } = useRouter();

  useOutsideClick(dropDownRef as React.RefObject<HTMLElement>, () =>
    setIsActive(false)
  );

  return { isActive, setIsActive, locale, locales, asPath, dropDownRef };
}
