import React, { useState } from "react";
import Header from "components/Header/Header";
import spaceData from "public/data.json";
import Image from "next/image";

const Destinations = () => {
  const [value, setValue] = useState(0);

  const destinations = spaceData.destinations;

  const {
    name,
    images,
    description,
    distance,
    travel,
  }: {
    name: string;
    images: { png: string; webp: string };
    description: string;
    distance: string;
    travel: string;
  } = destinations[value];

  return (
    <section className="destinations">
      <Header />

      <div className="pick-text">
        <span>01 </span>pick your destination
      </div>

      <div className="planet">
        {/* each destination button container */}
        <div className="btn-container">
          {destinations.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={index === value ? "active-btn" : ""}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        {/* planet infornation */}
        <div className="planet-info">
          <img loading="lazy" src={images.png} alt={name} />
          <div className="info-text">
            <span className="name">{name}</span>
            <span className="description">{description}</span>
            <div className="distance-travel">
              <div className="distance">
                <span>AVG. DISTANCE</span>
                <span>{distance}</span>
              </div>
              <div className="travel">
                <span>EST. TRAVEL TIME</span>
                <span>{travel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
