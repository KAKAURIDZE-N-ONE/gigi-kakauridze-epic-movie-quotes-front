import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ka"],
  },
};

export default nextConfig;
