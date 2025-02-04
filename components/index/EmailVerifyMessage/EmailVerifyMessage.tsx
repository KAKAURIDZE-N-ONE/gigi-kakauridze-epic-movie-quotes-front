import React from "react";
import { MessageLayout } from "../MessageLayout";
import Post from "../svgs/Post";
import { Button } from "@/components/Button";

const EmailVerifyMessage: React.FC = () => {
  return (
    <div>
      <MessageLayout
        title="Thank you!"
        actionBtn={
          <Button
            type="submit"
            size="small"
            clickFn={() => {
              window.open("https://mail.google.com", "_blank");
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
