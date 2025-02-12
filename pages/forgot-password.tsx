import React from "react";
import Home from ".";
import useForgotPasswordPage from "@/components/ForgotPasswordPage";

const ForgotPassword: React.FC = () => {
  useForgotPasswordPage();
  return <Home />;
};

export default ForgotPassword;
