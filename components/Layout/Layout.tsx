import React from "react";
import { Props } from "./Props";
import { Header } from "../Header";

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
