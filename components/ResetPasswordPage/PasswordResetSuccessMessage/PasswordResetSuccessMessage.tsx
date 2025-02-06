import { Button } from "@/components/Button";
import { MessageLayout } from "@/components/MessageLayout";
import { useRouter } from "next/router";
import React from "react";

const PasswordResetSuccessMessage: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <MessageLayout
        title="Success"
        actionBtn={
          <Button
            type="submit"
            size="small"
            clickFn={() => router.push("/log-in")}
            color="red"
          >
            Log in
          </Button>
        }
      >
        Your Password changed successfully
      </MessageLayout>
    </div>
  );
};

export default PasswordResetSuccessMessage;
