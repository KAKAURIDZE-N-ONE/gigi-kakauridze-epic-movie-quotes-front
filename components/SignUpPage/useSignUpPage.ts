import { updateOpenedModal } from "@/store/slices/modalSlice";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";

export default function useSignUpPage() {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(updateOpenedModal("signUp"));
  }, [dispatch]);
}
