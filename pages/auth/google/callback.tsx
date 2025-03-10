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
          setTimeout(() => {
            showErrorToast(response?.error);
          }, 1000);
          router.push("/log-in");
        } else {
          router.push("/news-feed");
          setTimeout(() => {
            showSuccessToast(response?.status);
          }, 1000);
        }
      } catch (error) {
        console.error(error);
      }
    };

    verifyGoogleAuth();
  }, [router, searchParams]);

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #181623, #191725, #0D0B14)",
      }}
      className="w-full h-[100vh] flex items-center justify-center"
    >
      <div className="loader"></div>
    </div>
  );
};

export default GoogleAuthCallBack;
