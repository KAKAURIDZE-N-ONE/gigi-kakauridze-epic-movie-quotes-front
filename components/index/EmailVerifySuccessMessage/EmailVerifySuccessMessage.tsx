import React from "react";
import { Button } from "@/components/Button";
import { MessageLayout } from "@/components/MessageLayout";
import useEmailVerifySuccessMessage from "./useEmailVerifySuccessMessage";

const EmailVerifySuccessMessage: React.FC = () => {
  const { router, t } = useEmailVerifySuccessMessage();
  return (
    <div>
      <MessageLayout
        title={t("title")}
        actionBtn={
          <Button
            type="submit"
            size="small"
            clickFn={() => router.push("/log-in")}
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

export default EmailVerifySuccessMessage;
