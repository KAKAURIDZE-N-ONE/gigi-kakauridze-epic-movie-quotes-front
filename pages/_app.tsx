import { Layout } from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithI18Next } from "ni18n";
import { ni18nConfig } from "@/next-i18next.config";

const App = function ({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithI18Next(App, ni18nConfig);
