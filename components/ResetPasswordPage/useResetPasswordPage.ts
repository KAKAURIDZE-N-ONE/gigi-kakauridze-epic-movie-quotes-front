import { updateOpenedModal } from "@/store/slices/modalSlice";
import { useRouter } from "next/router";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";

export default function useResetPasswordPage() {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { token } = query;

  useLayoutEffect(() => {
    dispatch(updateOpenedModal("resetPassword"));
  }, []);
}
