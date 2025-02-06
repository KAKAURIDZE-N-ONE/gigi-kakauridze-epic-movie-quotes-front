import React from "react";
import Home from ".";
import useLogInPage from "@/components/LogInPage/useLogInPage";

const LogIn: React.FC = () => {
  useLogInPage();
  return <Home />;
};

export default LogIn;
