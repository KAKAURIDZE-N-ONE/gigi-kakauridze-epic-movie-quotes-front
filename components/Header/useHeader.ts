import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

export default function useHeader() {
  const dispatch = useDispatch();
  const { t } = useTranslation("landing-page");

  return { dispatch, t };
}
