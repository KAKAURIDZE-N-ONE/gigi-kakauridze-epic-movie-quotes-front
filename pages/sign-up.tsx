import React from "react";
import Home from ".";
import useSignUpPage from "@/components/SignUpPage/useSignUpPage";

const SignUp: React.FC = () => {
  useSignUpPage();
  return <Home />;
};

export default SignUp;
