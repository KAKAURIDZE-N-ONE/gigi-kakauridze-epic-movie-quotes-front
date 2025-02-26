import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthentication } from "@/hooks/useAuthentication";
import { showInfoToast } from "@/utils/toast";

const useGuestOnly = () => {
  const router = useRouter();
  const { isAuthenticated, isPending } = useAuthentication();

  useEffect(() => {
    if (!isPending && isAuthenticated) {
      router.replace("/news-feed");
    }
  }, [isPending, isAuthenticated, router]);

  return { isAuthenticated };
};

export default useGuestOnly;
