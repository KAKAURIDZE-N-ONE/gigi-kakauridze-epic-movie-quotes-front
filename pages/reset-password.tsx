import React from "react";
import Home from ".";
import { useResetPasswordPage } from "@/components/ResetPasswordPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["reset-password-modal"])),
    },
  };
}

const ResetPassword: React.FC = () => {
  useResetPasswordPage();
  return <Home />;
};

export default ResetPassword;
