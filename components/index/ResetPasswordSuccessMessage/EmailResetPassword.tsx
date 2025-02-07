import React from "react";
import { Button } from "@/components/Button";
import { updateOpenedModal } from "@/store/slices/modalSlice";
import { EMAIL_SENDER } from "@/config/emailSender";
import useEmailResetPassword from "./useEmailResetPassword";
import { MessageLayout } from "@/components/MessageLayout";

const EmailResetPassword: React.FC = () => {
  const { userEmail, dispatch, router, t } = useEmailResetPassword();

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
        action={{
          text: t("close"),
          fn: () => {
            dispatch(updateOpenedModal(null));
            router.push("/");
          },
        }}
      >
        {t("description")}
      </MessageLayout>
    </div>
  );
};

export default EmailResetPassword;
