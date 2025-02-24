import { googleVerify } from "@/services/apiAuth";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { showErrorToast, showSuccessToast } from "@/utils/toast";

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

        const response = await googleVerify(data);
        if (response?.error) {
          router.push("/log-in");
          showErrorToast(response?.error);
        } else {
          router.push("/news-feed");
          showSuccessToast(response?.status);
        }
      } catch (error) {
        console.error(error);
      }
    };

    verifyGoogleAuth();
  }, [router, searchParams]);

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="loader"></div>
    </div>
  );
};

export default GoogleAuthCallBack;
