import React from "react";
import Home from ".";
import useForgotPasswordPage from "@/components/ForgotPasswordPage/useForgotPasswordPage";

const forgotPassword: React.FC = () => {
  useForgotPasswordPage();
  return <Home />;
};

export default forgotPassword;
