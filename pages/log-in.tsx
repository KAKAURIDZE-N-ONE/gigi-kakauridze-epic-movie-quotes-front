import React from "react";
import Home from "./index";
import useLogInPage from "@/components/LogInPage/useLogInPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["log-in-modal"])),
    },
  };
}

const LogIn: React.FC = () => {
  useLogInPage();
  return <Home />;
};

export default LogIn;
