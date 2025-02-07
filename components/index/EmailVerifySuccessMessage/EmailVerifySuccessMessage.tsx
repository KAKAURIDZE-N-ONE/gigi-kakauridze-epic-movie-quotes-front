import React from "react";
import { Button } from "@/components/Button";
import { MessageLayout } from "@/components/MessageLayout";
import { useTranslation } from "react-i18next";

const EmailVerifySuccessMessage: React.FC = () => {
  const { t } = useTranslation("verify-email-success-modal");
  return (
    <div>
      <MessageLayout
        title={t("title")}
        actionBtn={
          <Button type="submit" size="small" clickFn={() => {}} color="red">
            {t("button")}
          </Button>
        }
      >
        {t("description")}
      </MessageLayout>
    </div>
  );
};

export default EmailVerifySuccessMessage;
