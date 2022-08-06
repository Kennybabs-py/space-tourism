import React, { useState } from "react";
import Header from "components/Header/Header";
import styles from "styles/modules/Crew.module.scss";
import spaceData from "public/data.json";
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
    <section className={styles.crews}>
      <Header />

      <div className={styles.meet_text}>
        <span>02 </span>meet your crew
      </div>

      <div className={styles.crew_personnel}>
        {/* personnel information */}
        <div className={styles.personnel_info}>
          <div className={styles.info_text}>
            <div className={styles.name_role}>
              <span>{role}</span>
              <span>{name}</span>
            </div>
            <span className={styles.bio}>{bio}</span>
          </div>
          <img loading="lazy" src={images.png} alt={name} />
        </div>

        {/* each crew peronnel slider container */}
        <div className={styles.slider_container}>
          {crew.map((item, index) => {
            return (
              <span
                key={index}
                onClick={() => setValue(index)}
                className={index === value ? styles.active_btn : ""}
              ></span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Crew;
