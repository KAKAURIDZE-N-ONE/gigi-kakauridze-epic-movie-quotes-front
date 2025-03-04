import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

export default function useSelectMovies() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { t } = useTranslation("quote-modals");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return { isOpen, setIsOpen, t, router, dispatch };
}
