import React from "react";
import { Button } from "@/components/Button";
import { EMAIL_SENDER } from "@/config/emailSender";
import { MessageLayout } from "@/components/MessageLayout";
import useEmailVerifyMessage from "./useEmailVerifyMessage";

const EmailVerifyMessage: React.FC = () => {
  const { t, userEmail } = useEmailVerifyMessage();
  return (
    <div>
      <MessageLayout
        title={t("title")}
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
            {t("button")}
          </Button>
        }
      >
        {t("description")}
      </MessageLayout>
    </div>
  );
};

export default EmailVerifyMessage;
