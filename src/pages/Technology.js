import React from "react";
import Carousel from "react-elastic-carousel";
import { useStoreActions, useStoreState } from "easy-peasy";
import data from "../db/data.json";
import TechNavBtn from "./TechNavBtn";
import useWindowSize from "../hooks/useWindowSize";
import { useState, useEffect } from "react";

const Technology = () => {
  const technology = data.technology;
  const dataTypeIndex = useStoreState((state) => state.dataTypeIndex);
  const setDataTypeIndex = useStoreActions(
    (actions) => actions.setDataTypeIndex
  );
  const { width } = useWindowSize();
  const [isIndexAvailable, setIsIndexAvailable] = useState(false);

  useEffect(() => {
    if (dataTypeIndex < 3) setIsIndexAvailable(true);
  }, [dataTypeIndex]);

  return (
    <main className="Technology">
      <p className="intro">SPACE LAUNCH 101</p>
      <Carousel
        renderPagination={({ pages, activePage, onClick }) => (
          <TechNavBtn pages={pages} activePage={activePage} onClick={onClick} />
        )}
        onChange={(currentPageIndex) =>
          setDataTypeIndex(
            currentPageIndex.index !== undefined
              ? currentPageIndex.index
              : dataTypeIndex
          )
        }
      >
        {technology.map(
          (tech, index) =>
            tech && (
              <img
                key={index}
                src={
                  width > 1024 ? tech.images.portrait : tech.images.landscape
                }
                alt={tech.name}
              />
            )
        )}
      </Carousel>

      {isIndexAvailable && (
        <article>
          <p className="heading">THE TERMINOLOGY...</p>
          <h1>{technology[dataTypeIndex].name.toUpperCase()}</h1>
          <p className="desc">{technology[dataTypeIndex].description}</p>
        </article>
      )}
    </main>
  );
};

export default Technology;
