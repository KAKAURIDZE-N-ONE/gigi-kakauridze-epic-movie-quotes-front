import { selectCurrentUserNotficationEmail } from "@/store/slices/modalSlice";
import { useAppSelector } from "@/store/store";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export default function useEmailResetPassword() {
  const userEmail = useAppSelector(selectCurrentUserNotficationEmail);
  const router = useRouter();
  const dispatch = useDispatch();

  return { userEmail, dispatch, router };
}
