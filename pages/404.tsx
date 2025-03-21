import { Button } from "@/components/Button";
import Eclipse from "@/components/icons/Eclipse";
import Ghost from "@/components/icons/Ghost";
import useIsMounted from "@/hooks/useIsMounted";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["not-found-page"])),
    },
  };
};

const NotFound: React.FC = () => {
  const { t } = useTranslation("not-found-page");
  const router = useRouter();

  const mounted = useIsMounted();
  if (!mounted) return null;

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #181623, #191725, #0D0B14)",
      }}
      className="h-screen flex items-center justify-center"
    >
      <div className="flex flex-col gap-7 lg:gap-8 items-center">
        <Ghost />
        <Eclipse />
        <h1 className="text-2xl lg:text-5xl font-bold text-white">
          {t("ups")}
        </h1>
        <h3 className="text-normal lg:text-2xl font-medium text-white">
          {t("text")}
        </h3>
        <Button clickFn={() => router.push("/")} size="small" color="red">
          {t("return_home")}
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
