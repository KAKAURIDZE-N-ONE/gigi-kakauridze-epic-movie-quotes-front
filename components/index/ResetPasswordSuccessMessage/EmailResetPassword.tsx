import React from "react";
import { Button } from "@/components/Button";
import { useDispatch } from "react-redux";
import { updateOpenedModal } from "@/store/slices/modalSlice";
import { EMAIL_SENDER } from "@/config/emailSender";
import useEmailResetPassword from "./useEmailResetPassword";
import { MessageLayout } from "@/components/MessageLayout";

const EmailResetPassword: React.FC = () => {
  const { userEmail, dispatch, router } = useEmailResetPassword();

  return (
    <div>
      <MessageLayout
        title="Check your email"
        actionBtn={
          <Button
            type="submit"
            size="small"
            clickFn={() => {
              const gmailSearchUrl = `https://mail.google.com/mail/u/${userEmail}/#search/from:${EMAIL_SENDER}`;
              window.open(gmailSearchUrl, "_blank");
            }}
            color="red"
          >
            Go to my email
          </Button>
        }
        action={{
          text: "Skip, I'll confirm later",
          fn: () => {
            dispatch(updateOpenedModal(null));
            router.push("/");
          },
        }}
      >
        We have sent a password recover instructions to your email
      </MessageLayout>
    </div>
  );
};

export default EmailResetPassword;
