import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithI18Next } from "ni18n";
import { ni18nConfig } from "@/next-i18next.config";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import Loader from "@/components/Loader";
import usePageIsLoading from "@/hooks/usePageIsLoading";
import useAddPusher from "@/hooks/useAddPusher";

const queryClient = new QueryClient();
const App = function ({ Component, pageProps }: AppProps) {
  const { pageIsLoading } = usePageIsLoading();
  useAddPusher();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {pageIsLoading && <Loader />}
        <Component {...pageProps} />
        <ToastContainer />
      </QueryClientProvider>
    </Provider>
  );
};

export default appWithI18Next(App, ni18nConfig);
