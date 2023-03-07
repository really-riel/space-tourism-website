import React from "react";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();
  const themeClass =
    pathname === "/"
      ? "home"
      : pathname === "/destination"
      ? "destination"
      : pathname === "/crew"
      ? "crew"
      : pathname === "/technology"
      ? "technology"
      : "technology";

  return (
    <div className={`App ${themeClass}`}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
