import { useAuthentication } from "@/hooks/useAuthentication";

export default function useDarkModalLayout() {
  const { user } = useAuthentication();

  return { user };
}
