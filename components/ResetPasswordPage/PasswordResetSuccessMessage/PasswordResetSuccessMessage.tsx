import { Button } from "@/components/Button";
import { MessageLayout } from "@/components/MessageLayout";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";

const PasswordResetSuccessMessage: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation("password-reset-success");

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

export default PasswordResetSuccessMessage;
