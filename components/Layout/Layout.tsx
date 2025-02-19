import React from "react";
import { Props } from "./Props";
import { Header } from "../Header";
import Head from "next/head";

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Epic Movie Quotes</title>
      </Head>
      <Header />
      <div className="mt-[5.375rem]">{children}</div>
    </div>
  );
};

export default Layout;
