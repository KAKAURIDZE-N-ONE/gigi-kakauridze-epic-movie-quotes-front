import { useAuthentication } from "@/hooks/useAuthentication";
import { useDispatch } from "react-redux";

export default function useDarkModalLayout() {
  const dispatch = useDispatch();
  const { user } = useAuthentication();

  return { user, dispatch };
}
