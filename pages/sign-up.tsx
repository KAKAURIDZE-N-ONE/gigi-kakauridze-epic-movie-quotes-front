import React from "react";
import Home from ".";
import useSignUpPage from "@/components/SignUpPage/useSignUpPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["sign-up-modal", "errors"])),
    },
  };
}

const SignUp: React.FC = () => {
  useSignUpPage();
  return <Home />;
};

export default SignUp;
