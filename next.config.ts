import type { NextConfig } from "next";
const { i18n } = require("./next-i18next.config");

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ka"],
  },
};

export default nextConfig;
