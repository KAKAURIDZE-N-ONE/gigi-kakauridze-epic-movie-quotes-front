import { updateOpenedModal } from "@/store/slices/modalSlice";
import { useDispatch } from "react-redux";

export default function useConfirmModalBody() {
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(updateOpenedModal(null));
  }

  return { closeModal };
}
