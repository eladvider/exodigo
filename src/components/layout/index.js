import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header/";
const Layout = () => {
  return (
    <>
      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default Layout;
