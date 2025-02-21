import { useAuthentication } from "@/hooks/useAuthentication";
import { useRouter } from "next/router";

export default function useDarkModalLayout() {
  const router = useRouter();
  const { user } = useAuthentication();

  return { user, router };
}
