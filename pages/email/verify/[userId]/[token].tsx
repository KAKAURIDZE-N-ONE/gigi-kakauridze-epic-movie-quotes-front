import { verifyUser } from "@/services/apiAuth";
import { updateOpenedModal } from "@/store/slices/modalSlice";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const VerifyEmail: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { userId, token, expires, signature } = router.query;

  useEffect(() => {
    async function verifyEmail() {
      try {
        await verifyUser({
          id: String(userId),
          hash: String(token),
          expires: String(expires),
          signature: String(signature),
        });

        router.push("/");
        dispatch(updateOpenedModal("verifySuccess"));
      } catch (error) {
        console.log("Error verifying email", error);
      }
    }

    if (userId && token && expires && signature) {
      verifyEmail();
    }
  }, [userId, token, expires, signature]);

  return <div>verify email</div>;
};

export default VerifyEmail;
