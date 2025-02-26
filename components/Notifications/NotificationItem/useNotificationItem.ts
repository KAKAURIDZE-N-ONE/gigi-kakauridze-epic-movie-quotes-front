import useMarkNotificationAsRead from "@/hooks/useMarkNotificationAsRead";
import {
  updateActiveModalQuoteId,
  updateActiveQuoteModal,
} from "@/store/slices/modalSlice";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

export default function useNotificationItem() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { t } = useTranslation("notifications");

  function moveToViewQuoteModal(movieId: number, quoteId: number) {
    router.push(`/movies/${movieId}`);
    dispatch(updateActiveQuoteModal("view"));
    dispatch(updateActiveModalQuoteId(quoteId));
  }

  const { mutate: markNotificationAsRead } = useMarkNotificationAsRead();

  return { t, moveToViewQuoteModal, markNotificationAsRead };
}
