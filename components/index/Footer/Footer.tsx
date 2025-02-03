import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation("landing-page");
  return (
    <div className="h-12 bg-[#191725] flex items-center">
      <p className="text-sm font-medium text-skin ml-[4.375rem]">
        {t("footer")}
      </p>
    </div>
  );
};

export default Footer;
