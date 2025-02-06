import useVerifyEmailPage from "@/components/VerifyEmailPage/useVerifyEmailPage";
import React from "react";

const VerifyEmail: React.FC = () => {
  const { isPending, error } = useVerifyEmailPage();

  return (
    <div className="flex h-[100vh] items-center justify-center">
      {isPending && <h1>Wait! verification is pending.</h1>}
    </div>
  );
};

export default VerifyEmail;
