import React from "react";
import Navbar from "./fixed/Navbar";
import { Outlet } from "react-router";
import Footer from "./fixed/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
