import React, { ReactNode } from "react";
import HeaderNav from "./Home/HeaderNav";

interface Props {
  children: ReactNode;
}

function Layout(props: Props) {
  return (
    <div>
      <HeaderNav />
      {props.children}
    </div>
  );
}

export default Layout;
