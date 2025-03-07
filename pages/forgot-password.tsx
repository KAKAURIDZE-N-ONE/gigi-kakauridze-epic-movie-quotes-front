import React from "react";
import Home from ".";
import useForgotPasswordPage from "@/components/ForgotPasswordPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "forgot-password-modal",
        "sign-up-modal",
      ])),
    },
  };
}

const ForgotPassword: React.FC = () => {
  useForgotPasswordPage();
  return <Home />;
};

export default ForgotPassword;
