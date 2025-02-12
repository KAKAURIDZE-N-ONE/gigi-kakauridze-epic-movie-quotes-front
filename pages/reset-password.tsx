import React from "react";
import Home from ".";
import { useResetPasswordPage } from "@/components/ResetPasswordPage";

const ResetPassword: React.FC = () => {
  useResetPasswordPage();
  return <Home />;
};

export default ResetPassword;
