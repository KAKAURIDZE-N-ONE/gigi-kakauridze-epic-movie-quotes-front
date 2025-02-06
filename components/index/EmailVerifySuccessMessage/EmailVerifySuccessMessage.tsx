import React from "react";
import { Button } from "@/components/Button";
import { MessageLayout } from "@/components/MessageLayout";

const EmailVerifySuccessMessage: React.FC = () => {
  return (
    <div>
      <MessageLayout
        title="Thank you!"
        actionBtn={
          <Button type="submit" size="small" clickFn={() => {}} color="red">
            Go to my news feed
          </Button>
        }
      >
        Your account has been activated.
      </MessageLayout>
    </div>
  );
};

export default EmailVerifySuccessMessage;
