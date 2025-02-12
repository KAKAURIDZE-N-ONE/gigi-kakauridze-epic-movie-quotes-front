import { updateOpenedModal } from "@/store/slices/modalSlice";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";

export default function useForgotPasswordPage() {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(updateOpenedModal("forgotPassword"));
  }, [dispatch]);
}
