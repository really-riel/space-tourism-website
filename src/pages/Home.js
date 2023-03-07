import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="Home">
      <section>
        <p>SO, YOU WANT TO TRAVEL TO</p>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <section>
        <Link to={"destination"}>
          <button>EXPLORE</button>
        </Link>
      </section>
    </main>
  );
};

export default Home;
