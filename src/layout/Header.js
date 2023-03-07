import React from "react";
import logo from "../shared/logo.svg";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="Header">
      <img className="logo" src={logo} alt="space tourism logo" />

      <Nav />
    </header>
  );
};

export default Header;
