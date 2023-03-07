import React from "react";
import data from "../db/data.json";
import Carousel from "react-elastic-carousel";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Crew = () => {
  const Crews = data.crew;
  const { pathname } = useLocation();

  const dataTypeIndex = useStoreState((state) => state.dataTypeIndex);
  const setDataTypeIndex = useStoreActions(
    (actions) => actions.setDataTypeIndex
  );

  useEffect(() => {
    setDataTypeIndex(0);
  }, [pathname]);

  return (
    <main className="Crew">
      <p className="intro">MEET YOUR CREW</p>

      <Carousel
        onChange={(currentPageIndex) =>
          setDataTypeIndex(
            currentPageIndex.index !== undefined
              ? currentPageIndex.index
              : dataTypeIndex
          )
        }
      >
        {Crews.map((crew, index) => (
          <img key={index} src={crew.images.webp} alt={crew.name} />
        ))}
      </Carousel>

      <article>
        <p className="role">{Crews[dataTypeIndex].role.toUpperCase()}</p>
        <h1>{Crews[dataTypeIndex].name.toUpperCase()}</h1>
        <p className="bio">{Crews[dataTypeIndex].bio}</p>
      </article>
    </main>
  );
};

export default Crew;
