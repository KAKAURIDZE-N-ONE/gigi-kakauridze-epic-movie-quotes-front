import React from "react";
import Home from ".";
import { useResetPasswordPage } from "@/components/ResetPasswordPage";

const resetPassword: React.FC = () => {
  useResetPasswordPage();
  return <Home />;
};

export default resetPassword;
