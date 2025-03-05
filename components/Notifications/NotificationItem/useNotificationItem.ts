import useMarkNotificationAsRead from "@/hooks/useMarkNotificationAsRead";
import {
  updateActiveModalQuoteId,
  updateActiveQuoteModal,
} from "@/store/slices/modalSlice";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { HookProps } from "./types";
import defaultProfileImage from "@/public/images/defaultProfileImage.png";

export default function useNotificationItem({ notification }: HookProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { t } = useTranslation("notifications");

  function moveToViewQuoteModal(movieId: number, quoteId: number) {
    router.push(`/movies/${movieId}`);
    dispatch(updateActiveQuoteModal("view"));
    dispatch(updateActiveModalQuoteId(quoteId));
  }

  const avatar = useMemo(() => {
    if (
      "commenter_avatar" in notification.data &&
      notification.data.commenter_avatar !== ""
    ) {
      return notification.data.commenter_avatar;
    } else if (
      "liker_avatar" in notification.data &&
      notification.data.liker_avatar !== ""
    ) {
      return notification.data.liker_avatar;
    } else {
      return defaultProfileImage.src;
    }
  }, [notification.data, defaultProfileImage.src]);

  const { mutate: markNotificationAsRead } = useMarkNotificationAsRead();

  return { t, moveToViewQuoteModal, markNotificationAsRead, avatar };
}
