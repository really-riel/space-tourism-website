import React from "react";
import data from "../db/data.json";
import { useStoreState, useStoreActions } from "easy-peasy";

const Destination = () => {
  const destinations = data.destinations;
  const dataTypeIndex = useStoreState((state) => state.dataTypeIndex);
  const setDataTypeIndex = useStoreActions(
    (actions) => actions.setDataTypeIndex
  );

  return (
    <main className="Destination">
      <section>
        <p>PICK YOUR DESTINATION</p>
        <figure>
          <img
            className="rotate"
            src={destinations[dataTypeIndex].images.webp}
            alt={destinations[dataTypeIndex].name}
          />
        </figure>
      </section>
      <article>
        <ul>
          {destinations.map((destination, index) => (
            <li
              key={index}
              className={dataTypeIndex === index ? "selected" : null}
              onClick={() => setDataTypeIndex(index)}
            >
              {destination.name.toUpperCase()}
            </li>
          ))}
        </ul>
        <h1>{destinations[dataTypeIndex].name.toUpperCase()}</h1>
        <p className="description">{destinations[dataTypeIndex].description}</p>
        <hr />
        <section className="distanceTravelWrapper">
          <div className="distanceWrapper">
            <p className="distanceTravel">AVG.DISTANCE</p>
            <h2>{destinations[dataTypeIndex].distance}</h2>
          </div>
          <div className="travelWrapper">
            <p className="distanceTravel">EST.TRAVEL TIME</p>
            <h2>{destinations[dataTypeIndex].travel}</h2>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Destination;
