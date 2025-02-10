import { googleVerify } from "@/services/apiAuth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const GoogleAuthCallBack: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const verifyGoogleAuth = async () => {
      if (!router.isReady) return;

      try {
        const queryParams = router.query;
        const data: Record<string, string> = {};

        Object.keys(queryParams).forEach((key) => {
          data[key] = String(queryParams[key]);
        });

        await googleVerify(data);
        router.push("/news-feed");
      } catch (error) {
        console.error("Error:", error);
      }
    };

    verifyGoogleAuth();
  }, [router.isReady, router.query]);

  return <div>Processing Google login...</div>;
};

export default GoogleAuthCallBack;
