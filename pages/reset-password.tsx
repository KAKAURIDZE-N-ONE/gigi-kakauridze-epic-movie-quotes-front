import React from "react";
import Home from ".";
import useResetPasswordPage from "@/components/ResetPasswordPage/useResetPasswordPage";

const resetPassword: React.FC = () => {
  useResetPasswordPage();
  return <Home />;
};

export default resetPassword;
