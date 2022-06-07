import React, { useState } from "react";
import Header from "../components/Header";
import spaceData from "../public/data.json";

const Technology = () => {
  const [value, setValue] = useState(0);
  const tech = spaceData.technology;

  const {
    name,
    images,
    description,
  }: {
    name: string;
    images: { portrait: string; landscape: string };
    description: string;
  } = tech[value];

  return (
    <section className="technology">
      <Header />

      <div className="launch-text">
        <span>03</span>space launch 101
      </div>

      <div className="launch-vehicle">
        <div className="slider-container">
          {tech.map((item, index) => {
            return (
              <span
                key={index}
                onClick={() => setValue(index)}
                className={index === value ? "active-btn" : ""}
              >
                {index}
              </span>
            );
          })}
        </div>

        <div className="vehicle-info">
          <div className="vehicle-text">
            <div className="terminology">
              <span>the terminology...</span>
              <span>{name}</span>
            </div>
            <span className="description">{description}</span>
          </div>
          <img
            loading="lazy"
            src={images.portrait}
            alt={name}
            className="image-portrait"
          />
          <img
            loading="lazy"
            src={images.landscape}
            alt={name}
            className=" image-landscape"
          />
        </div>
      </div>
    </section>
  );
};

export default Technology;
