import { updateOpenedModal } from "@/store/slices/modalSlice";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

export default function useConfirmModalBody() {
  const { t } = useTranslation("profile-page");
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(updateOpenedModal(null));
  }

  return { closeModal, t };
}
