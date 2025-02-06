import { useRouter } from "next/router";
import { useEffect } from "react";
import useVerifyEmail from "./useVerifyEmail";

export default function useVerifyEmailPage() {
  const router = useRouter();
  const { userId, token, expires, signature } = router.query;

  const { mutate, isPending, error } = useVerifyEmail();

  useEffect(() => {
    function verifyEmail() {
      mutate({
        id: String(userId),
        hash: String(token),
        expires: String(expires),
        signature: String(signature),
      });
    }
    if (userId && token && expires && signature) {
      verifyEmail();
    }
  }, [userId, token, expires, signature]);

  return { isPending, error };
}
