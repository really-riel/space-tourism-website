import React from "react";
import NavButton from "./NavButton";
import NavBar from "./NavBar";
import DropBar from "./DropBar";

const Nav = () => {
  return (
    <section className="navSection">
      <NavButton />
      <NavBar />
      <DropBar />
    </section>
  );
};

export default Nav;
