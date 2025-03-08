import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ka"],
    defaultLocale: "en",
  },
};

export default nextConfig;
