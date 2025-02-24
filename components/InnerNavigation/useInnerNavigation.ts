import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

export default function useInnerNavigation() {
  const { t } = useTranslation("inner-layout");
  const { pathname } = useRouter();
  const dispatch = useDispatch();

  return { pathname, dispatch, t };
}
