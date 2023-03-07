import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="Missing">
      <h1>PAGE NOT FOUND</h1>
      <p>looks like you are lost</p>
      <Link to={"/"}>Visit our homepage</Link>
    </main>
  );
};

export default Missing;
