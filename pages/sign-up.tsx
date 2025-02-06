import React from "react";
import Home from ".";
import useSignUpPage from "@/components/SignUpPage/useSignUpPage";

const signUp: React.FC = () => {
  useSignUpPage();
  return <Home />;
};

export default signUp;
