import React from "react";
import { Props } from "./Props";
import { Header } from "../Header";
import Head from "next/head";

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="">
      <Head>
        <title>Epic Movie Quotes</title>
      </Head>
      <Header />
      <div className="min-h-screen">{children}</div>
    </div>
  );
};

export default Layout;
