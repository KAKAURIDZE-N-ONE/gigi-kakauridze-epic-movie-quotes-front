import { googleVerify } from "@/services/apiAuth";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const GoogleAuthCallBack: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const verifyGoogleAuth = async () => {
      if (!router.isReady) return;

      try {
        const data: Record<string, string> = {};

        searchParams.forEach((value, key) => {
          data[key] = decodeURIComponent(value);
        });

        await googleVerify(data);
        router.push("/news-feed");
      } catch (error) {
        console.error("Error:", error);
      }
    };

    verifyGoogleAuth();
  }, [router.isReady, searchParams]);

  return <div>Processing Google login...</div>;
};

export default GoogleAuthCallBack;
