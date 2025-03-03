import useRequireAuth from "@/hooks/useRequireAuth";
import { selectActiveMovieModal } from "@/store/slices/modalSlice";
import { useAppSelector } from "@/store/store";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";

export default function useMoviesPage() {
  const { isPending } = useRequireAuth();
  const activeMovieModal = useAppSelector(selectActiveMovieModal);
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const dispatch = useDispatch();

  return { isPending, activeMovieModal, isMobile, dispatch };
}
