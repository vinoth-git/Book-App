import React, { ReactNode } from "react";
import Footer from "./Footer";
import HeaderNav from "./Home/HeaderNav";

interface Props {
  children: ReactNode;
}

function Layout(props: Props) {
  return (
    <div>
      <HeaderNav />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
