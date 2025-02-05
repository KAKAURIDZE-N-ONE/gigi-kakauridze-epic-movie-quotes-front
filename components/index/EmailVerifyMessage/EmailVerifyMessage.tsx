import React from "react";
import { MessageLayout } from "../MessageLayout";
import { Button } from "@/components/Button";
import { useAppSelector } from "@/store/store";
import { selectCurrentUserNotficationEmail } from "@/store/slices/modalSlice";
import { EMAIL_SENDER } from "@/config/emailSender";

const EmailVerifyMessage: React.FC = () => {
  const userEmail = useAppSelector(selectCurrentUserNotficationEmail);

  return (
    <div>
      <MessageLayout
        title="Thank you!"
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
      >
        Please check your email and follow the instructions to activate your
        account.
      </MessageLayout>
    </div>
  );
};

export default EmailVerifyMessage;
