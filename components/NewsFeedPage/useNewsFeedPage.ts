import useRequireAuth from "@/hooks/useRequireAuth";
import { selectActiveQuoteModal } from "@/store/slices/modalSlice";
import { useAppSelector } from "@/store/store";
import { useDispatch } from "react-redux";

export default function useNewsFeedPage() {
  const { isPending } = useRequireAuth();
  const newPostModalIsOpen =
    useAppSelector(selectActiveQuoteModal) === "createPost";
  const dispatch = useDispatch();

  return { isPending, newPostModalIsOpen, dispatch };
}
