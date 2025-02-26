import useRequireAuth from "@/hooks/useRequireAuth";
import { selectActiveQuoteModal } from "@/store/slices/modalSlice";
import { useAppSelector } from "@/store/store";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";

export default function useNewsFeedPage() {
  const { isPending } = useRequireAuth();
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  const newPostModalIsOpen =
    useAppSelector(selectActiveQuoteModal) === "createPost";
  const dispatch = useDispatch();

  return { isPending, newPostModalIsOpen, isMobile, dispatch };
}
