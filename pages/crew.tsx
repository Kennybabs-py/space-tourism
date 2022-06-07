import React, { useState } from "react";
import Header from "../components/Header";
import spaceData from "../public/data.json";
import Image from "next/image";

const Crew = () => {
  const [value, setValue] = useState(0);

  const crew = spaceData.crew;

  const {
    name,
    images,
    role,
    bio,
  }: {
    name: string;
    images: { png: string; webp: string };
    role: string;
    bio: string;
  } = crew[value];

  return (
    <section className="crews">
      <Header />

      <div className="meet-text">
        <span>02 </span>meet your crew
      </div>

      <div className="crew-personnel">
        {/* personnel infornation */}
        <div className="personnel-info">
          <div className="info-text">
            <div className="name-role">
              <span>{role}</span>
              <span>{name}</span>
            </div>
            <span className="bio">{bio}</span>
          </div>
          <img loading="lazy" src={images.png} alt={name} />
        </div>

        {/* each crew peronnel slider container */}
        <div className="slider-container">
          {crew.map((item, index) => {
            return (
              <span
                key={index}
                onClick={() => setValue(index)}
                className={index === value ? "active-btn" : ""}
              ></span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Crew;
