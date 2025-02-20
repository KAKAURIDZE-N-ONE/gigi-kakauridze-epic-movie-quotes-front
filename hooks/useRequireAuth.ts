import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthentication } from "@/hooks/useAuthentication";
import { showInfoToast } from "@/utils/toast";

const useRequireAuth = () => {
  const router = useRouter();
  const { isAuthenticated, isPending } = useAuthentication();

  useEffect(() => {
    if (!isPending && !isAuthenticated) {
      router.replace("/log-in");
      showInfoToast("Please log in to continue.");
    }
  }, [isPending, isAuthenticated, router]);

  return { isAuthenticated, isPending };
};

export default useRequireAuth;
